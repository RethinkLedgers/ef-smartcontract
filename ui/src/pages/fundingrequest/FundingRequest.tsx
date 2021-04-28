import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import { useStreamQueries, useLedger, useParty } from "@daml/react";
import Ledger from "@daml/ledger";
import { FundingApproval, FundingContractRequest  } from "@daml.js/ef-app/lib/EF";
import { EF } from '@daml.js/ef-app/lib';
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";
import { ContractId } from "@daml/types";
import { useKnownParties } from '../../UseKnownParties'; // BGY

export default function FundingRequestList() {
    const assets = useStreamQueries(EF.FundingContractRequest).contracts;
    const classes = useStyles();
    const party = useParty();
    const contractid = ContractId
    const ledger : Ledger = useLedger();
    const {displayName, partyIdentifier, knownPartyDisplayNames} = useKnownParties () // BGY

    const defaultApprovalProps : InputDialogProps<FundingApproval> = {
      open: false,
      title: "Funding Approval",
      defaultValue: {  newFundingDate: "",  selectedgse: party, newFundingRequestId: ""},
      fields :{
        newFundingDate : {
          label: "FundingDate",
          type: "date"
        },
        
        selectedGse : {
          label: "GSE",
          type: "text"
        },
        newFundingRequestId : {
          label: "FundingRequest Contract Id",
          type: "text"
        }
      },
      onClose: async function() {}
    };

  
    const [ approvalProps, setApprovalProps ] = useState(defaultApprovalProps);
    // One can pass the original contracts CreateEvent
    function showApproval(asset : EF.FundingContractRequest.CreateEvent) {
      async function onClose(state : FundingApproval | null) {
        setApprovalProps({ ...defaultApprovalProps, open: false});
        if (!state) return;
        await ledger.exercise(EF.FundingContractRequest.FundingApproval, asset.contractId, {...state, selectedlessor: partyIdentifier(state.selectedlessor)}); //BGY
        /* await ledger.exercise(EF.FundingContractRequest.FundingApproval, asset.contractId, {...state, selectedlessor: partyIdentifier(state.selectedlessor)}); */
      };
      setApprovalProps({ ...defaultApprovalProps, open: true, onClose})
    };
  

    return (
      <>
        <InputDialog { ...approvalProps } />
        <Table size="small">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell key={0} className={classes.tableCell}>Contract</TableCell>
              <TableCell key={1} className={classes.tableCell}>GSE</TableCell>
              <TableCell key={2} className={classes.tableCell}>Originator</TableCell>
              <TableCell key={3} className={classes.tableCell}>Home Owner</TableCell>
              <TableCell key={4} className={classes.tableCell}>Amount</TableCell>
              <TableCell key={5} className={classes.tableCell}>EF Contrat</TableCell>
              <TableCell key={6} className={classes.tableCell}>Rate</TableCell>
              <TableCell key={7} className={classes.tableCell}>Type</TableCell>
              <TableCell key={8} className={classes.tableCell}>Asset Type</TableCell>
              <TableCell key={9} className={classes.tableCell}>OriginationFee</TableCell>
              <TableCell key={10} className={classes.tableCell}>Approval</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map(a => (
              <TableRow key={a.contractId} className={classes.tableRow}>
                <TableCell key={0} className={classes.tableCellContract}>{a.contractId}</TableCell>
                <TableCell key={1} className={classes.tableCell}>{displayName(a.payload.gse)}</TableCell>
                <TableCell key={2} className={classes.tableCell}>{displayName(a.payload.fundingContract.originator)}</TableCell>
                <TableCell key={3} className={classes.tableCell}>{a.payload.fundingContract.homeowner}</TableCell>
                <TableCell key={4} className={classes.tableCell}>{a.payload.fundingContract.amount}</TableCell>
                <TableCell key={5} className={classes.tableCellContract}>{a.payload.fundingContractId}</TableCell>
                <TableCell key={6} className={classes.tableCell}>{a.payload.fundingContract.rate}</TableCell>
                <TableCell key={7} className={classes.tableCell}>{a.payload.fundingContract.homeloantype}</TableCell>
                <TableCell key={8} className={classes.tableCell}>{a.payload.fundingContract.assetType}</TableCell>
                <TableCell key={9} className={classes.tableCell}>{a.payload.originationFee}</TableCell>
                <TableCell key={10} className={classes.tableCellButton}>
                  <Button color="primary" size="small" className={classes.choiceButton} variant="contained"  onClick={() => showApproval(a)}>Approval</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
}
