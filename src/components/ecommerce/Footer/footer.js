import * as React from 'react';
import { styled } from '@mui/material/styles';


import {Box,Paper,Grid,Card,CardActions,CardContent,CardMedia,Button,Typography,
  Container,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Divider
} from '@mui/material';


import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  outerDiv: {
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.03)',
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: '#232F3E',
         position:'sticky',
         bottom:0,
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          marginTop: '2rem',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={8} md={3} sx={{ padding: '10px!important' }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding alignItems="center">
                    <a>
                      <ListItemText
                        primary="INFO"
                        sx={{ color: '#878787' }}
                      />
                    </a>
                  </ListItem>

                
                  <ListItem disablePadding>
                    <a href="about_us" style={{textDecoration:'none',color:'#333'}}>
                      <ListItemText primary="About us" sx={{ color: '#fff' }} />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <a href="faq" style={{textDecoration:'none',color:'#333'}}>
                      <ListItemText primary="FAQs" sx={{ color: '#fff' }} />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <a href="privacy_policy" style={{textDecoration:'none',color:'#333'}}>
                      <ListItemText
                        primary="Privacy Policy"
                        sx={{ color: '#fff' }}
                      />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Returns & Refunds"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                   
                    <a href="terms_conditions" style={{textDecoration:'none',color:'#333'}}>
                      <ListItemText
                        primary="Terms & Conditions"
                        sx={{ color: '#fff' }}
                      />
                    </a>
                  </ListItem>
                </List>
              </nav>
            </Item>
          </Grid>

          <Grid item xs={6} sm={8} md={3} sx={{ padding: '10px!important' }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText
                        primary="SOCIAL"
                        sx={{ color: '#878787' }}
                      />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText primary="Facebook" sx={{ color: '#fff' }} />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="YouTube"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Twitter"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="WhastApp"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Instagram"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                </List>
              </nav>
            </Item>
          </Grid>

          <Grid item xs={6} sm={8} md={3} sx={{ padding: '10px!important' }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText
                        primary="Customer Service"
                        sx={{ color: '#878787' }}
                      />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText primary="Mail: fish@gmail.com" sx={{ color: '#fff' ,textDecoration:'underline' }} />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Telephone: 1800 3900 2800"
                      sx={{ color: '#fff',textDecoration:'underline' }}
                    />
                  </ListItem>
             
                </List>
              </nav>
            </Item>
          </Grid>

          <Grid item xs={6} sm={8} md={3} sx={{ padding: '10px!important' }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText
                        primary="Registered Office Address:"
                        sx={{ color: '#878787' }}
                      />
                    </a>
                  </ListItem>
               
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Flipkart Internet Private Limited,

                        Buildings Alyssa, Begonia &

                        Clove Embassy Tech Village,

                        Outer Ring Road, Devarabeesanahalli Village,

                        Bengaluru, 560103,

                        Karnataka, India

                        CIN : U51109KA2012PTC066107

                        "
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                
                </List>
              </nav>
            </Item>
          </Grid>

          <Divider sx={{ borderTop: '1px solid #fff' }} />
          <Grid item xs={12} md={12} sx={{ padding: '10px!important' }}>
            <Item
              sx={{
                backgroundColor: 'transparent',
                color: '#fff',
                boxShadow: 'unset',
                width: '100%',
              }}
            >
              Copyright © 2067 E-Commerce Limited (EL). All Rights Reserved.
            </Item>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
