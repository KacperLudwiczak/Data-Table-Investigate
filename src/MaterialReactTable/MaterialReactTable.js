import MaterialReactTableAdvance from "./MaterialReactTableAdvance";
import MaterialTableExample from "./MaterialReactTableFirst";
import MRTAggregation from "./MRTAggregation";

export default function MaterialReactTable() {
  return (
    <>
      <h1>Material React Table</h1>
      <a href="https://www.material-react-table.com/" target="_blank">
        Material React Table Page
      </a>
      <ul>
        <li>
          Material React Table (MRT) is a fully-featured data grid/table
          component library for React built on TanStack Table V8's powerful API.
        </li>
        <li>
          It is a good library, If we are already using Material UI for other
          components in your project, and we are looking for a efficient and
          fully featured data grid component to drop in. MRT is not the lightest
          weight table library out there, but it has a much smaller bundle size
          than similar libraries like material-table. If we are looking for the
          most powerful data grid possible, AG Grid is still recommended above
          MRT as long as we do not care about bundle size.
        </li>
        <li>
          The library uses the MIT License and is free to use for either
          personal or enterprise projects.
        </li>
        <li>
          We have access to:
          <ul>
            <li>Advanced TypeScript Generics Support (TypeScript Optional)</li>
            <li>Aggregation and Grouping (Sum, Average, Count, etc.)</li>
            <li>Click To Copy Cell Values</li>
            <li>Column Action Dropdown Menu</li>
            <li>Column Hiding</li>
            <li>Column Ordering via Drag'n'Drop</li>
            <li>Column Pinning (Freeze Columns)</li>
            <li>Column Resizing</li>
            <li>Customize Icons</li>
            <li>Customize Styling of internal Mui Components</li>
            <li>Data Editing (4 different editing modes)</li>
            <li>Density Toggle</li>
            <li>Detail Panels (Expansion)</li>
            <li>Filtering (supports client-side and server-side)</li>
            <li>Filter Match Highlighting</li>
            <li>Full Screen Mode</li>
            <li>
              Global Filtering (Search across all columns, rank by best match)
            </li>
            <li>Header Groups & Footers</li>
            <li>Localization (i18n) support</li>
            <li>Manage state or let the table manage it internally for us</li>
            <li>Pagination (supports client-side and server-side)</li>
            <li>Row Actions (Your Custom Action Buttons)</li>
            <li>Row Numbers</li>
            <li>Row Ordering via Drag'n'Drop</li>
            <li>Row Selection (Checkboxes)</li>
            <li>SSR compatible</li>
            <li>Sorting (supports client-side and server-side)</li>
            <li>Theming (Respects your Material UI Theme)</li>
            <li>Toolbars (Add your own action buttons)</li>
            <li>Tree Data / Expanding Sub-rows</li>
            <li>Virtualization (react-virtual)</li>
          </ul>
        </li>
        <li>
          material-react-table@1.14.0:
          <ul>
            <li>Download Time 0.92 s, Slow 3G</li>
            <li>Download Time 53 ms, Emerging 4G</li>
            <li>Bundle size 176.9 kB, Minified</li>
            <li>Bundle size 46.1 kB, Minified + Gzipped</li>
          </ul>
        </li>
      </ul>
      <MaterialTableExample />
      <MaterialReactTableAdvance />
      <MRTAggregation />
    </>
  );
}
