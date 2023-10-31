import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

function SelectMui() {
  const [country, setCountry] = useState('');
  const [countryx, setCountryx] = useState<string[]>([]);
  console.log(countryx);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  const handleChangex = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountryx(typeof value === 'string' ? value.split('') : value);
  };
  return (
    // SELECT using TextField
    <Box width={'250px'}>
      <TextField
        helperText="Please select which country you were born"
        fullWidth
        label="Country"
        select
        value={country}
        onChange={handleChange}
        size="small"
        color="success"
      >
        <MenuItem value={'IN'}>India</MenuItem>
        <MenuItem value={'US'}>USA</MenuItem>
        <MenuItem value={'AU'}>Australia</MenuItem>
      </TextField>
      {/* Multi-Select Dropdown */}
      <TextField
        helperText="Please select which country you were born"
        fullWidth
        label="Country"
        select
        value={countryx}
        onChange={handleChangex}
        SelectProps={{
          multiple: true,
        }}
        error
      >
        <MenuItem value={'IN'}>India</MenuItem>
        <MenuItem value={'US'}>USA</MenuItem>
        <MenuItem value={'AU'}>Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default SelectMui;
