import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Accordion = () => {
  const data = [
    {
      firstName: "Dylan",
      lastName: "Murray",
      address: "261 Erdman Ford",
      city: "East Daphne",
      state: "Kentucky",
      subRows: [
        {
          firstName: "Ervin",
          lastName: "Reinger",
          address: "566 Brakus Inlet",
          city: "South Linda",
          state: "West Virginia",
          subRows: [
            {
              firstName: "Jordane",
              lastName: "Homenick",
              address: "1234 Brakus Inlet",
              city: "South Linda",
              state: "West Virginia",
            },
          ],
        },
        {
          firstName: "Brittany",
          lastName: "McCullough",
          address: "722 Emie Stream",
          city: "Lincoln",
          state: "Nebraska",
        },
      ],
    },
    {
      firstName: "Raquel",
      lastName: "Kohler",
      address: "769 Dominic Grove",
      city: "Columbus",
      state: "Ohio",
      subRows: [
        {
          firstName: "Branson",
          lastName: "Frami",
          address: "32188 Larkin Turnpike",
          city: "Charleston",
          state: "South Carolina",
        },
      ],
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );
  //column definitions...

  return (
    <MaterialReactTable
      muiSelectCheckboxProps
      enableRowSelection
      columns={columns}
      data={data}
      enableExpanding
      enableExpandAll
      enableGlobalFilterModes
      // initialState={{
      //   showGlobalFilter: true,
      // }}
      // positionGlobalFilter="left"
      // muiSearchTextFieldProps={{
      //   placeholder: `Search ${data.length} rows`,
      //   sx: { minWidth: "300px" },
      //   variant: "outlined",
      // }}
    />
  );
};

export default Accordion;
