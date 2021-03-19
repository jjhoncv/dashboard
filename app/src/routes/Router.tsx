import * as React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute, PrivateAuthRoute } from ".";
import { session } from "../utils";
import { Register } from "../views/auth";
import { Login } from "../views/auth/Login";
import { Dashboard } from "../views/dashboard";
import { ProductAdd, ProductEdit, ProductList } from "../views/products";

const Routes: React.FC<any> = ({ logged: _logged }) => {
  const [logged, setLogged] = React.useState(_logged);
  React.useEffect(() => {
    setLogged(_logged);
  }, [_logged]);

  return (
    <BrowserRouter basename="/">
      <Switch>
        {/* products router */}

        <PrivateRoute
          authed={logged}
          path="/products"
          exact
          component={ProductList}
        />
        <PrivateRoute
          authed={logged}
          path="/products/add"
          exact
          component={ProductAdd}
        />
        <PrivateRoute
          authed={logged}
          path="/products/edit/:id"
          exact
          component={ProductEdit}
        />

        {/* dashboard router */}

        <PrivateRoute authed={logged} path="/" exact component={Dashboard} />

        {/* public router */}

        <PrivateAuthRoute authed={logged} path="/login" component={Login} />

        <PrivateAuthRoute
          authed={logged}
          path="/register"
          component={Register}
        />
        <Route
          render={(props) => (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export const Router = () => {
  const [logged, setLogged] = React.useState(
    session?.getUser()?.id ? !!session?.getUser() : false
  );

  const handleRefreshSession = () => {
    setLogged(true);
  };

  React.useEffect(() => {
    document.addEventListener("refreshSession", handleRefreshSession);
    return () => {
      document.removeEventListener("refreshSession", handleRefreshSession);
    };
  }, []);
  return <Routes logged={logged} />;
};
