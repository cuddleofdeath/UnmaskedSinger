import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './Footer.css';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Made with 💕 by '}
      <Link color='inherit' href='https://github.com/cuddleofdeath'>
        CuddleofDeath
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '20vh',
        width: '100vw',
      }}
    >
      <CssBaseline />

      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth='lg' className='footer'>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
