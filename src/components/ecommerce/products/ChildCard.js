import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import {Paper,Grid,Card,CardContent,CardMedia,Typography,Container,Tooltip,
} from '@mui/material';



export default function ChildCard (props){
  


    return (
      <div>


                           

                        <Card  
                         
                        sx={{ cursor:'pointer',height:'350px'}}>

                           <CardMedia
                                component="img"
                                height="100%"
                                image={props.parentToChild}
                                alt="green iguana"
                                 sx={{ border: '0.5px solid #d3d3d3',marginBottom: '3px'}}
                            />
                        </Card>
    
      </div>
    )
  
}

