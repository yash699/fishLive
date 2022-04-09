import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import {Box,Paper,Grid,Card,CardActions,CardContent,CardMedia,Button,Typography,
  Container,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Divider,Avatar,ListItemAvatar
} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from '@material-ui/core';
export default function Orders() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
      	<Typography sx={{ width: '33%', flexShrink: 0 }}>
	           My Orders
	    </Typography>
        <Box  >
        	<a href="orderDetails" style={{textDecoration:'none',color:'#333'}}>
	        	<Grid container  sx={{backgroundColor:'#fff',marginTop:'1rem',padding:'20px 0px' }}>
	         
	           		

	       				
			          <Grid item xs={6} sm={6} md={3} lg={3} sx={{display:'flex',justifyContent:'center',marginTop:"10px" }}> 	
			          	<span style={{fontSize:'16px'}}>Order Id :</span>
			          	<span style={{display:'block'}}> 348590830</span>
			          	
			          </Grid>
			        
			         
			          <Grid item xs={6} sm={6} md={3} lg={3} sx={{display:'flex',justifyContent:'center',marginTop:"10px" }}> 	
			          	<span style={{fontSize:'16px'}}>Total Amt :</span>
			          	<span> Rs.4500</span>
			          </Grid>
			       
			       
			          <Grid item xs={12} sm={6} md={3} lg={3} sx={{display:'flex',justifyContent:'center',marginTop:"10px",textAlign:'center'}}> 	
			          	<span style={{fontSize:'16px'}}>Delivery Date :</span>
			          	<span> 02 April 2020</span>
			          </Grid>
			          <Grid item xs={12} sm={6} md={3} lg={3} sx={{display:'flex',justifyContent:'center',marginTop:"10px" }}> 	
			          
			          	<span ><Button variant="contained" color="success" size="small" style={{borderRadius:'22px'}}>Delivered</Button></span>
			          </Grid>

			         
			      


	        	</Grid>
        	</a>

        	
        	


        </Box>

      </Container>
    </React.Fragment>
  );
}
