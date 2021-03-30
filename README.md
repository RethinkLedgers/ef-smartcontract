# Introduction to Smart Contracts for Equipment Finance

## Overview

Through this demo you can see how the interactions between a Delivery Business (needing a delivery van), a Dealer, an Originator and a Lessor can be implemented via Daml smart contracts.

**Disclaimer:** This reference application is intended to demonstrate the capabilities of the DAML platform. You are recommended to consider other non-functional aspects, like security, resiliency, recoverability, etc prior to production use.

## Prerequisites

Be sure you have the following installed:
- [DAML SDK and Java](https://docs.daml.com/getting-started/installation.html)
- [Git](https://git-scm.com/downloads)
- [Yarn](https://classic.yarnpkg.com/en/)
- A terminal application for command line interaction

## Clone this repo

Run the following command in your terminal:

```shell
git clone https://github.com/RethinkLedgers/ef-smartcontract.git
```

## Run the app locally with the Navigator UI

One way to run the app loacally is using the automatically generated Navigator UI. This way is convenient, though you have no options for customizing the UI.

In the `daml.yaml` file set `start-navigator: true`.

Make sure your `daml.yaml` file contains the following lines for the interacting parties (if you want to use different user names, put that names into the file):

```
parties:
- Business
- Dealer
- Originator
- Lessor
```

From the project root run the following command in your terminal:

```shell
daml start
```

Navigator will be started at `http://localhost:7500`. You can log in to Navigator UI by choosing a party from the dropdown menu, and start creating contracts and exercising choices on existing contracts.

## Run the app locally with the custom UI

Another way of running the app locally is using the custom UI you can find in the package. If you wish, you can tweak this UI yourself. 

In this case you have to take some steps yourself, which are handled automatically whith Navigator.

In the `daml.yaml` file set `start-navigator: false`.

### Start Sandbox

From the project root, run the following command in your terminal. It will build the DAR file, which is an archived version of your Daml contract template package, will generate JavaScript files which are neede by the UI, and start Sanbox which is an in-memory implementation of a Daml ledger:

```shell
daml start
```

The DAR file will be placed into the the following folder, with the following file name:

```
.daml/dist/ef-app-0.1.0.dar
```

In this case you don't have to do anything with the DAR file.

### Build and start the UI

In the `ui/src/UseKnownParties.tsx` file you should have COMMENTED OUT the following line:

```
const knownParties : PartyInfo[] = require('./parties.json')
```

and UNCOMMENTED the following section:

```
const partyId = useParty();
    const ledger: Ledger = useLedger();

    useEffect(() => {
    const getKnownParties = async () => {
        let lst = await ledger.listKnownParties();
        setKnownParties(lst);
    } ;
    getKnownParties()
```

The section which now you have UNCOMMENTED is the part which normally queries the list of known parties from the ledger. Unfortunatley this is not possible yet on Daml Hub, so until the `ledger.listKnownParties` function becomes available also on Daml Hub, we use a workaround, which you will see in the next section. 

From the <project root>/ui folder run the following command in your terminal:

```shell
yarn install
```

After the installation has been finished, run the following command in your terminal:

```shell
yarn start
```

After Yarn has started the server, you can use your UI on `localhost:3000`.

###

Log in with a party name hou wish to use. You don't need any password.

## Run the app on Daml Hub

You can run this app on [Daml Hub](https://hub.daml.com/), Digital Asset's cloud platform, as an SaaS application.

You need to make the following steps:

From the project root, run the following command in your terminal for building the DAR file, which is an archived version of your DAML contract template package:

```shell
daml build
```

The DAR file will be placed into the the following folder, with the following file name:

```
.daml/dist/ef-app-0.1.0.dar
```

From the project root run the following command in your terminal for generating javascript files needed by the UI form your Daml model:

```
daml codegen js
```

Log in to project:Dabl, create a new project, and a new ledger. Upload and deploy the DAR file to Daml Hub. 

On the Users tab, create 4 parties for Originator, Business, Dealer and Lessor. 

Copy the party identifiers returned by Daml Hub into the `ui/scr/parties.json` file, into the respective JSOM object as `identifier`. Don't forget to save the file. 

In the `ui/src/UseKnownParties.tsx` file you should have UNCOMMENTED the following line:

```
const knownParties : PartyInfo[] = require('./parties.json')
```

and COMMENTED OUT the following section:

```
const partyId = useParty();
    const ledger: Ledger = useLedger();

    useEffect(() => {
    const getKnownParties = async () => {
        let lst = await ledger.listKnownParties();
        setKnownParties(lst);
    } ;
    getKnownParties()
```

The section which now you have COMMENTED OUT is the part which normally queries the list of known parties from the ledger. Unfortunatley this is not possible yet on Daml Hub, so until the `ledger.listKnownParties` function becomes available also on Daml Hub, we use this workaround. 

From the <project root>/ui folder run the following command in your terminal:

```shell
yarn install
```

After the installation has finished:

```shell
yarn build
```

Yarn will create a `build` folder under the `ui` folder. Zip the `build` folder.

You can navigate to the deoployed application by clicking on the `View Site` button on the Deployments tab. 

You can log in to the application by the user names (not the displaynames specified in the `parties.json` file!) and the JWT tokens returned by Daml Hub. 

Once logged in, you will see the display names displayed by the UI, and you have to enter the display names of the parties into the UI when referencing the ledger parties. 

