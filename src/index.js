// This is for the fake API. Do not delete!
import React , {useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
import { StyledComponent } from 'styled-components';

import { worker } from "./mocks/browser";
worker.start();


ReactDOM.render(<App />, document.getElementById("root"));
