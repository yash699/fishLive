import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import {Paper,Grid,Card,CardContent,CardMedia,Typography,Container,Tooltip,
} from '@mui/material';
import  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';


import ChildCard from './ChildCard';


const useStyles = makeStyles((theme) => ({
 
  cardBorder: {
    '&:hover': {
      cursor: 'pointer',
      borderColor: '#f44336',
    },
 },
}));
var items = [
    {
      name: 'Random Name #1',
      description:
        'https://www.fishlelo.com/wp-content/uploads/2020/07/paplate-3.jpg',
    },
    {
      name: 'Random Name #2',
      description:
        'https://image.shutterstock.com/image-photo/fresh-pomfret-isolated-on-white-600w-214886404.jpg',
    },
    
  ];


export default function Product_image_gallery (){
    const classes = useStyles();

    const [data, setData] = useState(items);
 


      useEffect(() => {

        if(data.length>0)
        {
            console.log(data.length);
            setData(data[0].description);
        }
        
      
  },[]);

    return (
      <div>

        <Grid container  sx={{marginTop:'1rem'}} spacing={1}>
    
          <Grid item xs={3} sm={3} md={3} lg={2}>
                
                        <Card  
                        
                          sx={{ cursor:'pointer'}}>
                      

                            {items.map((item, i) => (
                              
                              <div style={{height:'100px',display:'block',marginBottom:'3px'}}>
                                <CardMedia
                                  key={i}
                                  component="img"
                                  height="100%"
                                  image={item.description}
                                  alt="green iguana"
                                   sx={{ border: '0.5px solid #d3d3d3',marginBottom: '3px'}}
                                   className={classes.cardBorder} 
                                   onClick={()=>{(i==1)?setData(item.description):setData(item.description)}}
                                  />
                              </div>
                           
                            ))}
                         
                            
                          </Card>
            
          </Grid>

          <Grid item xs={9} sm={9} md={9} lg={9}>
                
              <ChildCard parentToChild={data} />
                            

                      
            
          </Grid>


        </Grid>
        
  
  
      </div>
    )
  
}


function Item(props) {
  return (
    <div>
      
      <CardMedia
                                component="img"
                                height="100%"
                                image={props.item.description}
                                alt="green iguana"
                                 sx={{ border: '0.5px solid #d3d3d3',marginBottom: '3px'}}

                                 onClick={()=>alert('Hello World')}
                            />
    </div>
  );
}