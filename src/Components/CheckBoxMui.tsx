import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import { useState } from 'react';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';

function CheckBoxMui() {
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  //   console.log(accept);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccept(e.target.checked);
  };

  console.log(skills);
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box>
      {/* Normal Checkbox */}
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={accept}
              onChange={handleChange}
              size="small"
              color="secondary"
            />
          }
        />
      </Box>
      {/* Checkbox with just ICONs */}
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={accept}
          onChange={handleChange}
        />
      </Box>
      {/* CheckBox Group */}
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={'html'}
                  checked={skills.includes('html')}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={'css'}
                  checked={skills.includes('css')}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value={'javascript'}
                  checked={skills.includes('javascript')}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selected</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default CheckBoxMui;
