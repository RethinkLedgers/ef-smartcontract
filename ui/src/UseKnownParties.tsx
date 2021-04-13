// Usage in components:
// import {useKnownParties} from '../UseKnownParties'
// Within the component:
// const {displayName, partyIdentifier} = useKnownParties () 

import React, { useEffect } from 'react';
import { useLedger } from '@daml/react';
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
        displayName : (id: string ): string => {
            return knownParties.filter((x : PartyInfo) => x.identifier === id)[0]?.displayName || id 
            },
        partyIdentifier : (displayName: string): string => {
            return knownParties.filter((x : PartyInfo) => x.displayName === displayName)[0]?.identifier || displayName 
            },
        knownPartyDisplayNames: knownParties.map((x : PartyInfo)  => x.displayName || x.identifier)
    }

}
