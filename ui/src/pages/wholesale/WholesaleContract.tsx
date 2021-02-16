// Copyright (c) RethinkLedgers

import React, { useState }  from 'react';
import { Container, Grid,  } from 'semantic-ui-react' ;
import { TableHead,TableBody, TableRow, TableCell, Table } from '@material-ui/core' ;
import Button from "@material-ui/core/Button";
import { EF } from '@daml.js/ef-app/lib';
import { useParty, useLedger,  useStreamQueries } from '@daml/react';
import Ledger from "@daml/ledger";
import { WholesaleContract  } from "@daml.js/ef-app/lib/EF";
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";



export default function WholesaleContractList() {

  const assets = useStreamQueries(EF.WholesaleContract).contracts;
  const classes = useStyles();
  const party = useParty();
  const ledger: Ledger = useLedger();
  const today = (new Date()).toISOString().slice(0, 10);


  type InputFieldsForNewAsset = Omit<WholesaleContract, "Wholesale Contract">;
  const defaultNewAssetProps: InputDialogProps<InputFieldsForNewAsset> = {
      open: false,
      title: "New WholeSale Contract",
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
          const wholesaleData = { ...state };
          await ledger.create(EF.WholesaleContract, wholesaleData);
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
              <p>WholeSaleContracts</p>
            </div>
            <TableRow>
               <TableCell key ={0}> Contract</TableCell>
               <TableCell key ={1}> Originator</TableCell>
               <TableCell key ={2}> Dealer</TableCell>
               <TableCell key ={3}> Amount</TableCell>
               <TableCell key ={4}> Rate</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
           {assets.map(a => (
            <TableRow key ={a.contractId}>
               <TableCell key={0} >{a.contractId}</TableCell>
               <TableCell key={1} >{a.payload.originator}</TableCell>
               <TableCell key={2} >{a.payload.dealer}</TableCell>
               <TableCell key={3} >{a.payload.loanAmount}</TableCell>
               <TableCell key={4} >{a.payload.interest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </Grid>
    </Container>
  );
}
