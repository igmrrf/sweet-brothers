import React, { useEffect } from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import CheckoutPage from "./pages/checkout/checkout.component";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact={true} path={"/"} component={Homepage} />
        <Route path={"/shop"} component={ShopPage} />
        <Route
          exact={true}
          path={"/signin"}
          render={() =>
            currentUser ? <Redirect to={"/"} /> : <SignInAndSignUpPage />
          }
        />
        <Route exact={true} path={"/checkout"} component={CheckoutPage} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
