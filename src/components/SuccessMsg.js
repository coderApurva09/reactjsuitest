import React, { useEffect} from 'react'
import { Container, Checkbox, Box } from '@mui/material';
import { useNavigate } from 'react-router';

const SuccessMsg = () => {
      const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
              navigate('/create-ad');
            }, 600);
  }, [navigate])
 
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



