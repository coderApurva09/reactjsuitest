import React from 'react';
import { Link } from 'react-router-dom';
import SortingOptions from './SortingOptions';
import AdsInsights from './AdsInsights';
import Navbar from './Navbar';
import PieChartAndTable from './PieChartAndTable';
import ToggleButtonTableChart from './ToggleButtonTableChart';
import CampaignsTable from './CampaignsTable';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { AppBar, Tabs, Tab } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


import { Container,Grid} from '@mui/material';

const Dashboard = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <div style={{margin:"0.5em"}}>
     

      <Container style={{margin:"2em", display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
      
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <AppBar position="static" style={{backgroundColor:'#f0f0f0'}}>
      <Tabs  >
        
        <Tab label="Ads Insights" />
        <Tab label="" />
        <Tab label="" />

        {/* <Tab label= "<HelpOutlineIcon/>" /> */}
        {/* <Tab/><label><HelpOutlineIcon style={{color:'grey'}}/></label> */}
        {/* Add more tabs as needed */}
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

        {/* <Tab label= "<HelpOutlineIcon/>" /> */}
        {/* <Tab/><label style={{color:'grey'}}>Clicks ^</label>
        <Tab/><label><HelpOutlineIcon style={{color:'grey'}}/></label> */}

        {/* Add more tabs as needed */}
      </Tabs>
    </AppBar>
    <Item>
      <ToggleButtonTableChart />
</Item>
  </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
