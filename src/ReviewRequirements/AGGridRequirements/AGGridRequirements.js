import Search from "./SearchFilter";
import AGGrid from "./AGGridTable";
import AGGridCheckbox from "./Checkbox";

export default function AGGridRequirements() {
  return (
    <>
      <h2>AG Grid Requirements</h2>

      <h3>Search Filter</h3>
      <a
        href="https://www.ag-grid.com/react-data-grid/filter-quick/"
        target="_blank"
        rel="noreferrer"
      >
        Search Page
      </a>

      <ul>
        <li>
          The Quick Filter text is split into words, and each word is compared
          against the row's data. A word matches the row if the string value of
          any column contains the word (case insensitive). All words must match
          the row for it to be included in the filtered results.
        </li>
        <li>
          The Quick Filter text can be set by calling the setQuickFilter method
          on the grid API or by binding it to the quickFilterText attribute.
        </li>
        <li>
          To check whether the Quick Filter is applied and get the current text,
          you can use the getQuickFilter and isQuickFilterPresent functions
          provided by the grid API.
        </li>
        <li>
          If your data contains complex objects, you may need to implement the
          getQuickFilterText function to extract a searchable string from the
          object or format string values for searching purposes. Returning an
          empty string from getQuickFilterText for a column will exclude it from
          the Quick Filter.
        </li>
        <li>
          By default, the Quick Filter checks each column's value every time it
          is executed. For large datasets, you can improve performance by
          enabling the Quick Filter cache using the cacheQuickFilter option.
          When enabled, a Quick Filter text is generated for each node by
          concatenating all the values for each column, and a simple string
          search is performed.
        </li>
        <li>
          The Quick Filter cache text can be manually reset using the
          resetQuickFilterAggregateText method on each row node or by calling
          api.resetQuickFilter().
        </li>
        <li>
          By default, the Quick Filter only checks visible column values. To
          include hidden column values in the Quick Filter, you can set the
          includeHiddenColumnsInQuickFilter option to true or use the
          setIncludeHiddenColumnsInQuickFilter method on the grid API.
        </li>
        <li>
          The Quick Filter feature is typically used with client-side data
          (Client-Side Row Model), and for other row models, server-side
          filtering needs to be implemented to replicate Quick Filter
          functionality.
        </li>
      </ul>
      <Search />
      <h3>I couldn't put the data, for now.</h3>
      <AGGrid />

      <h3>Checkbox</h3>
      <a
        href="https://www.ag-grid.com/react-data-grid/row-selection/#checkbox-selection"
        target="_blank"
        rel="noreferrer"
      >
        Checkbox Page
      </a>
      <ul>
        <li>
          To activate checkbox selection set " checkboxSelection" and
          "headerCheckboxSelection"
        </li>
      </ul>
      <AGGridCheckbox />

      <h3>Accordion</h3>
      <a
        href="https://www.ag-grid.com/react-data-grid/grouping/"
        target="_blank"
        rel="noreferrer"
      >
        Row Grouping Page
      </a>
      <ul>
        <li>The Row Grouping in AG Grid is in Enterprise version.</li>
      </ul>
    </>
  );
}
