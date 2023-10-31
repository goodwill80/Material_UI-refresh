import { useState } from 'react';

import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from '@mui/icons-material';

function ButtonsMui() {
  //   const [formats, setFormats] = useState<string[]>([]);
  const [formats, setFormats] = useState<string | null>('');

  console.log(formats);

  const handleFormatChange = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setFormats(updatedFormat);
  };

  return (
    <Stack spacing={4}>
      {/* Variants */}
      <Stack
        spacing={2}
        direction="row"
        justifyContent={'center'}
        sx={{ margin: 'auto' }}
      >
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      {/* Colors */}
      <Stack
        spacing={2}
        direction="row"
        display={'flex'}
        justifyContent={'center'}
      >
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        display={'flex'}
        justifyContent={'center'}
      >
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        display={'flex'}
        justifyContent={'center'}
      >
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>
      {/* Sizes */}
      <Stack spacing={2} direction="row" justifyContent={'center'}>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </Stack>
      {/* Icons */}
      <Stack spacing={2} direction={'row'} justifyContent={'center'}>
        <Button
          variant="contained"
          color={'warning'}
          startIcon={<SendIcon />}
          disableElevation
        >
          Start Icon
        </Button>
        <Button
          variant="contained"
          color={'secondary'}
          endIcon={<SendIcon />}
          disableFocusRipple
          onClick={() => alert('You have clicked me!')}
        >
          End Icon
        </Button>
      </Stack>
      {/* How to include just the Icon? */}
      <Stack spacing={2}>
        <IconButton aria-label="send" color="error" size="large">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* Button Group */}
      <Stack direction={'row'} justifyContent={'center'}>
        <ButtonGroup
          variant="outlined"
          orientation="horizontal"
          size="small"
          color="secondary"
        >
          <Button
            onClick={() => alert('left clicked!')}
            aria-label="alignment button gp"
          >
            Left
          </Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* Toggle and Group Toggle Buttons and OnChange Effects */}
      <Stack direction={'row'} justifyContent={'center'}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default ButtonsMui;
