import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataGrid from "./DataGrid/DataGrid";
import MaterialReactTable from "./MaterialReactTable/MaterialReactTable";
import AGGrid from "./AGGrid/AGGrid";
import ReviewRequirements from "./ReviewRequirements/ReviewRequirements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode class>
    <BrowserRouter>
      <div style={{ margin: "20px" }}>
        <App />

        <div style={{ margin: "30px" }}>
          <DataGrid />
        </div>

        <div style={{ margin: "30px" }}>
          <MaterialReactTable />
        </div>

        <div style={{ margin: "30px" }}>
          <AGGrid />
        </div>

        <div style={{ margin: "30px" }}>
          <ReviewRequirements />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
