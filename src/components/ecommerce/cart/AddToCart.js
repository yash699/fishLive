import * as React from 'react';
import { styled } from '@mui/material/styles';


import {Box,Paper,Grid,Card,CardActions,CardContent,CardMedia,Button,Typography,
  Container,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Divider,Avatar,ListItemAvatar
} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

import { makeStyles } from '@material-ui/core';
import CartSummary from './CartSummary';



const useStyles = makeStyles((theme) => ({
  outerDiv: {
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.03)',
    },
  },
}));


export default function AddToCart() {
  const classes = useStyles();

  return (

      <Container
        maxWidth="lg"
        sx={{
        
         
         
          marginTop: '2rem',
        }}
      >
          <Typography variant="h5" component="h6" sx={{marginTop:'10px',marginBottom:'10px'}}>
            Cart (10)
          </Typography>
        <Grid container spacing={2}>
         
           
       
          <Grid item xs={12} sm={12} md={6} lg={6} >
              <List sx={{ width: '100%', bgcolor: 'background.paper',marginTop:'10px' }}>
        
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" variant="square" sx={{ width: 100, height: 100 }} src="https://img.dmart.in/images/rwd/products/I/V/a/IVanaspati1LRUCI3494xx190521_5_P.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Gemini Refined Sunflower Oil : 5 Litres"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Variant: 5L

                          </Typography>
                          <Typography
                            sx={{ display: 'block',marginBottom:'10px' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Price: Rs.100

                          </Typography>

                            <ButtonGroup  aria-label="outlined primary button group"  sx={{ display: 'inline',marginRight:'10px' }}>
                              <Button variant="contained" sx={{ borderRadius:'unset'}}>-</Button>
                              <Button variant="outlined" disableRipple={true}>1</Button>
                              <Button variant="contained" sx={{ borderRadius:'unset'}}>+</Button>
                            </ButtonGroup>
                          
                          <Typography
                            sx={{ display: 'inline',fontWeight:'600',fontSize:'20px',color:'#333',float:'right' }}
                            component="span"
                           
                            color="text.primary"
                          >
                             Rs.100

                          </Typography>

                        </React.Fragment>
                      }
                    />
                     
                  </ListItem>

                  <Divider variant="inset" component="li" />

                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" variant="square" sx={{ width: 100, height: 100 }} src="https://img.dmart.in/images/rwd/products/I/V/a/IVanaspati1LRUCI3494xx190521_5_P.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Gemini Refined Sunflower Oil : 5 Litres"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Variant: 5L

                          </Typography>
                          <Typography
                            sx={{ display: 'block',marginBottom:'10px' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Price: Rs.100

                          </Typography>

                            <ButtonGroup  aria-label="outlined primary button group"  sx={{ display: 'inline',marginRight:'10px' }}>
                              <Button variant="contained" sx={{ borderRadius:'unset'}}>-</Button>
                              <Button variant="outlined" disableRipple={true}>1</Button>
                              <Button variant="contained" sx={{ borderRadius:'unset'}}>+</Button>
                            </ButtonGroup>
                          
                          <Typography
                            sx={{ display: 'inline',fontWeight:'600',fontSize:'20px',color:'#333',float:'right' }}
                            component="span"
                           
                            color="text.primary"
                          >
                             Rs.100

                          </Typography>

                        </React.Fragment>
                      }
                    />
                     
                  </ListItem>
             

              </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{paddingBottom:'20px'}}>
              <CartSummary />
          </Grid>

         
        </Grid>
      </Container>
 
  );
}
