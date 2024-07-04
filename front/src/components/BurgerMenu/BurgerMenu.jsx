import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/icones/logo1.png';
import MenuList from './MenuList'; // Assurez-vous d'importer correctement MenuList depuis votre fichier

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#DAECF9' }}>
        <Toolbar sx={{ zIndex: 1300 }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2, color: '#1B3759' }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <MenuList
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          />

          <Box>
            <img
              src={logo}
              alt='Logo'
              style={{ height: 30, marginLeft: 5, padding: 5 }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BurgerMenu;
