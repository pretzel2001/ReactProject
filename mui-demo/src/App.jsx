import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css'


function App() {
  return (
    <>
    <Stack>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Stack>
    </>
  )
}

export default App
