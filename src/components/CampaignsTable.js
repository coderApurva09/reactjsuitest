import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CampaignsTable = () => {
  return (
    <div>
        <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Campaigns^</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Conversions</TableCell>
            <TableCell>Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Example data, replace this with your actual data */}
          <TableRow>
            <TableCell>Cosmetcis</TableCell>
            <TableCell>348</TableCell>
            <TableCell>$500</TableCell>
            <TableCell>12</TableCell>
            <TableCell>$1000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Serums</TableCell>
            <TableCell>692</TableCell>
            <TableCell>$700</TableCell>
            <TableCell>35</TableCell>
            <TableCell>$1200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Facewash</TableCell>
            <TableCell>105</TableCell>
            <TableCell>$700</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$1200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shampoos</TableCell>
            <TableCell>105</TableCell>
            <TableCell>$700</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$1200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Conditioners</TableCell>
            <TableCell>105</TableCell>
            <TableCell>$700</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$1200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Facewash 2</TableCell>
            <TableCell>105</TableCell>
            <TableCell>$700</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$1200</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default CampaignsTable