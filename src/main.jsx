import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import Provider from "./Provider/Provider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <HelmetProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
