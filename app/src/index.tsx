import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "./config/normalize.scss";

const domRoot = document.getElementById("root");
ReactDOM.render(<App />, domRoot);
