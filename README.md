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
