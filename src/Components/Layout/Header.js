import React from 'react';
import { useState } from 'react';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import {Link, NavLink } from 'react-router-dom'
import { AppBar, Box, Divider, Drawer, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import '../../Styles/Headerstyle.css';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const [mobileopen, setMobileopen] = useState(false);

  //handle menu click

  const handleDrawerToggle = () => {
    setMobileopen(!mobileopen)
  }
  //menu drawer  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={'goldenrod'}
        variant="h6" component="div" sx={{ flexGrow: 1,my:2 }}>

        <FoodBankIcon />
        My Resturant
      </Typography>
      <Divider />
        <ul className='mobile-navigation'>
          <li>
            <NavLink activeclassName='active' to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink  to={'/Menu'}>Menu</NavLink>
          </li>
          <li>
            <NavLink  to={'/About'}>About</NavLink>
          </li>
          <li>
            <NavLink  to={'/Contact'}>Contact</NavLink>
          </li>
        </ul>
      </Box>
  
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"}
          sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer'
             edge="start" sx={{ mr: 2, display: { sm: "none" },
              }}
              onClick={handleDrawerToggle} 
              >

              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'}
              variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <FoodBankIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/Menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/About'}>About</Link>
                </li>
                <li>
                  <Link to={'/Contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>

        </AppBar>
        <Box component="nav"> <Drawer variant="temporary"
         open={mobileopen}
          onClose={handleDrawerToggle} 
        sx={{
          display:{xs:'block',sm:'none'}, 
          "& .MuiDrawer-papaer":{
          boxSizing:'border-box',
          width:"2 40px",
        },
        }}>
          
            {drawer}
          </Drawer>
        </Box>
        <Box  >
        <Toolbar />
          </Box> 
        
      </Box>
    </>
  )
}

export default Header