import DataGridDemo from "./DataGridFirst";
import FullFeaturedCrudGrid from "./DataGridWithAdd";

function DataGrid() {
  return (
    <div className="app">
      <h1>MUI Data Grid</h1>
      <a
        href="https://mui.com/x/react-data-grid/"
        target="_blank"
        rel="noreferrer"
      >
        Data Grid Page
      </a>
      <ul>
        <li>
          Data tables display information in a grid-like format of rows and
          columns.
        </li>
        <li>
          The data grid comes in two different versions:
          <ul>
            <li>
              MIT version - The first version is meant to simplify the Table
              demo with a clean abstraction.
            </li>
            <li>
              Commercial version - The commercial version is available in the
              form of two plans - Pro and Premium:
              <ul>
                <li>
                  The Pro version allows to sort and filter multiple columns at
                  the same time. Brings new features: column groups, column
                  pinning, tree data, row, and column reordering. Grid displays
                  31 columns and 100,000 rows - over 3 million cells in total.
                </li>
                <li>
                  The Premium version contains all features from Pro. as well as
                  features for analyzing large datasets. The features available
                  on the initial release are row grouping and the ability to
                  export to Excel files.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          In Free version we have access to:
          <ul>
            <li>Column groups</li>
            <li>Column spanning</li>
            <li>Row height</li>
            <li>Row editing</li>
            <li>Cell editing</li>
            <li>Import & export CSV export</li>
            <li>Import & export print</li>
            <li>Import & export clipboard copy</li>
            <li>Single row selection</li>
            <li>Checkbox selection</li>
            <li>Quick filter</li>
            <li>Column filters</li>
            <li>Column sorting</li>
            <li>Pagination</li>
            <li>Rendering customizable components</li>
            <li>Rendering column virtualization</li>
            <li>Misc accessibility</li>
            <li>Misc keyboard navigation</li>
            <li>Misc localization</li>
          </ul>
        </li>
        <li>
          @mui/x-data-grid@6.9.0:
          <ul>
            <li>Download Time 2.1 s, Slow 3G</li>
            <li>Download Time 120 ms, Emerging 4G</li>
            <li>Bundle size 399.9 kB, Minified</li>
            <li>Bundle size 104.9 kB, Minified + Gzipped</li>
          </ul>
        </li>
      </ul>
      <DataGridDemo />
      <FullFeaturedCrudGrid />
    </div>
  );
}

export default DataGrid;
