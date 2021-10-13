import { Header } from "@zoo/components";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Header>
      <p>This is the core</p>
    </Header>
  </React.StrictMode>,
  document.getElementById("root")
);

export { Header };
