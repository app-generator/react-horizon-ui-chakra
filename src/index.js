import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./layouts/ProtectedRoute";
import { AuthProvider } from "./auth-context/auth.context";

let user = localStorage.getItem("user");
user = JSON.parse(user);
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <AuthProvider userData={user}>
      <BrowserRouter>
        <React.StrictMode>
          <HashRouter>
            <Switch>
              <Route path={`/auth`} component={AuthLayout} />
              <ProtectedRoute path={`/admin`} component={AdminLayout} />
              <ProtectedRoute path={`/rtl`} component={RTLLayout} />
              <Redirect from='/' to='/admin/dashboard' />
            </Switch>
          </HashRouter>
        </React.StrictMode>
      </BrowserRouter>
    </AuthProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
