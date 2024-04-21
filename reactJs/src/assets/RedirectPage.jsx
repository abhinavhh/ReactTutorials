import React from "react";
import { Redirect } from "react-router-dom";

function RedirectPage() {
  return <Redirect to={{ pathname: "/" }} />;
}

export default RedirectPage;
