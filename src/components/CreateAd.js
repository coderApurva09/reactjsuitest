import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, Box,Grid, Button, } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router';




const CreateAd = () => {
  const [checked, setChecked] = React.useState({

  });
  const navigate=useNavigate()
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const handleChange = (event, type) => {
    // newChecked = {}
    let newChecked = {
      ...checked,
      [type]:event.target.checked
    }
    console.log(newChecked)
    setChecked(newChecked)
    // setChecked((prev) => {...prev, [type]:event.target.checked});
  };

  const navigateToForm =()=>{
if(checked.textForm && checked.mediaForm){
  navigate('/TextMediaForm')
}else if(checked.textForm && !checked.mediaForm){
  navigate('/TextForm')

}else if(!checked.textForm && checked.mediaForm){
  navigate('/MediaForm')

}
  }
  return (
    <>
     <div style={{ margin:'40px'}}>
    <Box sx={{ flexGrow: 1, }}>
      <Grid container spacing={2} >
  <Grid item xs={6}>
    <Item>
      <Checkbox
      checked={checked["textForm"]}
      onChange={(e) => handleChange(e, "textForm")}
      inputProps={{ 'aria-label': 'controlled' }}
    />

    <Card sx={{ maxWidth: 545 }}>

      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/Images/MobileTextAd.png"
          alt="green iguana"
        />
        <CardContent>
          <h4>Create </h4>
          <Typography gutterBottom variant="h5" component="div">
            Text Ad
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Item>
    
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Checkbox
      checked={checked["mediaForm"]}
      onChange={(e) => handleChange(e, "mediaForm")}
      inputProps={{ 'aria-label': 'controlled' }}
    />

    <Card sx={{ maxWidth: 545 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/Images/MediaAdimage.jpg"
          alt="MediaAdimage"
        />
        <CardContent>
          <h4>Create </h4>
          <Typography gutterBottom variant="h5" component="div">
            Media Ad
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Item>
    
  </Grid>

  </Grid>
  <div style={{display:'flex',justifyContent:'flex-end', margin:'1em'}}>
    <Button variant="contained" onClick={navigateToForm}>Next</Button>
</div>
{/* </Grid> */}
    </Box>

    </div>

    </>
  );
}
 export default CreateAd;
