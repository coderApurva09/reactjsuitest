import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';


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

// const StyledText = styled('text')(({ theme }) => ({
//   fill: theme.palette.text.primary,
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
//   fontSize: 20,
// }));

// function PieCenterLabel() {
//   const { width, height, left, top } = useDrawingArea();
//   return (
//     <StyledText x={left + width / 2} y={top + height / 2}>
//       {/* {children} */}
//     </StyledText>
//   );
// }

export default function PieChartAndTable() {
  return (
    <Container style={{margin:'3em'}}>
    <PieChart series={[{ data, innerRadius: 50 }]} {...size}>
      {/* <PieCenterLabel>Center label</PieCenterLabel> */}
    </PieChart>
    
    </Container>

  );
}

