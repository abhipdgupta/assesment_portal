// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TestContextProvider from "./context/testContext.jsx";
import AuthContextProvider from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <TestContextProvider>
        <App />
      </TestContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
  //   </React.StrictMode>
);
