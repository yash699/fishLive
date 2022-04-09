import * as React from 'react';


import {List,ListItem,Divider,ListItemText,ListItemAvatar,Typography,Avatar,TextField,Box,FormControl,
  Select,MenuItem,InputLabel,Button
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';




export default function Review() {

   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box 
       sx={{
        width: '100%',
        marginBottom:'20px'
      }}
    > 

        <FormControl sx={{width: '95%',marginBottom:'10px'}}>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Rating"
          onChange={handleChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={10}>4</MenuItem>
          <MenuItem value={20}>5</MenuItem>
      

        </Select>
      </FormControl>

      <div>

        <TextField id="outlined-basic" label="Review Title" variant="outlined"
         sx={{width: '95%',marginBottom:'10px'}}/>

      </div>
      
      <div sx={{height:'25%'}}>
        <TextField id="outlined-basic" label="Review Description" variant="outlined" 
            sx={{width: '95%',marginBottom:'10px'}} size="string" minRows="10" multiline={true}/>
      </div>
        
        <Button variant="contained" sx={{width: '95%',textAlign:'center'}}>Add Review</Button>


    </Box>
  );
}
