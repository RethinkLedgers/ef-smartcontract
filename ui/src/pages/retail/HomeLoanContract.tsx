// Copyright (c) RethinkLedgers

import React, { useState } from 'react';
import { Container, Grid, } from 'semantic-ui-react';
import { TableHead, TableBody, TableRow, TableCell, Table } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { EF } from '@daml.js/ef-app/lib';
import { useParty, useLedger, useStreamQueries } from '@daml/react';
import Ledger from "@daml/ledger";
import { HomeLoanContract } from "@daml.js/ef-app/lib/EF";
import { FundingRequest } from "@daml.js/ef-app/lib/EF";
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";
import { useKnownParties } from '../../UseKnownParties'; // BGY



export default function HomeLoanContractList() {

  const retailcontracts = useStreamQueries(EF.HomeLoanContract).contracts;
  const classes = useStyles();
  const party = useParty();
  const ledger: Ledger = useLedger();
  const today = (new Date()).toISOString().slice(0, 10);
  const {displayName, partyIdentifier, knownPartyDisplayNames} = useKnownParties () // BGY


  type InputFieldsForNewAsset = Omit<HomeLoanContract, "HomeLoanContract">;
  const defaultNewAssetProps: InputDialogProps<InputFieldsForNewAsset> = {
    open: false,
    title: "New  Home LoanContract",
    defaultValue: {
      originator: party,
      homeowner: party,
      homeloantype: "ARM",
      startdate: "",
      duration: "",
      amount: "0",
      rate: "0.0",
      assetType: "House",
      creditScore: "",
      commission: "",
    },
    fields: {
      originator: {
        label: "Originator",
        type: "text",
      },
      homeowner: {
        label: "Home Owner",
        type: "text"
      },
      homeloantype: {
        label: "Home Loan Type",
        type: "selection",
        items: ["ARM", "Fixed"]
      },
      startdate: {
        label: "Contract Date",
        type: "date"
      },
      duration: {
        label: "Duration",
        type: "selection",
        items: ["30yr", "10yr"]
      },
      amount: {
        label: "Amount",
        type: "number"
      },
      rate: {
        label: "Rate",
        type: "number"
      },
      assetType: {
        label: "Asset Type",
        type: "selection",
        items: ["House", "Condo"]
      },
      creditScore: {
        label: "Credit Score",
        type: "number"
      },
      commission: {
        label: "Commission",
        type: "number"
      }
    },
    onClose: async function () { }
  };
  const [newAssetProps, setNewAssetProps] = useState(defaultNewAssetProps);
  function showNewAsset() {
    async function onClose(state: InputFieldsForNewAsset | null) {
      setNewAssetProps({ ...defaultNewAssetProps, open: false });
      if (!state) return;
      const efData = { ...state, originator:  partyIdentifier(state.originator), homeowner: partyIdentifier(state.homeowner)}; // BGY
      await ledger.create(EF.HomeLoanContract, efData);
    };
    setNewAssetProps({ ...defaultNewAssetProps, open: true, onClose });
  };


  const defaultRequestProps: InputDialogProps<FundingRequest> = {
    open: false,
    title: "Funding Request",
    defaultValue: { newGse: party,  newFee: "", newFundingContractId: ""},
    fields: {
      newGse: {
        label: "GSE",
        type: "text"
      },
      newFee: {
        label: "Fee",
        type: "number"
      },
      newFundingContractId: {
        label: "Funding Contract ID",
        type: "text"
      }
    },
    onClose: async function () { }
  };


  const [requestProps, setRequestProps] = useState(defaultRequestProps);
  // One can pass the original contracts CreateEvent
  function showRequest(asset: EF.HomeLoanContract.CreateEvent) {
    async function onClose(state: FundingRequest | null) {
      setRequestProps({ ...defaultRequestProps, open: false });
      if (!state) return;
      await ledger.exercise(EF.HomeLoanContract.FundingRequest, asset.contractId, {...state, newGse: partyIdentifier(state.newGse)}); //BGY
    };
    setRequestProps({ ...defaultRequestProps, open: true, onClose })
  };



  return (
    <Container>
      <Grid >
        <InputDialog {...newAssetProps} />
        <InputDialog {...requestProps} />
        <Button color="primary" size="small" className={classes.choiceButton} variant="contained" onClick={() => showNewAsset()}>
          Create New Asset
            </Button>

        <Table size="small">
          <TableHead>
            {/* <div>
              <p>RetailContracts</p>
            </div> */}
            <TableRow>
              <TableCell key={0}> Contract</TableCell>
              <TableCell key={1}> Originator</TableCell>
              <TableCell key={2}> Home Owner</TableCell>
              <TableCell key={3}> Loan Type</TableCell>
              <TableCell key={4}> Duration</TableCell>
              <TableCell key={5}> Amount</TableCell>
              <TableCell key={6}> Rate</TableCell>
              <TableCell key={7}> Asset Type</TableCell>
              <TableCell key={9}> Credit Score</TableCell>
              <TableCell key={10}> Commission</TableCell>
              <TableCell key={11} className={classes.tableCell}>Request</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {retailcontracts.map(r => (
              <TableRow key={r.contractId}>
                <TableCell key={0}  className={classes.tableCellContract}>{r.contractId}</TableCell>
                <TableCell key={1} >{displayName(r.payload.originator)}</TableCell> 
                <TableCell key={2} >{displayName(r.payload.homeowner)}</TableCell> 
                <TableCell key={3} >{r.payload.homeloantype}</TableCell>
                <TableCell key={4} >{r.payload.duration}</TableCell>
                <TableCell key={5} >{r.payload.amount}</TableCell>
                <TableCell key={6} >{r.payload.rate}</TableCell>
                <TableCell key={7} >{r.payload.assetType}</TableCell>
                <TableCell key={9} >{r.payload.creditScore}</TableCell>
                <TableCell key={10} >{r.payload.commission}</TableCell>
                <TableCell key={11} className={classes.tableCellButton}>
                  <Button color="primary" size="small" className={classes.choiceButton} variant="contained" onClick={() => showRequest(r)}>Funding Request</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Container>
  );
}
