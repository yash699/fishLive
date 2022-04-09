import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Review() {
  return (

    <div>

      <Typography
                sx={{ display: 'block',fontWeight:'600',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                component="span"
                variant="p"
                color="text.primary"
              >

               Reviews


      </Typography>
      
      <List sx={{ width: '100%', bgcolor: 'background.paper',height:'500px',overflowY:'scroll',marginTop:'10px' }}>
        


        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ramesh Patil"
            secondary={
              <React.Fragment>

                <Typography
                  sx={{ display: 'block',fontWeight:'600',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                  component="span"
                  variant="p"
                  color="text.primary"
                >

                  Amazing Noise Cancelling- surround sound!


                </Typography>


                <Typography
                  sx={{ display: 'block',fontWeight:'400',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                  component="span"
                  variant="p"
                  color="text.primary"
                >

                  abra always attracted me, I own a speaker which has mics to do meetings.
              I got Opportunity to buy this in the Freedom sale.
              Quick likes and dislikes am sharing from my experience


                </Typography>











                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/> 


                </Typography>

                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Reviewed in Japan on 30 November 2018 


                </Typography>


                

              
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ramesh Patil"
            secondary={
              <React.Fragment>

                <Typography
                  sx={{ display: 'block',fontWeight:'600',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                  component="span"
                  variant="p"
                  color="text.primary"
                >

                  Amazing Noise Cancelling- surround sound!


                </Typography>


                <Typography
                  sx={{ display: 'block',fontWeight:'400',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                  component="span"
                  variant="p"
                  color="text.primary"
                >

                  abra always attracted me, I own a speaker which has mics to do meetings.
              I got Opportunity to buy this in the Freedom sale.
              Quick likes and dislikes am sharing from my experience


                </Typography>











                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/> 


                </Typography>

                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Reviewed in Japan on 30 November 2018 


                </Typography>


                

              
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ramesh Patil"
            secondary={
              <React.Fragment>

                <Typography
                  sx={{ display: 'block',fontWeight:'600',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                  component="span"
                  variant="p"
                  color="text.primary"
                >

                  Amazing Noise Cancelling- surround sound!


                </Typography>


                <Typography
                  sx={{ display: 'block',fontWeight:'400',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                  component="span"
                  variant="p"
                  color="text.primary"
                >

                  abra always attracted me, I own a speaker which has mics to do meetings.
              I got Opportunity to buy this in the Freedom sale.
              Quick likes and dislikes am sharing from my experience


                </Typography>











                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/> 


                </Typography>

                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Reviewed in Japan on 30 November 2018 


                </Typography>


                

              
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ramesh Patil"
            secondary={
              <React.Fragment>

                <Typography
                  sx={{ display: 'block',fontWeight:'600',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                  component="span"
                  variant="p"
                  color="text.primary"
                >

                  Amazing Noise Cancelling- surround sound!


                </Typography>


                <Typography
                  sx={{ display: 'block',fontWeight:'400',color:'#333',marginTop:'10px',marginBottom:'10px' }}
                  component="span"
                  variant="p"
                  color="text.primary"
                >

                  abra always attracted me, I own a speaker which has mics to do meetings.
              I got Opportunity to buy this in the Freedom sale.
              Quick likes and dislikes am sharing from my experience


                </Typography>











                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/> 


                </Typography>

                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Reviewed in Japan on 30 November 2018 


                </Typography>


                

              
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />

      </List>
    </div>
  );
}
