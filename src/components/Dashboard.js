import React from 'react';
import ToggleButtonTableChart from './ToggleButtonTableChart';
import CampaignsTable from './CampaignsTable';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AppBar, Tabs, Tab } from '@mui/material';


import { Grid} from '@mui/material';

const Dashboard = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
      
      <Grid container spacing={2} margin={'0.5em'}>
      <Grid item xs={6}>
      <AppBar position="static" style={{backgroundColor:'#f0f0f0'}}>
      <Tabs  >
        
        <Tab label="Ads Insights" />
        <Tab label="" />
        <Tab label="" />

      </Tabs>
    </AppBar>
    <Item><CampaignsTable />
</Item>
  </Grid>
  <Grid item xs={6}>
  <AppBar position="static" style={{backgroundColor:'#f0f0f0'}}>
      <Tabs style={{backgroundColor:'#f0f0f0', display:'flex', alignItems:'center'}}>
      <Tab label="Ads Insights" />
        <Tab label="" />

      </Tabs>
    </AppBar>
    <Item>
      <ToggleButtonTableChart />
</Item>
  </Grid>
      </Grid>
      
  );
};

export default Dashboard;
