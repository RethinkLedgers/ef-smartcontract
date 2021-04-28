import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import DamlLedger from "@daml/react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import HomeLoanContractList from "../../pages/retail/HomeLoanContract";
import FundingRequestList from "../../pages/fundingrequest/FundingRequest";
import FundingApprovalList from "../../pages/fundingapproval/FundingApproval";
import { useUserState } from "../../context/UserContext";
import { wsBaseUrl, httpBaseUrl } from "../../config";
import useStyles from "./styles";

const Layout = () => {
  const classes = useStyles();
  const user = useUserState();

  if(!user.isAuthenticated){
    return null;
  } else {
    return (
      <DamlLedger party={user.party} token={user.token} httpBaseUrl={httpBaseUrl} wsBaseUrl={wsBaseUrl}>
        <div className={classes.root}>
            <>
              <Header />
              <Sidebar />
              <div className={classes.content}>
                <div className={classes.fakeToolbar} />
                <Switch>
                  <Route path="/app/retail" component={HomeLoanContractList} />
                  <Route path="/app/fundingrequest" component={FundingRequestList} />
                  <Route path="/app/fundingapproved" component={FundingApprovalList} />
                </Switch>
              </div>
            </>
        </div>
      </DamlLedger>
    );
  }
}

export default withRouter(Layout);
