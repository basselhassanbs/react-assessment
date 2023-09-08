import { MenuItem, OutlinedInput, Select } from '@mui/material';

const Dropdown = ({ value, handleChange, items }) => {
  return (
    <Select
      displayEmpty
      value={value}
      onChange={handleChange}
      input={<OutlinedInput />}
      sx={{ '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' } }}
      inputProps={{ 'aria-label': 'Without label' }}
    >
      {items.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
