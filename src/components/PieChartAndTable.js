import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Container } from '@mui/material';


const data = [
  { value: 40, label: '40 % Male' },
  { value: 35, label: '35% Female' },
  { value: 25, label: '25% Unknow' },
//   { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};


export default function PieChartAndTable() {
  return (
    <Container style={{margin:'0.5em'}}>
    <PieChart series={[{ data, innerRadius: 50 }]} {...size}>
      {/* <PieCenterLabel>Center label</PieCenterLabel> */}
    </PieChart>
    
    </Container>

  );
}

