import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const MySelect = ({ currentPart, setCurrentPart }) => {
  const handleSelectChange = (event) => setCurrentPart(event.target.value);

  return (
    <Box sx={{ fontFamily: 'Arima Madurai, cursive' }}>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="readPart-label">Read: </InputLabel>
        <Select
          id="readPart"
          labelId="readPart-label"
          value={currentPart}
          onChange={handleSelectChange}
          label="Read: "
        >
          <MenuItem value={'PartOne'}>Part 1 Preliminary (A1-A9)</MenuItem>
          <MenuItem value={'PartTwo'}>Part 2 Citizenship (A10-A15)</MenuItem>
          <MenuItem value={'PartThree'}>Part 3 Fundamental Rights and Duties (A16-A48)</MenuItem>
          <MenuItem value={'PartFour'}>
            Part 4 Directive Principles, Policies and Obligations of the State (A49-A55)
          </MenuItem>
          <MenuItem value={'PartFive'}>
            Part 5 Structure of State and Distribution of State Power (A56-A60)
          </MenuItem>
          <MenuItem value={'PartSix'}>Part 6 President and Vice-President (A61-A73)</MenuItem>
          <MenuItem value={'PartSeven'}>Part 7 Federal Executive (A74-A82)</MenuItem>
          <MenuItem value={'PartEight'}>Part 8 Federal Legislature (A83-A108)</MenuItem>
          <MenuItem value={'PartNine'}>Part 9 Federal Legislative Procedures (A109-A114)</MenuItem>
          <MenuItem value={'PartTen'}>Part 10 Federal Financial Procedures (A115-A125)</MenuItem>
          <MenuItem value={'PartEleven'}>Part 11 Judiciary (A126-A156)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MySelect;
