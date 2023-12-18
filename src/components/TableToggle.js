import React from 'react'
import { Container,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const TableToggle = () => {
  return (
    <Container >
<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Groups</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Conversions</TableCell>
            <TableCell>Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Example data, replace this with your actual data */}
          <TableRow>
            <TableCell>Male</TableCell>
            <TableCell>348</TableCell>
            <TableCell>$500</TableCell>
            <TableCell>12</TableCell>
            <TableCell>$1000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Female</TableCell>
            <TableCell>692</TableCell>
            <TableCell>$700</TableCell>
            <TableCell>35</TableCell>
            <TableCell>$1200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Unknow</TableCell>
            <TableCell>105</TableCell>
            <TableCell>$700</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$1200</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default TableToggle