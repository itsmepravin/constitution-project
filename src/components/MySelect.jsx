import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const MySelect = ({ currentPart, setCurrentPart }) => {
  const handleSelectChange = (event) => setCurrentPart(event.target.value);

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="readPart-label">Read: </InputLabel>
        <Select
          id="readPart"
          labelId="readPart-label"
          value={currentPart}
          onChange={handleSelectChange}
          label="Read: "
        >
          <MenuItem value={'ONE'}>Part 1 - Preliminary</MenuItem>
          <MenuItem value={'TWO'}>Part 2 - Citizenship</MenuItem>
          <MenuItem value={'THREE'}>Part 3 - Fundamental Rights and Duties</MenuItem>
          <MenuItem value={'FOUR'}>
            Part 4 - Directive Principles, Policies and Obligations of the State
          </MenuItem>
          <MenuItem value={'FIVE'}>
            Part 5 - Structure of State and Distribution of State Power
          </MenuItem>
          <MenuItem value={'SIX'}>Part 6 - President and Vice-President</MenuItem>
          <MenuItem value={'SEVEN'}>Part 7 - Federal Executive</MenuItem>
          <MenuItem value={'EIGHT'}>Part 8 - Federal Legislature</MenuItem>
          <MenuItem value={'NINE'}>Part 9 - Federal Legislative Procedures</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MySelect;
