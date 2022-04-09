import * as React from 'react';
import { styled } from '@mui/material/styles';


import {Box,Paper,Grid,Card,CardActions,CardContent
  ,CardMedia,Button,Typography,Container} from '@mui/material';


import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  outerDiv: {
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.03)',
    },
  },

  boxResize: {
    // marginBottom: '2.3rem',
    //  marginTop: '-1rem',
    //  [theme.breakpoints.down('md')]: {
    //   marginTop: '-9rem',
    //   color:'blue'
    // },
    
    // [theme.breakpoints.down('sm')]: {
    //   marginTop: '-11rem',
    //   color:'red'
    // },

    
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Poster() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#fff',
        boxShadow:
          '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
       
      }}
      className={classes.boxResize}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{ padding: '3px', fontSize: '18px' }}
      >
        Monthly Essentials
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
            <Card className={classes.outerDiv}>
              <CardMedia
                component="img"
                height="150"
                image="https://img.dmart.in/images/rwd/banners/vwctb/13cw/15mar22-3cw-oil.jpg"
                alt="green iguana"
              />
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
            <Card className={classes.outerDiv}>
              <CardMedia
                component="img"
                height="150"
                image="https://img.dmart.in/images/rwd/banners/vwctb/13cw/15mar22-3cw-ghee.jpg"
                alt="green iguana"
              />
            </Card>
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
            <Card className={classes.outerDiv}>
              <CardMedia
                component="img"
                height="150"
                image="https://img.dmart.in/images/rwd/banners/vwctb/13cw/15mar22-3cw-italianstore.jpg"
                alt="green iguana"
              />
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
