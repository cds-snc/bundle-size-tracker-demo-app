import React from "react"; // eslint-disable-line
import isToday from "date-fns/is_today";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const Layout = () => {
  return (
    <div>
      Hello React {isToday(new Date()) ? "yes" : "no"}
      <Button>Hello</Button>
    </div>
  );
};
