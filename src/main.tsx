import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

import "./index.css";
import {store} from "./app/store";
import {router} from "./router/router";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
