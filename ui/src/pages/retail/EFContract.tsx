// Copyright (c) RethinkLedgers

import React, { useState }  from 'react';
import { Container, Grid,  } from 'semantic-ui-react' ;
import { TableHead,TableBody, TableRow, TableCell, Table } from '@material-ui/core' ;
import Button from "@material-ui/core/Button";
import { EF } from '@daml.js/ef-app/lib';
import { useParty, useLedger,  useStreamQueries } from '@daml/react';
import Ledger from "@daml/ledger";
import { EFContract  } from "@daml.js/ef-app/lib/EF";
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";



export default function MainScreen() {

  const retailcontracts = useStreamQueries(EF.EFContract).contracts;
  const classes = useStyles();
  const party = useParty();
  const ledger: Ledger = useLedger();
  const today = (new Date()).toISOString().slice(0, 10);


  type InputFieldsForNewAsset = Omit<EFContract, "EFContract">;
  const defaultNewAssetProps: InputDialogProps<InputFieldsForNewAsset> = {
      open: false,
      title: "New RetailContract",
      defaultValue: {
        originator : party,
        business : party,
        eftype: "Lease",
        startdate : "",
        duration : "",
        amount : "0",
        rate : "0.0",
        assetType : "Van",
        vin : "",
        businessCreditScore: "",
        dealercommission: "",
      },
      fields: {
          originator: {
              label: "Originator",
              type: "text",
          },
          business: {
              label: "Business",
              type: "text"
          },
          eftype: {
            label: "EF Type",
            type: "selection",
            items: ["Loan", "Lease"]
          },
          startdate: {
              label: "Date of Appraisal",
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
          businessCreditScore: {
            label: "Business Score",
            type: "number"
          },
          dealercommission: {
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
          const efData = { ...state };
          await ledger.create(EF.EFContract, efData);
      };
      setNewAssetProps({ ...defaultNewAssetProps, open: true, onClose });
  };

  return (
    <Container>
      <Grid >
      <InputDialog {...newAssetProps} />
            <Button color="primary" size="small" className={classes.choiceButton} variant="contained" onClick={() => showNewAsset()}>
                Create New Asset
            </Button>

        <Table size ="small">
          <TableHead>
            <div> 
              <p>RetailContracts</p>
            </div>
            <TableRow>
               <TableCell key ={0}> Contract</TableCell>
               <TableCell key ={1}> Originator</TableCell>
               <TableCell key ={2}> Businesss</TableCell>
               <TableCell key ={3}> EF Type</TableCell>
               <TableCell key ={4}> Duration</TableCell>
               <TableCell key ={5}> Amount</TableCell>
               <TableCell key ={6}> Rate</TableCell>
               <TableCell key ={7}> Asset Type</TableCell>
               <TableCell key ={8}> Vin</TableCell>
               <TableCell key ={9}> Business Score</TableCell>
               <TableCell key ={10}> Commission</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
           {retailcontracts.map(r => (
            <TableRow key ={r.contractId}>
               <TableCell key={0} >{r.contractId}</TableCell>
               <TableCell key={1} >{r.payload.originator}</TableCell>
               <TableCell key={2} >{r.payload.business}</TableCell>
               <TableCell key={3} >{r.payload.eftype}</TableCell>
               <TableCell key={4} >{r.payload.duration}</TableCell>
               <TableCell key={5} >{r.payload.amount}</TableCell>
               <TableCell key={6} >{r.payload.rate}</TableCell>
               <TableCell key={7} >{r.payload.assetType}</TableCell>
               <TableCell key={8} >{r.payload.vin}</TableCell>
               <TableCell key={9} >{r.payload.businessCreditScore}</TableCell>
               <TableCell key={10} >{r.payload.dealercommission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </Grid>
    </Container>
  );
}
