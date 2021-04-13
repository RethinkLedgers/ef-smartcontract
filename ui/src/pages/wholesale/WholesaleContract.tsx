// Copyright (c) RethinkLedgers

import React, { useState } from 'react';
import { Container, Grid, } from 'semantic-ui-react';
import { TableHead, TableBody, TableRow, TableCell, Table } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { EF } from '@daml.js/ef-app/lib';
import { useParty, useLedger, useStreamQueries } from '@daml/react';
import Ledger from "@daml/ledger";
import { WholesaleContract } from "@daml.js/ef-app/lib/EF";
import { CloseWholeSaleContract } from "@daml.js/ef-app/lib/EF";
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";
import { useKnownParties } from '../../UseKnownParties'; // BGY



export default function WholesaleContractList() {

  const assets = useStreamQueries(EF.WholesaleContract).contracts;
  const classes = useStyles();
  const party = useParty();
  const ledger: Ledger = useLedger();
  const {displayName, partyIdentifier} = useKnownParties () // BGY


  type InputFieldsForNewAsset = Omit<WholesaleContract, "Wholesale Contract">;
  const defaultNewAssetProps: InputDialogProps<InputFieldsForNewAsset> = {
    open: false,
    title: "New WholeSale Contract",
    defaultValue: {
      originator: party,
      dealer: party,
      eftype: "Lease",
      startDate: "",
      endDate: "",
      duration: "",
      amount: "0",
      rate: "0.0",
      assetType: "Van",
      vin: "",
      closingContractId: "",
      status: "",
    },
    fields: {
      originator: {
        label: "Originator",
        type: "text",
      },
      dealer: {
        label: "Dealer",
        type: "text"
      },
      eftype: {
        label: "EF Type",
        type: "selection",
        items: ["Loan", "Lease"]
      },
      startDate: {
        label: "Start Date",
        type: "date"
      },
      endDate: {
        label: "End Date",
        type: "date"
      },
      duration: {
        label: "Duration",
        type: "selection",
        items: ["3yr", "1yr"]
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
        items: ["Van", "Tractor"]
      },
      vin: {
        label: "Vin",
        type: "text"
      },
      closingContractId: {
        label: "Closing Contract",
        type: "text"
      },
      status: {
        label: "Status",
        type: "selection",
        items: ["Funded", "Closed"]
      }
    },
    onClose: async function () { }
  };
  const [newAssetProps, setNewAssetProps] = useState(defaultNewAssetProps);
  function showNewAsset() {
    async function onClose(state: InputFieldsForNewAsset | null) {
      setNewAssetProps({ ...defaultNewAssetProps, open: false });
      if (!state) return;
      const wholesaleData = { ...state, originator: partyIdentifier(state.originator), dealer: partyIdentifier(state.dealer) }; // BGY
      await ledger.create(EF.WholesaleContract, wholesaleData);
    };
    setNewAssetProps({ ...defaultNewAssetProps, open: true, onClose });
  };

  const defaultCloseProps: InputDialogProps<CloseWholeSaleContract> = {
    open: false,
    title: "Close Contract",
    defaultValue: { newEndDate: "", newClosingContractId: "" },
    fields: {
      newEndDate: {
        label: "End Date",
        type: "date"
      },
      newClosingContractId: {
        label: "Closing Contract Id",
        type: "text"
      }
    },
    onClose: async function () { }
  };


  const [closeProps, setCloseProps] = useState(defaultCloseProps);
  // One can pass the original contracts CreateEvent
  function showClose(asset: EF.WholesaleContract.CreateEvent) {
    async function onClose(state: CloseWholeSaleContract | null) {
      setCloseProps({ ...defaultCloseProps, open: false });
      if (!state) return;
      await ledger.exercise(EF.WholesaleContract.CloseWholeSaleContract, asset.contractId, state);
    };
    setCloseProps({ ...defaultCloseProps, open: true, onClose })
  };


  return (
    <Container>
      <Grid >
        <InputDialog {...closeProps} />
        <InputDialog {...newAssetProps} />
        <Button color="primary" size="small" className={classes.choiceButton} variant="contained" onClick={() => showNewAsset()}>
          Create New WholeSale Contract
            </Button>

        <Table size="small">
          <TableHead>
            <div>
              <p>WholeSaleContracts</p>
            </div>
            <TableRow>
              <TableCell key={0}> Contract</TableCell>
              <TableCell key={1}> Originator</TableCell>
              <TableCell key={2}> Dealer</TableCell>
              <TableCell key={3}> Type</TableCell>
              <TableCell key={4}> Amount</TableCell>
              <TableCell key={5}> Rate</TableCell>
              <TableCell key={6}> Asset Type</TableCell>
              <TableCell key={7}> Vin</TableCell>
              <TableCell key={8}> Status</TableCell>
              <TableCell key={9}> Closinging Contract</TableCell>
              <TableCell key={10} >Close</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {assets.map(a => (
              <TableRow key={a.contractId}>
                <TableCell key={0}  className={classes.tableCellContract}>{a.contractId}</TableCell>
                <TableCell key={1} >{displayName(a.payload.originator)}</TableCell>
                <TableCell key={2} >{displayName(a.payload.dealer)}</TableCell>
                <TableCell key={3} >{a.payload.eftype}</TableCell>
                <TableCell key={4} >{a.payload.amount}</TableCell>
                <TableCell key={5} >{a.payload.rate}</TableCell>
                <TableCell key={6} >{a.payload.assetType}</TableCell>
                <TableCell key={7} >{a.payload.vin}</TableCell>
                <TableCell key={8} >{a.payload.status}</TableCell>
                <TableCell key={9} >{a.payload.closingContractId}</TableCell>
                <TableCell key={10} className={classes.tableCellButton}>
                  <Button color="primary" size="small" className={classes.choiceButton} variant="contained" onClick={() => showClose(a)}>Close Contract</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Container>
  );
}
