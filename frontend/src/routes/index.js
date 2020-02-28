import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import Users from "../pages/Users";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/products" exact component={Products} />
      <Route path="/users" exact component={Users} />
    </Switch>
  );
}
