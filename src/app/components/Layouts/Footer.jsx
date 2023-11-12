import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';

export default function Footer() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#303233', width: '100%', padding: '3%', marginTop:"3%" }}>
            <h1>All rights reserved</h1>
            <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Thank you for following us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Indetonos Banda | Tandil | Argentina`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
        </Box>
       
      </Container>
    </React.Fragment>
  );
}
