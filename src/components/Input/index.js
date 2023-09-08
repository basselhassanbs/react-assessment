import { TextField } from '@mui/material';
import React from 'react';

const Input = ({ value, placeholder, variant, handleChange, ...props }) => {
  return (
    <TextField
      id='outlined-basic'
      variant={variant}
      onChange={handleChange}
      value={value}
      //   size='small'
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
