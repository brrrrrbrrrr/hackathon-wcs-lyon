import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/icones/logo_logo.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function BurgerMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#DAECF9' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2, color: '#1B3759' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, color: '#1B3759' }}
          >
            BIENVE
            <img src={logo} alt='Logo' style={{ height: 30, marginLeft: 10 }} />
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
