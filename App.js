import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import Inbox from "../components/pages/inbox/Inbox";
import Submitted_Quotes from "./pages/sumbitted_quotes/Submitted_quotes";
import Quotes from "./pages/quotes/Quotes";
import Invoice from "./pages/invoice/Invoice";
import Profile from "./pages/profile/Profile";
import Footer from "./Footer/Footer";
import CustomerLandingPage from "./pages/Customer/CustomerLandingPage";
import Bids from "./pages/Customer/Bids";
import AddVehicle from "./pages/Customer/AddVehicle";
import DealerLogin from "./pages/dealerlogin/DealerLogin";
import React, { Component, useState } from 'react'
import CustomerLogin from "./pages/customerlogin/CustomerLogin";
import Logout from "./pages/logout/Logout";
import LandingPage from "./home/LandingPage";
import ErrorPage from "./error/ErrorPage";

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginRole: 0
    }
  }
  componentDidMount() {

    if (sessionStorage.getItem('role') === "Customer") {
      this.setState({
        loginRole: 1
      })
    } else if (sessionStorage.getItem('role') === "Dealer") {
      this.setState({
        loginRole: 2
      })
    } else if (sessionStorage.getItem('role') === "admin") {
      this.setState({
        loginRole: 3
      })
    }
    console.log('login user id ',this.state.loginRole);
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {this.state.loginRole === 2 ? (
            <Switch>
              <Route path="/dealer" exact component={Inbox} />
              <Route path="/dealer/submittedquote" exact component={Submitted_Quotes} />
              <Route path="/dealer/quote" exact component={Quotes} />
              <Route path="/dealer/invoice" exact component={Invoice} />
              <Route path="/dealer/profile" exact component={Profile} />
              <Route exact path="/logout" component={Logout} />

              <Route component={ErrorPage} />
            </Switch>
          ) : (<div>{this.state.loginRole === 1 ?
            <div>
              <Switch>
                <Route path="/customer" exact component={CustomerLandingPage} />
                <Route path="/customer/quote/bid/:id" exact component={Bids} />
                <Route path="/customer/quote" exact component={AddVehicle} />
                <Route exact path="/logout" component={Logout} />

                <Route component={ErrorPage} />
              </Switch>
            </div> :
            <div>
              {this.state.loginRole === 0 ?
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/dealer/login" exact component={DealerLogin} />
                  <Route path="/customer/login" exact component={CustomerLogin} />
                  <Route exact path="/logout" component={Logout} />
                  <Route component={ErrorPage} />
                </Switch> :
                <div>
                  <Route component={ErrorPage} />
                </div>}
            </div>
          }
          </div>
          )}
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
//https://github.com/briancodex/react-navbar-v1/tree/master/src/components
