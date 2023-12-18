import React, { useEffect,useState } from 'react'
import { Container, Typography, Checkbox, FormControlLabel, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { CheckBox } from '@mui/icons-material';

const SuccessMsg = () => {
      const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
              navigate('/create-ad');
            }, 600);
  }, [navigate])

  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  // 
  return (
<Container maxWidth="sm" >
            <Box
        border={1}
        borderRadius={4}
        padding={2}
        borderColor="grey.300"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="5em"
      >
<Checkbox defaultChecked />
          <p>Submitted</p>
        
      </Box>
    </Container>  )
}

export default SuccessMsg



