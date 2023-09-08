import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position='fixed' color='default'>
      <Toolbar>
        <Button onClick={() => navigate('/users')} color='inherit'>
          Users
        </Button>
        <Button onClick={() => navigate('/products')} color='inherit'>
          Products
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
