import {
  Container,
  Typography, Grid,
  Button,
} from '@mui/material';

import * as React from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import Stack from '@mui/material/Stack';
 import { useNavigate} from 'react-router';
 import { useState } from 'react';


const TextForm = ({props}) => {
 const navigate = useNavigate();

 const [formData, setFormData] = useState({
  heading01: '',
  heading02: '',
  description01: '',
  businessName: '',
  buttonLabel: '',
  websiteUrl: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

 const handleSubmit = (e) => {
       e.preventDefault();
       navigate("/SuccessMsg")
        console.log('Form submitted:', formData);
     };
     const navigateToBack=()=>{
      navigate('/Create-ad')
     }

    return (
    <Container style={{ border:'solid', borderStyle:'ridge',borderRadius:'0.4em', margin: "2em", padding: '1em', backgroundColor:'white', width:'100%' }}>
      <Typography variant="h6" gutterBottom>
       Create Text & Media
       </Typography>
       <form onSubmit={handleSubmit}>

        <div style={{ display: 'flex', marging: '1em' }}>

          <div style={{ margin: '1em' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <FormControl defaultValue={formData.heading01} >

                <Label>Heading 01</Label>
                <StyledInput name="heading01" value={formData.heading01} onChange={handleChange} placeholder="Add a heading that would make users interested" />
                <HelperText />
                </FormControl>

              </Grid>
            </Grid>
            <FormControl defaultValue={formData.heading02} >

            <Label>Heading 02 </Label>
            <StyledInput name="heading02" value={formData.heading02} onChange={handleChange} placeholder="Add a heading that would make users interested" />
            <HelperText />
            </FormControl>
            <FormControl defaultValue={formData.businessName} >

            <Label>Business Name</Label>
            <StyledInput name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Add your Business Name" />
            <HelperText />
            </FormControl>

          </div>
          <div style={{ margin: '1em' }}>
          <FormControl defaultValue={formData.description01} >

            <label > Discription 01</label> <br></br>
            <Textarea aria-label="minimum height" name="description01" value={formData.description01} onChange={handleChange} minRows={5} placeholder="Add a primary text to help users understand more about your products, services & offers" />

            <HelperText />
            </FormControl>
            <FormControl defaultValue={formData.buttonLabel} >

            <Label>Button Label</Label>
            <StyledInput name="buttonLabel" value={formData.buttonLabel} onChange={handleChange} placeholder="Select a label that best suits your ad" />
            <HelperText />
            </FormControl>

          </div>
        </div>
        <div>
        <FormControl defaultValue={formData.websiteUrl} >

        <Label>Website URL</Label>
        <StyledInput3 type='text' name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} placeholder="Add a  URl of landing page you want to redirect users to"  />
            {/* <StyledInput placeholder="Add a  URl of landing page you want to redirect users to" style={{width:"900px"}} /> */}
            <HelperText />
            </FormControl>

        </div>
        <div style={{margin:'0.5em', padding:'0.3em', display:'flex',justifyContent:'flex-end'}}>
        <Stack spacing={2} direction="row">

        <Button variant="outlined" style={{margin:'0.5em'}} onClick={navigateToBack} >Back</Button>

        <Button type='submit' variant="contained" style={{margin:'0.5em'}}>Submit</Button>
        </Stack>

        </div>
      </form>
    </Container>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 520px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);
const StyledInput3 = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 95%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);


const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 520px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);



 export default TextForm;