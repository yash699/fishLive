import * as React from 'react';
import PropTypes from 'prop-types';

import {Box,Grid,Tabs,Tab,CardMedia,Typography
} from '@mui/material';

import Description from './Description';
import AdditionalDetails from './AdditionalDetails';
import Review from './Review';

import AddReview from './AddReview';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductDetailsDescription() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <div>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Details Info" {...a11yProps(1)} />
          <Tab label="Review" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Description/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdditionalDetails/>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Grid container spacing={0} >
            
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <AddReview/>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Review/>
            </Grid>
          </Grid>
        
      </TabPanel>
    </Box>
</div>

  );
}
