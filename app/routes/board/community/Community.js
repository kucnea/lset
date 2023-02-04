import React from "react";
import { Outlet } from "react-router-dom";
import * as vars from "app/models/js/variable.js";

export function Community({ match }) {
  return (
    <>
      <Outlet/>
    </>
  );
}

export default Community;
