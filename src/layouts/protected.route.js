import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../auth-context/auth.context";
import { useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

export const ProtectedRoute = ({ ...rest }) => {
  const history = useHistory();
  let { user } = useAuth();
  if (!user || !user.token || user.token === "") {
    return (
      <SweetAlert
      style={{backgroundColor:'rgba(66, 153, 225, 0.6)'}}
        confirmBtnText="Sign In"
        confirmBtnStyle={{padding:'5px 15px 5px 15px'}}
        title="You must be signed in!"
        onCancel={() => history.push("/auth/sign-in")}
        onConfirm={() => history.push("/auth/sign-in")}
        confirmBtnCssClass={"px-5"}
      />
    );
  }

  return <Route {...rest} />;
};
