/*
 * @Author: yelin liu
 * @Date: 2020-07-14 13:29:59
 * @LastEditTime: 2020-07-14 14:01:29
 * @LastEditors: Please set LastEditors
 * @Description: index file of the project
 * @FilePath: \refactory-money-driven\src\index.tsx
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/rootStore";
import App from "./pages/app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
