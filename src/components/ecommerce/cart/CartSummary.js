import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CartSummary() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{maeginTop:'20px'}}>
      <CardHeader title="Price Summary (3 items)" />
     <Divider />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{display:'flex',justifyContent:'space-between',marginBottom:'5px',marginTop:'5px'}}>
          <span style={{color:'rgb(158, 158, 158)',fontWeight:'600',fontSize:'20px'}}>Cart Total</span>
          <span style={{color:'#333',fontWeight:'600',fontSize:'20px'}}>Rs.255</span>
        </Typography>
            <Divider />
        <Typography variant="body2" color="text.secondary" sx={{display:'flex',justifyContent:'space-between',marginBottom:'5px',marginTop:'5px'}}>
          <span style={{color:'rgb(158, 158, 158)',fontWeight:'600',fontSize:'20px'}}>Delivery Charge</span>
          <span style={{color:'#333',fontWeight:'600',fontSize:'20px'}}>Rs.50</span>
        </Typography>
      <Divider />

        <Typography variant="body2" color="text.secondary" sx={{display:'flex',justifyContent:'space-between',marginBottom:'5px',marginTop:'5px'}}>
          <span style={{color:'rgb(158, 158, 158)',fontWeight:'600',fontSize:'20px'}}>Total</span>
          <span style={{color:'#333',fontWeight:'600',fontSize:'20px'}}>Rs.305</span>
        </Typography>
          <Divider />



          <Button variant="contained" color="success" fullWidth sx={{marginBottom:'20px',marginTop:'20px'}}>Procees To Slot</Button>
      </CardContent>
      
      
    </Card>
  );
}
