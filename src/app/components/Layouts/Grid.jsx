"use client"
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "../../components/Card"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {
  const {mainItem} = props;
  const {items} = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {mainItem && <Card item={mainItem} />}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {items.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}