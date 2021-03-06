import * as React from 'react';
import PropTypes from 'prop-types';


//Import Components 
import {Toolbar,Typography,CssBaseline,useScrollTrigger,Box,Container,Zoom,AppBar,Drawer,
  Button,List,Divider,ListItem,ListItemIcon,ListItemText,MenuItem,Autocomplete,InputBase,Badge,
  Menu,Avatar,Modal,TextField,IconButton,Tooltip
  } from '@mui/material';

//Import Styles 
import { styled, alpha } from '@mui/material/styles';

//Import Icon 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core';

import NestedList from './NestedList'


import LockOpenIcon from '@mui/icons-material/LockOpen';

import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import PersonIcon from '@mui/icons-material/Person';



const useStyles = makeStyles((theme) => ({
  boxResize: {
     marginBottom:'3.3rem',
    
    [theme.breakpoints.down("md")]: {
      marginBottom:'3.5rem',
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom:'3.5rem',
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom:'5.5em',
    },
  },
  listItem: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#f44336',
      color:'red'
    },
 },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
 

  cursor: 'text',
}));

const Logo = styled('div')(({ theme }) => ({
  width: '140px',
  height: '49px',

  backgroundSize: 'contain!important',
  overflow: 'hidden',
  display: 'inline-block',
  zIndex: '2',
  background: 'url(https://content.dmart.in/img/DMartReady.svg) no-repeat',
  boxSizing: 'content-box',

  [theme.breakpoints.down('sm')]: {
    width: '74px',
    height: '62px',
    marginBottom: '-42px',
    marginLeft: '-8px',
    marginRight: '3px',
    flexGrow: 1,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexGrow: 1,
  },
}));

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '3px',
  p: 4,
  textAlign: 'center',
  border: 'unset',
};

const top100Films = [
  { label: 'Thane 401105', year: 1994 },
  { label: 'Mumbai 401104', year: 1972 },
];

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default function Navbar(props) {

  const classes = useStyles();

  //****************Modal State  Start***************** */
  const [modalopen, setModalOpen] = React.useState(false);
  const modalHandleOpen = () => setModalOpen(true);
  const modalHandleClose = () => setModalOpen(false);
  //****************Modal State End ***************** */

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: '280px' }}
      role="presentation"
      /*onClick={toggleDrawer(false)}*/
      onKeyDown={toggleDrawer(false)}
    >
      <Typography  className="page-wrap"  variant="p" component="div"  sx={{backgroundColor:'#283593',textAlign:'center',padding:'4px',display: 'flex',alignItems:'center',justifyContent:'flex-start'}}>
        <div>
          <AccountCircle  sx={{color:'#fff',fontWeight:'900',fontSize:'2.3rem'}}/> 
          
        </div>
        <div>
        <span style={{marginLeft:'16px',color:'#fff',fontWeight:'900'}}>Hi , Yash</span>
        </div>

      </Typography>



  
  

     
        <NestedList/>
      

      <Divider />
   


    </Box>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const accountMenu = (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          width:'200px',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <a href="profile" style={{textDecoration:'none',color:'#333',marginBottom:'4px'}}>
        <MenuItem>
         
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
           Profile
        </MenuItem>
      </a>
      <a href="myOrder" style={{textDecoration:'none',color:'#333',marginBottom:'4px'}}>
        <MenuItem>
          <ListItemIcon>
            <ContentPasteSearchIcon fontSize="small" />
          </ListItemIcon>
           My Order
        </MenuItem>
      </a>
      <Divider />

      <a href="register" style={{textDecoration:'none',color:'#333',marginBottom:'4px'}}>
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Register
        </MenuItem>
      </a>
      <a href="login" style={{textDecoration:'none',color:'#333',marginBottom:'4px'}}>
        <MenuItem>
          <ListItemIcon>
            <LockOpenIcon fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
      </a>
      <a href="/" style={{textDecoration:'none',color:'#333',marginBottom:'4px'}}>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </a>
       
    </Menu>
  );



  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }} className={classes.boxResize} >
        <AppBar sx={{ minHeight: '40px!important',position:'fixed' }}>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                marginRight: '10px',
                display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <LogoBox>
              <Logo />
            </LogoBox>

            <Search sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
              <SearchIconWrapper>
                
                  <SearchIcon />
                
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search???"
                inputProps={{ 'aria-label': 'search' }}
              />


            </Search>

            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  marginLeft: '1rem',
                  fontSize: '1rem',
                  marginTop: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: { sm: 'none', xs: 'none', md: 'none',lg:'flex' },
                }}
                noWrap={false}
                onClick={modalHandleOpen}
              >
                <IconButton
                  size="small"
                  color="inherit"
                  sx={{ marginTop: '-10px' }}
                >
                  <AddLocationIcon />
                </IconButton>
                <span style={{ paddingRight: '2px', paddingLeft: '-5px' }}>
                  Thane West
                </span>
                <span style={{ color: 'rgb(6 0 0)', paddingLeft: '3px' }}>
                  401105
                </span>
                <span style={{ verticalAlign: 'middle' }}>
                  <KeyboardArrowDownIcon sx={{ marginTop: '3px' }} />
                </span>
              </Typography>

              <Tooltip
                title="Location Setting"
                sx={{ display: { sm: 'block', xs: 'block', md: 'flex',lg:'none',xl:'none' } }}
              >
                <IconButton
                  size="medium"
                  color="inherit"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={modalHandleOpen}
                >
                  <AddLocationIcon />
                </IconButton>
              </Tooltip>

              <a href="add_to_cart"><Tooltip title="Account settings">
                <IconButton
                  size="medium"
                  color="inherit"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  sx={{color:'#fff'}}
                >
                  <Badge
                    badgeContent={4}
                    color="secondary"
                    badgeContent={1000}
                    max={999}
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              </a>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="medium"
                  color="inherit"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>

          <Toolbar
            sx={{
              justifyContent: 'center',
              display: { xs: 'block', sm: 'none', md: 'none' },
              minHeight: '45px!important',
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search???"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>

        <React.Fragment>
          <Button onClick={toggleDrawer(true)}></Button>
          <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>

       
        {accountMenu}
      </Box>

    

      <Modal
        keepMounted
        open={modalopen}
        onClose={modalHandleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{ border: 'unset' }}
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h4"
            sx={{ marginBottom: '7px', fontSize: '1.24rem' }}
          >
            Where should we deliver your Order?
          </Typography>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Pincode" />}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
