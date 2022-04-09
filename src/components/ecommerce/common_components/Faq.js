import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';

export default function Faq() {
  return (
    <div>
      <Container
        maxWidth="lg"
       
      >
        <Typography variant="h5" component="h6" sx={{marginTop:'10px',marginBottom:'10px'}}>
          Frequently Asked Questions
        </Typography>



        <Accordion sx={{marginTop:'10px',marginBottom:'10px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{fontWeight:'600',color:'#333'}}>What is DMart Ready? Are DMart Ready Pick Up Points different from DMart Stores?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              DMart Ready is the name of DMart's online service. Through this service, we hope to bring DMart closer to you. How? We have opened several DMart Ready Pick Up Points for your convenience and you can locate it on www.dmart.in/whatispickuppoint by entering your area, locality, pincode. Unlike our regular DMart store, DMart Ready Pick Up Points are specific locations from where you can collect your online order. While placing an order on our mobile app or web site, you can select from a list of pick up points that are closest to you, and choose a time slot that is convenient for you. We will process your order and keep it ready at your chosen DMart Ready Pick Up Point. You can collect your order at any time during your time slot - FREE of charge! Now you can buy all your favourite products online from our app or web site, and enjoy DMart's daily discounts and savings.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{marginTop:'10px',marginBottom:'10px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontWeight:'600',color:'#333'}}>How do I choose a DMart Ready Pick Up Point?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{marginTop:'10px',marginBottom:'10px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontWeight:'600',color:'#333'}}>How do I choose a DMart Ready Pick Up Point?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{marginTop:'10px',marginBottom:'10px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontWeight:'600',color:'#333'}}>How do I choose a DMart Ready Pick Up Point?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{marginTop:'10px',marginBottom:'10px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontWeight:'600',color:'#333'}}>How do I choose a DMart Ready Pick Up Point?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Container>
      
    </div>
  );
}
