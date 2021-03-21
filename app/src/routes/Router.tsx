import * as React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { Register } from "../views/register";
import { Login } from "../views/login";
import { Dashboard } from "../views/dashboard";
import { ProductAdd, ProductEdit, ProductList } from "../views/products";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Routes: React.FC<any> = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* products router */}

        <PrivateRoute path="/products" exact component={ProductList} />
        <PrivateRoute path="/products/add" exact component={ProductAdd} />
        <PrivateRoute path="/products/edit/:id" exact component={ProductEdit} />

        {/* dashboard router */}

        <PrivateRoute path="/" exact component={Dashboard} />

        {/* public router */}

        <PublicRoute path="/login" component={Login} />

        <PublicRoute path="/register" component={Register} />
        <Route
          render={(props) => (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
};
