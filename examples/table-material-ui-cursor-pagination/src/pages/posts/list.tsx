import { List, useDataGrid } from "@refinedev/mui";
import React from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { ICommit } from "../../interfaces";

export const PostList: React.FC = () => {
  const { dataGridProps, tableQueryResult } = useDataGrid<ICommit>({
    initialPageSize: 5,
  });

  const { data } = tableQueryResult;

  const columns: GridColDef<ICommit>[] = [
    {
      field: "sha",
      headerName: "SHA",
      type: "string",
      width: 100,
      filterable: false,
      sortable: false,
    },
    {
      field: "message",
      headerName: "Message",
      minWidth: 400,
      flex: 1,
      filterable: false,
      sortable: false,
      renderCell: ({ row }) => {
        return row.commit.message;
      },
    },
    {
      field: "author",
      headerName: "Author",
      minWidth: 140,
      flex: 1,
      filterable: false,
      sortable: false,
      renderCell: ({ row }) => {
        return row.commit.author.name;
      },
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 140,
      flex: 1,
      filterable: false,
      sortable: false,
      renderCell: ({ row }) => {
        return row.commit.author.date;
      },
    },
  ];

  return (
    <List>
      <DataGrid
        getRowId={(row) => row.sha}
        {...dataGridProps}
        columns={columns}
        autoHeight
      />
    </List>
  );
};
