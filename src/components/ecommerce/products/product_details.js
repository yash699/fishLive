
import {Grid,Typography,Container,Button,InputLabel,Box,MenuItem,FormControl,Select,
} from '@mui/material';

import BreadcrumbTitle from './Breadcrumb_title';
import ProductDetailsDescription from './ProductDetailsDescription';

import ProductImageGallery from './Product_image_gallery';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function product_details() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: '#fff',
        boxShadow:
          '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        marginBottom: '1.3rem',
        marginTop: '1rem',
        padding:'10px'
      }}
    >

      <BreadcrumbTitle/>

      <Grid container  sx={{marginTop:'1rem',marginBottom:'1.5rem'}} spacing={1}>
    
          <Grid item xs={12} sm={12} md={3} lg={6}>
              <ProductImageGallery/>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={6} >
              <Typography    variant="p" component="div"  sx={{color:'rgb(33 33 33)',textAlign:'left',marginTop:'20px',
              height:'40px',fontSize:'16px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
                        Bombay duck (Bombil)

              </Typography>

              <Typography    variant="p" component="div"  sx={{color:'#636395',textAlign:'left',
              fontSize:'14px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'300'}}>
                      Generally bombil found in tropical areas of Indo-pacific. Usually the size is 15-40 cm. It is popular in many parts of india, but favorite dish in Maharashtra.

              </Typography>

              <Typography    variant="p" component="div"  sx={{color:'rgb(33 33 33)',textAlign:'left',
              height:'40px',fontSize:'24px',color:'#ff7f00 !important',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
                       ₹139.00 – ₹489.00

              </Typography>

             <div>


                <Box sx={{marginBottom:'5px' }}>
                  <FormControl sx={{ minWidth: '70%'}}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10}
                      label="Age"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
             </div>

              <div>

                      <Button variant="contained" startIcon={<ShoppingCartIcon />}>Add To Cart</Button>

              </div>

          </Grid>

      </Grid>

      <ProductDetailsDescription />

    </Container>
  );
}

export default product_details;
