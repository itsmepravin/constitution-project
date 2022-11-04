import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const MySelect = ({ currentPart, setCurrentPart }) => {
  const handleSelectChange = (event) => setCurrentPart(event.target.value);

  return (
    <Box>
      <FormControl sx={{ mb: 4, maxWidth: 350 }}>
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
          <MenuItem value={'PartTwelve'}>Part 12 Attorney General (A157-A161)</MenuItem>
          <MenuItem value={'PartThirteen'}>Part 13 State Executive (A162-A174)</MenuItem>
          <MenuItem value={'PartFourteen'}>Part 14 State Legislature (A175-A196)</MenuItem>
          <MenuItem value={'PartFifteen'}>
            Part 15 State Legislative Procedures (A197-A202)
          </MenuItem>
          <MenuItem value={'PartSixteen'}>Part 16 State Financial Procedures (A203-A213)</MenuItem>
          <MenuItem value={'PartSeventeen'}>Part 17 Local Executive (A214-A220)</MenuItem>
          <MenuItem value={'PartEighteen'}>Part 18 Local Legislature (A221-A227)</MenuItem>
          <MenuItem value={'PartNineteen'}>Part 19 Local Financial Procedures (A228-A230)</MenuItem>
          <MenuItem value={'PartTwenty'}>
            Part 20 Interrelations between Federation, State and Local Level (A231-A237)
          </MenuItem>
          <MenuItem value={'PartTwentyOne'}>
            Part 21 Commission for the Investigation of Abuse of Authority (A238-A239)
          </MenuItem>
          <MenuItem value={'PartTwentyTwo'}>Part 22 Auditor General (A240-A241)</MenuItem>
          <MenuItem value={'PartTwentyThree'}>
            Part 23 Public Service Commission (A242-A244)
          </MenuItem>
          <MenuItem value={'PartTwentyFour'}>Part 24 Election Commission (A245-A247)</MenuItem>
          <MenuItem value={'PartTwentyFive'}>
            Part 25 National Human Rights Commission (A248-A249)
          </MenuItem>
          <MenuItem value={'PartTwentySix'}>
            Part 26 National Natural Resources and Fiscal Commission (A250-A251)
          </MenuItem>
          <MenuItem value={'PartTwentySeven'}>Part 27 Other Commissions (A252-A265)</MenuItem>
          <MenuItem value={'PartTwentyEight'}>
            Part 28 Provisions Relating to National Security (A266-A268)
          </MenuItem>
          <MenuItem value={'PartTwentyNine'}>
            Part 29 Provisions Relating to Political Parties (A269-A272)
          </MenuItem>
          <MenuItem value={'PartThirty'}>Part 30 Emergency Power (A273)</MenuItem>
          <MenuItem value={'PartThirtyOne'}>Part 31 Amendment to the Constitution (A274)</MenuItem>
          <MenuItem value={'PartThirtyTwo'}>Part 32 Miscellaneous (A275-A294)</MenuItem>
          <MenuItem value={'PartThirtyThree'}>Part 33 Transitional Provisions (A276-A305)</MenuItem>
          <MenuItem value={'PartThirtyFour'}>
            Part 34 Definitions and Interpretations (A306)
          </MenuItem>
          <MenuItem value={'PartThirtyFive'}>
            Part 35 Short Title, Commencement and Repeal (A307-A308)
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MySelect;
