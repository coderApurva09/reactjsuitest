import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TableChartIcon from '@mui/icons-material/TableChart';
import PieChartAndTable from './PieChartAndTable';
import TableToggle from './TableToggle';
import { Container } from '@mui/material';

const ToggleButtonTableChart = () => {
  const [selectedValue, setSelectedValue] = useState('Piechart'); // 'Piechart' or 'Table'

  const handleToggle = (event, newValue) => {
    if (newValue !== null) {
      setSelectedValue(newValue);
    }
  };

  return (
    
    <Container maxWidth="sm" style={{width:"100%", height:"27em", }}>
      {selectedValue === 'Piechart' && <PieChartAndTable />}
      {selectedValue === 'Table' && <TableToggle />}
      <div style={{ display:'flex', justifyContent:"flex-end",margin:'0.5em', }}>
      <ToggleButtonGroup
        value={selectedValue}
        exclusive
        onChange={handleToggle}
        aria-label="toggle-button-group"
      >
        <ToggleButton value="Piechart" aria-label="PieChart">
          <DonutLargeIcon />
        </ToggleButton>
        <ToggleButton value="Table" aria-label="Table">
          <TableChartIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      </div>
      </Container>
  
  );
};

export default ToggleButtonTableChart;
