import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

function TextFieldMui() {
  const [value, setValue] = useState<string>('');
  return (
    <Stack spacing={4}>
      {/* Variants */}
      <Stack direction={'row'} spacing={2} sx={{ paddingTop: '20px' }}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      {/* Color and Size */}
      <Stack direction={'row'} spacing={2} sx={{ paddingTop: '20px' }}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      {/* Required prop and helper text and type*/}
      <Stack direction={'row'}>
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone'
          }
        />
        <TextField
          label="mandatory"
          required
          helperText="Do not share your password with anyone"
          error
        />
        <TextField
          label="Password"
          type="password"
          disabled
          helperText="Please enter your password"
        />
        <TextField label="Read Only Field" InputProps={{ readOnly: true }} />
      </Stack>
      {/* What is Input Adornment?? */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default TextFieldMui;
