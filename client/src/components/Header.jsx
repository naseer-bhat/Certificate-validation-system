
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/Logo.png'

const Header = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Nexus Validations 
        </Typography>
        {/* <img src={Logo} alt="Logo"  style={{ width: '100px' }} /> */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Validate Certificate</Button>
        <Button color="inherit">Manage Certificates</Button>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
        <Avatar alt="User Profile" src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;








