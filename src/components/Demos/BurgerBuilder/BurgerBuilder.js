import React, { Component } from "react";
import DemosHeader from "./DemosHeader/DemosHeader";
import { Route, Switch } from "react-router";
import Builder from "./Builder/Builder";
import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import ThankYou from "./ThankYou/ThankYou";
import Sign from "./Sign/Sign";

class BurgerBuilder extends Component {
  render() {
    return (
      <>
        <DemosHeader />
        <BurgerMenu />
        <Switch>
          <Route exact path="/demos/burger-builder" component={Builder} />
          <Route path="/demos/burger-builder/checkout" component={Checkout} />
          <Route path="/demos/burger-builder/orders" component={Orders} />
          <Route path="/demos/burger-builder/sign" component={Sign} />
          <Route path="/demos/burger-builder/thankyou" component={ThankYou} />
        </Switch>
      </>
    );
  }
}

export default BurgerBuilder;
