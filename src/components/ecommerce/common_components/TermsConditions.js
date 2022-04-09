import * as React from 'react';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';

export default function TermsConditions() {
  return (
    <div>
      <Container
        maxWidth="lg"
       
      >
        <Typography variant="h5" component="h6" sx={{marginTop:'10px',marginBottom:'10px'}}>
          Terms Conditions
        </Typography>


        <Paper sx={{padding:'20px 20px',marginBottom:'10px',height:'35vh'}}>
            <Typography>
              DMart Ready is the name of DMart's online service. Through this service, we hope to bring DMart closer to you. How? We have opened several DMart Ready Pick Up Points for your convenience and you can locate it on www.dmart.in/whatispickuppoint by entering your area, locality, pincode. Unlike our regular DMart store, DMart Ready Pick Up Points are specific locations from where you can collect your online order. While placing an order on our mobile app or web site, you can select from a list of pick up points that are closest to you, and choose a time slot that is convenient for you.
            </Typography>

            <Typography variant="p"  sx={{paddingLeft:'10%'}}>
              We will process your order and keep it ready at your chosen DMart Ready Pick Up Point. You can collect your order at any time during your time slot - FREE of charge! Now you can buy all your favourite products online from our app or web site, and enjoy DMart's daily discounts and savings.
            </Typography>
        </Paper>
        

      </Container>
      
    </div>
  );
}
