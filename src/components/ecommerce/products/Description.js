import * as React from 'react';
import {Typography,Box,
} from '@mui/material';

export default function Description() {

  return (
    <Box sx={{ width: '100%' }}>

      <Typography    variant="p" component="div"  sx={{color:'#636395',textAlign:'left',
              fontSize:'16px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
               Description of Bombil :

      </Typography>
      <Typography    variant="p" component="div"  sx={{color:'#636395',textAlign:'left',
              fontSize:'15px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'500'}}>
              Generally bombil found in tropical areas of Indo-pacific. Usually the size is 15-40 cm. It is popular in many parts of india, but favorite dish in Maharashtra.

      </Typography>

      <Typography    variant="p" component="div"  sx={{color:'#636395',textAlign:'left',
              fontSize:'16px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
              Usage:

      </Typography>
      <Typography    variant="p" component="div"  sx={{color:'#636395',textAlign:'left',
              fontSize:'15px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'500'}}>
            Best taste of this rise in bombil fry.

      </Typography>


      <Typography    variant="p" component="div"  sx={{color:'#636395',textAlign:'left',
              fontSize:'16px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
              Nutrition:

      </Typography>
      <Typography    variant="p" component="div"  sx={{color:'#636395',textAlign:'left',
              fontSize:'15px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'500'}}>
            Bobmil is a rich source of protein, and good source of calcium, iron, vitamin B6 and Niacin, which keeps the immune system healthy.

      </Typography>
    




    </Box>
  );
}
