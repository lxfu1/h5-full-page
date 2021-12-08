// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import reportWebVitals from "./reportWebVitals";

const render = (Component: React.FC) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render(Routers);

if (module.hot) {
  module.hot.accept("./routers", () => {
    render(Routers);
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
