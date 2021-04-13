// Usage in components:
// import {useKnownParties} from '../UseKnownParties'
// Within the component:
// const {displayName, partyIdentifier} = useKnownParties () 

import React, { useEffect } from 'react';
import { useLedger, useParty } from '@daml/react';
import Ledger, { PartyInfo } from '@daml/ledger';

export function useKnownParties () {
    const [knownParties, setKnownParties] = React.useState<PartyInfo[]>([]);
    const ledger: Ledger = useLedger();

    useEffect(() => {
    const getKnownParties = async () => {
        let lst = await ledger.listKnownParties();
        setKnownParties(lst);
    } ;
    getKnownParties()
    }, [ledger]);

    return {
        displayName : (id: string | undefined): string => {

            if (id === undefined) {
            return "";
            } else {
            return knownParties.filter(x => x.identifier === id)[0]?.displayName || id 
            }},
        partyIdentifier : (displayName: string | undefined): string => {
            let filterResult = knownParties.filter(x => x.displayName === displayName)
            if (filterResult === []) {
                throw new Error("Party display name doesn't exist")
            } else {
                return filterResult[0].identifier
            }},
        knownPartyDisplayNames: knownParties.map(x => x.displayName || x.identifier)
    }

}
