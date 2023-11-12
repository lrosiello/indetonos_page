import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer(props) {
  const { pageToLoad } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#303233', width: '100%', padding: '3%' }}>
          {pageToLoad()}
        </Box>
      </Container>
    </React.Fragment>
  );
}
