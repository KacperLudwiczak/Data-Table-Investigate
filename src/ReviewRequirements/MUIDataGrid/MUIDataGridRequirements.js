import QuickFilteringGrid from "./SearchFilter";
import QuickFilteringGridWithCheckbox from "./Checkbox";
import BasicAccordion from "./Accordion";

export default function MUIDataGridRequirements() {
  return (
    <>
      <h2>MUI DataGrid Requirements</h2>

      <h3>Search Filter</h3>
      <a
        href="https://mui.com/x/react-data-grid/filtering/quick-filter/"
        target="_blank"
        rel="noreferrer"
      >
        Search Page
      </a>
      <ul>
        <li>
          To enable the quick filter, you can add the "GridToolbarQuickFilter"
          component to your custom toolbar or pass showQuickFilter to the
          default "GridToolbar".
        </li>
        <li>
          By default, the quick filter treats the input as a list of values
          separated by space and keeps only the rows that contain all of the
          specified values.
        </li>
        <li>
          The initial values for the quick filter can be set by setting the
          filter.filterModel.quickFilterValues property of the initialState
          prop.
        </li>
        <li>
          The logic used for the quick filter can be modified to filter rows
          that contain at least one of the specified values instead of requiring
          all of them. This can be done by setting "quickFilterLogicOperator" to
          "GridLogicOperator".
        </li>
        <li>
          By default, the quick filter only considers columns with types
          'string', 'number', and 'singleSelect'.
        </li>
        <li>
          For 'string' and 'singleSelect' columns, the cell's formatted value
          must contain the specified value for a match.
        </li>
        <li>
          For 'number' columns, the cell's formatted value must be equal to the
          specified value.
        </li>
        <li>
          The quick filter operators can be modified or added by using the
          getApplyQuickFilterFn property in the column definition. This function
          takes the quick filter value as input and returns another function
          that takes the cell value and determines if it satisfies the operator
          condition.
        </li>
        <li>
          Custom filtering logic can be implemented, such as checking if a date
          column contains the correct year.
        </li>
        <li>
          To disable the quick filtering on a specific column, set
          getApplyQuickFilterFn: undefined in the column definition.
        </li>
        <li>
          The values used by the quick filter are obtained by splitting the
          search text with space. Advanced parsing logic can be implemented by
          providing a quickFilterParser function to the "GridToolbarQuickFilter"
          component.
        </li>
        <li>
          The content of the input field should be updated to reflect the new
          values if you control the quickFilterValues through filterModel or the
          initial state. By default, values are joined with spaces, but this
          behavior can be customized by providing a quickFilterFormatter
          function.
        </li>
      </ul>
      <QuickFilteringGrid />

      <h3>Checkbox</h3>
      <a
        href="https://mui.com/x/react-data-grid/row-selection/#checkbox-selection"
        target="_blank"
        rel="noreferrer"
      >
        Checkbox Page
      </a>
      <ul>
        <li>To activate checkbox selection set "checkboxSelection".</li>
      </ul>
      <QuickFilteringGridWithCheckbox />

      <h3>Accordion</h3>
      <a
        href="https://mui.com/material-ui/react-accordion/"
        target="_blank"
        rel="noreferrer"
      >
        Accordion Page
      </a>
      <ul>
        <li>
          The Accordion in DataGrid is in DataGrid Premium, in Material UI is a
          basic accordion.
        </li>
      </ul>
      <BasicAccordion />
    </>
  );
}
