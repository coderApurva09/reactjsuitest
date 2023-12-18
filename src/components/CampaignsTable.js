import React from 'react'
import { useTable, useSortBy } from 'react-table';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { Id: 1, Value1: "Cosmetcis", Value2: 348, Value3: 500, Value4: 12, Value5: 1000 },
  { Id: 2, Value1: "Serums", Value2: 692, Value3: 700, Value4: 35, Value5: 1200 },
  { Id: 3, Value1: "Facewash", Value2: 105, Value3: 300, Value4: 80, Value5: 2000 },
  { Id: 4, Value1: "Shampoos", Value2: 348, Value3: 100, Value4: 50, Value5: 1100 },
  { Id: 5, Value1: "Conditioners", Value2: 348, Value3: 300, Value4: 30, Value5: 9000 },
  { Id: 6, Value1: "Facewash 2", Value2: 348, Value3: 500, Value4: 12, Value5: 1000 }

]


const columns = [
  { Id: 1, Header: "Campaigns^",accessor: 'Value1' },
  { Id: 2, Header: "Clicks^",accessor: 'Value2' },
  { Id: 3, Header: "Cost",accessor: 'Value3' },
  { Id: 4, Header: "Conversions",accessor: 'Value4' },
  { Id: 5, Header: "Revenue",accessor: 'Value5' },

]


const CampaignsTable = () => {
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  // const SortableTable = () => {

  return (
    
      <TableContainer component={Paper}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
  export default CampaignsTable