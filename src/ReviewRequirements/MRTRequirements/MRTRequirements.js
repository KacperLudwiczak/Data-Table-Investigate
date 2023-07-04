import Search from "./SearchFilter";

export default function MRTRequirements() {
  return (
    <>
      <h2>MRT Requirements</h2>

      <h3>Search Filter</h3>
      <a
        href="https://www.material-react-table.com/docs/guides/global-filtering#global-filtering-(search)-feature-guide"
        target="_blank"
      >
        Search Page
      </a>
      <ul>
        <li>
          The global filter can be disabled entirely or disabled for specific
          columns by setting the enableGlobalFilter option to false.
        </li>
        <li>
          To disable the global filter feature and hide the search icon, set the
          enableGlobalFilter prop to false.
        </li>
        <li>
          Filter match highlighting is enabled by default and highlights text in
          the table body cells that match the search query with a shade of the
          theme's palette.warning.main color. If using a custom cell render
          override, use the renderedCellValue prop instead of "cell.getValue()"
          to preserve the filter match highlighting.
        </li>
        <li>
          Filter match highlighting can be disabled by setting the
          enableFilterMatchHighlighting prop to false.
        </li>
        <li>
          Client-side filtering (including global filtering) is enabled by
          default, meaning the search box scans through all columns to find
          matches for the search term.
        </li>
        <li>
          The global filter function can use built-in filterFns or custom filter
          functions defined in the filterFns prop. The default global filter
          function is set to fuzzy, but it can be changed by setting the
          globalFilterFn prop.
        </li>
        <li>
          Ranked results are enabled by default when using the default fuzzy
          filter function. This means that search results are sorted by the
          closest match first. Ranked results are automatically disabled if a
          column has a sort direction, sub-rows are expanded, or if any manual
          props are set to true. To disable ranked results while still using
          fuzzy matching, set the enableGlobalFilterRankedResults prop to false.
        </li>
        <li>
          Similar to column filter modes, users can choose between multiple
          filter modes for the global filter by enabling the
          enableGlobalFilterModes prop. The available filter modes can be
          customized using the globalFilterModeOptions prop or by rendering
          custom menu items with the renderGlobalFilterModeMenuItems prop.
        </li>
        <li>
          The search text box can be shown by default instead of being hidden
          behind the search icon by setting the showGlobalFilter state to true
          in the initialState.
        </li>
        <li>
          For server-side filtering, where the data is filtered on the server
          instead of client-side, set the manualFiltering prop to true and
          manage the globalFilter state manually.
        </li>
        <li>
          The position of the global filter (search box) in the top toolbar can
          be customized by setting the positionGlobalFilter prop to left or
          right. It is shown on the right by default.
        </li>
        <li>
          The search text field can be customized by passing props to the
          muiSearchTextFieldProps prop, allowing customization of placeholder
          text, styles, and other text field props.
        </li>
      </ul>
      <Search />
    </>
  );
}
