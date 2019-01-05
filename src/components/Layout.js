import React from "react"; // eslint-disable-line
import { Example } from "./List";
import moment from "moment";

export const Layout = () => {
  return (
    <div>
      <Example />
      <div style={{ marginTop: "20px" }}>{moment().format()}</div>
    </div>
  );
};
