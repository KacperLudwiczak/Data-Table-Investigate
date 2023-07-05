import MUIDataGridRequirements from "./MUIDataGrid/MUIDataGridRequirements";
import AGGridRequirements from "./AGGridRequirements/AGGridRequirements";
import MRTRequirements from "./MRTRequirements/MRTRequirements";

export default function ReviewRequirements() {
  return (
    <>
      <h1>Review Requirements</h1>

      <h2>Search Filter Advantages:</h2>
      <h3>MUI DataGrid:</h3>
      <ul>
        <li>
          Provides flexibility to customize the quick filter logic and
          operators.
        </li>
        <li>Supports custom filtering logic for specific columns.</li>
        <li>
          Allows advanced parsing and formatting options for the quick filter.
        </li>
        <li>Integrates well with MUI components and toolbar customization.</li>
      </ul>
      <h3>MRT:</h3>
      <ul>
        <li>
          Offers built-in support for global filtering with various options and
          customization.
        </li>
        <li>Enables filter match highlighting for visual feedback.</li>
        <li>Provides ranked results for fuzzy matching.</li>
        <li>Supports multiple filter modes for the global filter.</li>
        <li>Allows customization of the search text box.</li>
      </ul>
      <h3>AG Grid:</h3>
      <ul>
        <li>
          Provides options to improve performance with Quick Filter cache.
        </li>
        <li>Supports case-insensitive searching and word matching.</li>
        <li>Allows including hidden column values in the Quick Filter.</li>
        <li>
          Provides flexibility to implement server-side filtering for different
          row models.
        </li>
      </ul>

      <h2>Checkbox:</h2>
      <h3>MUI DataGrid:</h3>
      <ul>
        <li>To activate checkbox selection set "checkboxSelection".</li>
      </ul>
      <h3>MRT:</h3>
      <ul>
        <li>
          To activate checkbox selection set "muiSelectCheckboxProps" and
          "enableRowSelection".
        </li>
      </ul>
      <h3>AG Grid:</h3>
      <ul>
        <li>
          To activate checkbox selection set " checkboxSelection" and
          "headerCheckboxSelection"
        </li>
      </ul>

      <h2>Accordion:</h2>
      <h3>MUI DataGrid:</h3>
      <ul>
        <li>
          The Accordion in DataGrid are in DataGrid Premium, in Material UI is a
          basic accordion.
        </li>
      </ul>
      <h3>MRT:</h3>
      <ul>
        <li>Active by "enableExpanding" and "enableExpandAll".</li>
      </ul>
      <h3>AG Grid:</h3>
      <ul>
        <li>The Row Grouping in AG Grid is in Enterprise version.</li>
      </ul>

      <h2>Hide Column:</h2>
      <h3>MUI DataGrid:</h3>
      <ul>
        <li>Available</li>
      </ul>
      <h3>MRT:</h3>
      <ul>
        <li>Available</li>
      </ul>
      <h3>AG Grid:</h3>
      <ul>
        <li>Available, but with "Hide Medals"</li>
      </ul>

      <h2>Select All:</h2>
      <h3>MUI DataGrid:</h3>
      <ul>
        <li>Available</li>
      </ul>
      <h3>MRT:</h3>
      <ul>
        <li>Available</li>
      </ul>
      <h3>AG Grid:</h3>
      <ul>
        <li>Available</li>
      </ul>

      <MUIDataGridRequirements />
      <MRTRequirements />
      <AGGridRequirements />
    </>
  );
}
