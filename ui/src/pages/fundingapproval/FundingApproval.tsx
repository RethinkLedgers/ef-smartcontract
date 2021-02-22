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
        <TableCell key={0} className={classes.tableCell}>Contract</TableCell>
        <TableCell key={1} className={classes.tableCell}>Lessor</TableCell>
        <TableCell key={2} className={classes.tableCell}>FundingDate</TableCell>
        <TableCell key={3} className={classes.tableCell} >Funding Contract ID</TableCell>
        <TableCell key={4} className={classes.tableCell}>Amount</TableCell>
        <TableCell key={5} className={classes.tableCell}>Originator</TableCell>
        <TableCell key={6} className={classes.tableCell}>Business</TableCell>
        <TableCell key={7} className={classes.tableCell}>EF Contract</TableCell>
        <TableCell key={8} className={classes.tableCell}>Rate</TableCell>
        <TableCell key={9} className={classes.tableCell}>Type</TableCell>
        <TableCell key={10} className={classes.tableCell}>Asset Type</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {assets.map(a => (
        <TableRow key={a.contractId} className={classes.tableRow}>
          <TableCell key={0} className={classes.tableCellContract}>{a.contractId}</TableCell>
          <TableCell key={1} className={classes.tableCell}>{a.payload.lessor}</TableCell>
          <TableCell key={2} className={classes.tableCell}>{a.payload.fundingDate}</TableCell>
          <TableCell key={3} className={classes.tableCellContract}>{a.payload.fundingRequestId}</TableCell>
          <TableCell key={4} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.amount}</TableCell>
          <TableCell key={5} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.originator}</TableCell>
          <TableCell key={6} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.business}</TableCell>
          <TableCell key={7} className={classes.tableCellContract}>{a.payload.fundingRequest.fundingContractId}</TableCell>
          <TableCell key={8} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.rate}</TableCell>
          <TableCell key={9} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.eftype}</TableCell>
          <TableCell key={10} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.assetType}</TableCell>
        </TableRow>
          ))}
      </TableBody>
      </Table>
      </>
    );
}

