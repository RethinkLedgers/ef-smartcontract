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

Note this applications uses DAML SDK 1.9.0 but can easily be upgraded to the latest version.
To upgrade, update ui/package.json file with the following entries

```shell
"@daml/ledger": "x.x.x",
"@daml/react": "x.x.x",
"@daml/types": "x.x.x",
```

## Clone this repo

Run the following command in your terminal:

```shell
git clone https://github.com/RethinkLedgers/ef-smartcontract.git
```

## Run the app locally with the Navigator UI

One way to run the app loacally is using the automatically generated Navigator UI. This way is convenient, though you have no options for customizing the UI.

In the `daml.yaml` file set `start-navigator: true`.

From the project root run the following command in your terminal:

```shell
daml start
```

Navigator will be started at `http://localhost:7500`. You can log in to Navigator UI by choosing a party from the dropdown menu, and start creating contracts and exercising choices on existing contracts.

The Daml file contains an initialization script which allocates parties with different display names and party identifiers, e.g.:

displayName = Originator
party identifier = ledger-party-originator

In the Navigator UI you have to refer to the parties by the party identifiers.

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

In the Daml ledger model, party objects contain a party identifier and an optional display name, which can be (but not must be) different from the party identifier. In some ledgers the party identifiers are enforced to be long strings, which makes them inconvenient to use on the UI. The section which now you have UNCOMMENTED is the part of the UI code which queries from the ledger the list of party objects for the known parties. Another part of the UI code converts party identifiers to display names for display, and converts display names to party identifiers for entering party names on the UI. 

In the initializatin script, as mentioned above, we have allocated parties with different display names and party identifiers, e.g.:

displayName = Originator
party identifier = ledger-party-originator

This means, when starting up the application, you alaready have four parties allocated. 

You have to use party identifiers to log in, and see the display name of the logged in party on th UI, and have to use party display names to refer to other parties on the UI.

Unfortunatley the distinction between party identifiers and display names is not possible yet on Daml Hub, so until this feature becomes available also on Daml Hub, we use a workaround, which you will see in the next section. 

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

You can run this app on [Daml Hub](https://hub.daml.com/), Digital Asset's cloud platform, as a SaaS application.

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

On the Users tab, create 4 parties for Originator, Business, Dealer and Lessor. (Note that unlike described above, the initializatin scipt doesn't run automatically on Daml Hub. So after uploading the Dar file and starting the ledger, you won't have the parties allocated specified in the init script.)

Copy the party identifiers returned by Daml Hub into the `ui/scr/parties.json` file, into the respective JSON object, which already contains the respective party display names. Don't forget to save the file. 

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

As mentioned before, in the Daml ledger model, party objects contain a party identifier and an optional display name, which can be (but not must be) different from the party identifier. In some ledgers the party identifiers are enforced to be long strings, which makes them inconvenient to use on the UI. 

Unfortunatley the distinction between party identifiers and display names is not possible yet on Daml Hub, so until this feature becomes available also on Daml Hub, we use the workaround, described above. 

The section which now you have UNCOMMENTED imports the `parties.json` file into the UI. The contents of the JSON file corresponds to the query of the list of known parties, resulting in a list of party objects, simulating that feature of ledgers other than Daml Hub, wich makes is possible to use the more convenient display names on the UI, rathen than the party identifiers. The remaining part of the UI, including the functions which convert between party identifiers and display names, works in the same way as described above.

You have to use party identifiers to log in, and see the display name of the logged in party on th UI, and have to use party display names to refer to other parties on the UI.



From the <project root>/ui folder run the following command in your terminal:

```shell
yarn install
```

After the installation has finished:

```shell
yarn build
```

Yarn will create a `build` folder under the `ui` folder. 
Zip the `build` folder.

```shell
zip -r ../ef-app-ui.zip build
```

Login to hub.daml.com

Instructions to deploy an app on hub.daml can be found here -> https://projectdabl.com/docs/quickstart/#deployments

You can navigate to the deployed application by clicking on the `View Site` button on the Deployments tab. 


You can log in to the application by the user names (not the displaynames specified in the `parties.json` file!) and the JWT tokens returned by Daml Hub. 

Once logged in, you will see the display names displayed by the UI, and you have to enter the display names of the parties into the UI when referencing the ledger parties. 

=======

