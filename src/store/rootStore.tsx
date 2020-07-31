/*
 * @Author: yelin liu
 * @Date: 2020-07-14 14:02:08
 * @LastEditTime: 2020-07-14 14:09:53
 * @LastEditors: Please set LastEditors
 * @Description: create store and apply middleware
 * @FilePath: \refactory-money-driven\src\store\rootStore.tsx
 */

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
