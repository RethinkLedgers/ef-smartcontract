// Usage in components:
// import {useKnownParties} from '../UseKnownParties'
// Within the component:
// const {displayName, partyIdentifier} = useKnownParties () 

// YOU NEED THESE IMPORTS FOR RUNNING LOCALLY - START
import React, { useEffect } from 'react';
import { useLedger, useParty } from '@daml/react';
import Ledger, { PartyInfo } from '@daml/ledger';
// YOU NEED THESE IMPORTS FOR RUNNING LOCALLY - END

// YOU NEED THIS IMPORT FOR RUNNING ON DAML HB - START
/* import { PartyInfo } from '@daml/ledger';  */
// YOU NEED THIS IMPORT FOR RUNNING ON DAML HB - END

export function useKnownParties () {

    // YOU NEED THIS PART FOR RUNNING LOCALLY - START
    const [knownParties, setKnownParties] = React.useState<PartyInfo[]>([]);
    const ledger: Ledger = useLedger();

    useEffect(() => {
    const getKnownParties = async () => {
        let lst = await ledger.listKnownParties();
        setKnownParties(lst);
    } ;
    getKnownParties()
    }, [ledger]);
    // YOU NEED THIS PART FOR RUNNING LOCALLY - END

    // YOU NEED THIS PART FOR RUNNING ON DAML HUB - START
    /* const knownParties : PartyInfo[] = require('./parties.json') */
    // YOU NEED THIS PART FOR RUNNING ON DAML HUB - END

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
