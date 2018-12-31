import React from "react"; // eslint-disable-line
import isToday from "date-fns/is_today";
import moment from "moment"

export const Layout = () => {

  return <div>Hello React {isToday(new Date()) ? "yes" : "no"} or {moment().format()}</div>;

};
