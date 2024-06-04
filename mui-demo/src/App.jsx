import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { makeStyles } from '@mui/system';
import './App.css'
import { borderColor, margin } from '@mui/system';

function App() {
  const classes= {
    btn:{
      fontSize:20,
      backgroundColor:"pink",
      borderColor: "pink",
      color: "white",
      '&:hover': {
        backgroundColor: "violet",
        borderColor: "violet",
      }
    },
    body:{
      padding:3
    },
    title:{
      marginBottom: 2
    }
  }
  return (
    <>
    {/* <Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained" disableElevation>Contained</Button>
    <Button variant="outlined" disableRipple>Outlined</Button>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Checkbox {...label} />
    </Stack> */}
    <Container sx={classes.body}>
    <Typography sx={classes.title} variant="h5" color="textSecondary" align="left" noWrap gutterBottom >
        Create New Note
      </Typography>
      <Button onClick={() => console.log('clicked')} sx = {classes.btn}variant="outlined" endIcon={<ArrowForwardIosIcon/>}>
        Send
      </Button>
    </Container>
    </>
  )
}

export default App
