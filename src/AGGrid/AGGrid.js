import AGGridTable from "./AGGridTable";

function AGGrid() {
  return (
    <div className="app">
      <h1>AG Grid</h1>
      <a href="https://www.ag-grid.com/" target="_blank">
        AG Grid Page
      </a>
      <ul>
        <li>
          AG Grid Community and AG Charts Community are free and open source
          products distributed under the MIT License. These versions are free to
          use in production environments.
        </li>
        <li>
          AG Grid Enterprise offers functionality like Row Grouping, Range
          Selection, Master / Detail, Server Side Row Model and more. AG Grid
          Enterprise also comes with Integrated Charts, allowing users to create
          charts using the grid's UI.
        </li>

        <li>
          In Free version we have access to:
          <ul>
            <li>Global Styling</li>
            <li>Styling Rows</li>
            <li>Styling Cells</li>
            <li>Grid Size</li>
            <li>Printing</li>
            <li>Infinite Row Model</li>
            <li>Row Model</li>
            <li>Accessing Data</li>
            <li>Updating Data</li>
            <li>Data Stages</li>
            <li>Row Selection</li>
            <li>External Filter</li>
            <li>Quick Filter</li>
            <li>Cell Content</li>
            <li>Rendering API</li>
            <li>View Refresh</li>
            <li>Flashing Cells</li>
            <li>Change Detection</li>
            <li>Start / Stop Editing</li>
            <li>Parsing Values</li>
            <li>Saving Values</li>
            <li>Cell Editors</li>
            <li>Undo / Redo Edits</li>
            <li>Full Row</li>
            <li>CSV Export</li>
            <li>Drag & Drop</li>
          </ul>
        </li>
        <li>
          ag-grid-community@30.0.2:
          <ul>
            <li>Download Time 4.24 s, Slow 3G</li>
            <li>Download Time 242 ms, Emerging 4G</li>
            <li>Bundle size 897.4 kB, Minified</li>
            <li>Bundle size 212.1 kB, Minified + Gzipped</li>
          </ul>
        </li>
      </ul>
      <AGGridTable/>
    </div>
  );
}

export default AGGrid;
