import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'whitesmoke'}}>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"black"}}>
            App Logo
          </Typography>
          <Button color="inherit"><Link to="/Dashboard" style={{color:'black',textDecoration:'none'}}>Dashboard</Link></Button>
          <Button color="inherit"><Link to="/create-ad" style={{color:'black',textDecoration:'none'}}>Create Ad</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
