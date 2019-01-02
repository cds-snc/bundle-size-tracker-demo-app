import React from "react"; // eslint-disable-line
import isToday from "date-fns/is_today";
import styled from "styled-components";
import { Example } from "./List";

const Main = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em 1em;
  padding: 0.25em 1em;
`;

export const Layout = () => {
  return (
    <div>
      <Main>Hello {isToday(new Date()) ? "yes" : "no"}</Main>
      <Example />
    </div>
  );
};
