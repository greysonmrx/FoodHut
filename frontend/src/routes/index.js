import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

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
      <Route path="/dashboard" exact isPrivate component={Dashboard} />
      <Route path="/categories" exact isPrivate component={Categories} />
      <Route path="/products" exact isPrivate component={Products} />
      <Route path="/users" exact isPrivate component={Users} />
    </Switch>
  );
}
