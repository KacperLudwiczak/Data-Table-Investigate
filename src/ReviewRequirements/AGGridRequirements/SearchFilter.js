import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const getMedalString = function ({ gold, silver, bronze }) {
  const goldStr = gold > 0 ? `Gold: ${gold} ` : "";
  const silverStr = silver > 0 ? `Silver: ${silver} ` : "";
  const bronzeStr = bronze > 0 ? `Bronze: ${bronze}` : "";
  return goldStr + silverStr + bronzeStr;
};

const MedalRenderer = function (params) {
  return getMedalString(params.value);
};

function getData() {
  return [
    {
      name: "Michael Phelps",
      person: {
        age: 23,
        country: "United States",
      },
      medals: {
        gold: 8,
        silver: 0,
        bronze: 0,
      },
    },
    {
      name: "Michael Phelps",
      person: {
        age: 19,
        country: "United States",
      },
      medals: {
        gold: 6,
        silver: 0,
        bronze: 2,
      },
    },
    {
      name: "Michael Phelps",
      person: {
        age: 27,
        country: "United States",
      },
      medals: {
        gold: 4,
        silver: 2,
        bronze: 0,
      },
    },
  ].map((row) => ({ ...row, hidden: "hidden" }));
}

var includeHiddenColumns = false;

const Search = () => {
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData] = useState(() => getData());
  const [columnDefs] = useState([
    // simple column, easy to understand
    { field: "name" },
    // the grid works with embedded fields
    { headerName: "Age", field: "person.age" },
    // or use value getter, all works with quick filter
    { headerName: "Country", valueGetter: "data.person.country" },
    // or use the object value, so value passed around is an object
    {
      headerName: "Results",
      field: "medals",
      cellRenderer: MedalRenderer,
      // this is needed to avoid toString=[object,object] result with objects
      getQuickFilterText: (params) => {
        return getMedalString(params.value);
      },
      cellDataType: false,
    },
    {
      headerName: "Hidden",
      field: "hidden",
      hide: true,
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      editable: true,
    };
  }, []);

  const onIncludeHiddenColumnsToggled = useCallback(() => {
    includeHiddenColumns = !includeHiddenColumns;
    gridRef.current.api.setIncludeHiddenColumnsInQuickFilter(
      includeHiddenColumns
    );
    document.querySelector("#includeHiddenColumns").innerHTML = `${
      includeHiddenColumns ? "Exclude" : "Include"
    } Hidden Columns`;
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  const onPrintQuickFilterTexts = useCallback(() => {
    gridRef.current.api.forEachNode(function (rowNode, index) {
      console.log(
        "Row " +
          index +
          " quick filter text is " +
          rowNode.quickFilterAggregateText
      );
    });
  }, []);

  return (
    <div style={containerStyle}>
      <div className="example-wrapper">
        <div className="example-header">
          <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onInput={onFilterTextBoxChanged}
          />
          <button
            style={{ marginLeft: "20px" }}
            onClick={onPrintQuickFilterTexts}
          >
            Print Quick Filter Cache Texts
          </button>
          <button
            id="includeHiddenColumns"
            style={{ marginLeft: "20px" }}
            onClick={onIncludeHiddenColumnsToggled}
          >
            Include Hidden Columns
          </button>
        </div>

        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            cacheQuickFilter={true}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default Search;
