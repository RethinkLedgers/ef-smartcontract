import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQueries, useQuery } from "@daml/react";
import { EF } from '@daml.js/ef-app/lib';

export default function FundingApprovalList() {
    const assets = useStreamQueries(EF.FundingContractApproval).contracts;

  return (
    <>
       <Contracts
        contracts={assets}
        columns={[
          ["ContractId", "contractId"],
          ["Citizen", "payload.citizen"] ]}
        actions={[
          ["Funding Request", (c) => { handleConductModalOpen(c.contractId, c.payload.citizen, c.payload.statehealth, c.payload.covid19testdata.testdate, c.payload.covid19testdata.testresult); }]
        ]}

      />

    </>
  );
}
