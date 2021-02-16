import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { useStreamQueries,  } from "@daml/react";
import { EF } from '@daml.js/ef-app/lib';
import useStyles from "./styles";


export default function FundingApprovalList() {
    const assets = useStreamQueries(EF.FundingContractApproval).contracts;
    const classes = useStyles();
   

  return (
    <>
    <Table size="small">
    <TableHead>
      <TableRow className={classes.tableRow}>
        <TableCell key={0} className={classes.tableCell}>Lessor</TableCell>
        <TableCell key={1} className={classes.tableCell}>FundingDate</TableCell>
        <TableCell key={2} className={classes.tableCell}>Funding Contract ID</TableCell>
        <TableCell key={3} className={classes.tableCell}>Amount</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {assets.map(a => (
        <TableRow key={a.contractId} className={classes.tableRow}>
          <TableCell key={0} className={classes.tableCell}>{a.payload.lessor}</TableCell>
          <TableCell key={1} className={classes.tableCell}>{a.payload.fundingDate}</TableCell>
          <TableCell key={1} className={classes.tableCell}>{a.payload.fundingRequestId}</TableCell>
          <TableCell key={2} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.amount}</TableCell>
        </TableRow>
          ))}
      </TableBody>
      </Table>
      </>
    );
}

