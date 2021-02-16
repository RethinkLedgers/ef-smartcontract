import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import { useStreamQueries, useQuery, useLedger, useParty } from "@daml/react";
import Ledger from "@daml/ledger";
import { FundingApproval  } from "@daml.js/ef-app/lib/EF";
import { EF } from '@daml.js/ef-app/lib';
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";

export default function FundingRequestList() {
    const assets = useStreamQueries(EF.FundingContractRequest).contracts;
    const classes = useStyles();
    const party = useParty();
    const ledger : Ledger = useLedger();

   
    const defaultApprovalProps : InputDialogProps<FundingApproval> = {
      open: false,
      title: "Funding Approval",
      defaultValue: { newFundingDate : "" ,  newDealerCommission: "",  selectedlessor: party },
      fields: {
        newFundingDate : {
          label: "New Owner",
          type: "date"
        },
        newDealerCommission : {
          label: "Dealer Commision",
          type: "number"
        },
        selectedlessor : {
          label: "Lessor",
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
        await ledger.exercise(EF.FundingContractRequest.FundingApproval, asset.contractId, state);
      };
      setApprovalProps({ ...defaultApprovalProps, open: true, onClose})
    };
  

    return (
      <>
        <InputDialog { ...approvalProps } />
  
        <Table size="small">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell key={0} className={classes.tableCell}>Lessor</TableCell>
              <TableCell key={1} className={classes.tableCell}>OriginationFee</TableCell>
              <TableCell key={2} className={classes.tableCell}>Originator</TableCell>
              <TableCell key={5} className={classes.tableCell}>Approval</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map(a => (
              <TableRow key={a.contractId} className={classes.tableRow}>
                <TableCell key={0} className={classes.tableCell}>{a.payload.lessor}</TableCell>
                <TableCell key={1} className={classes.tableCell}>{a.payload.originationFee}</TableCell>
                <TableCell key={2} className={classes.tableCell}>{a.payload.fundingContract.originator}</TableCell>
                <TableCell key={5} className={classes.tableCellButton}>
                  <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.lessor !== party} onClick={() => showApproval(a)}>Approval</Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
}
