/* eslint-disable react/prop-types */
// MenuList.jsx

import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MenuList = ({ open, onClose, anchorEl }) => {
  const handleMenuItemClick = () => {
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
        padding: '0p', // Décalage vers la gauche
      }}
    >
      <Link to='/'>
        <MenuItem onClick={handleMenuItemClick}>Accueil</MenuItem>
      </Link>
      <Link to='/quizz'>
        <MenuItem onClick={handleMenuItemClick}>Quizz</MenuItem>
      </Link>
      <Link to='/prompt'>
        <MenuItem onClick={handleMenuItemClick}>Prompt IA</MenuItem>
      </Link>
      <Link to='/record'>
        <MenuItem onClick={handleMenuItemClick}>Enregistrement</MenuItem>
      </Link>
    </Menu>
  );
};

export default MenuList;
