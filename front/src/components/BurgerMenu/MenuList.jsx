// MenuList.jsx
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MenuList = ({ open, onClose, anchorEl }) => {
  const handleMenuItemClick = (event) => {
    // Ajoutez ici la logique pour gérer les clics sur les éléments du menu
    onClose(); // Fermer le menu après avoir cliqué sur un élément
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#DAECF9', // Fond spécifique pour le menu déroulant
        },
        // Ajouter des marges pour ajuster la position du menu
        marginTop: '8px', // Décalage vers le bas
        marginRight: '20px',
        padding:"0p" // Décalage vers la gauche
      }}
    >
      <MenuItem onClick={handleMenuItemClick}>Option 1</MenuItem>
      <MenuItem onClick={handleMenuItemClick}>Option 2</MenuItem>
      <MenuItem onClick={handleMenuItemClick}>Option 3</MenuItem>
    </Menu>
  );
};

export default MenuList;
