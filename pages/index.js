import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

import MyAccordion from '@/src/components/MyAccordion';
import ScheduleOne from '@/src/components/Schedules/ScheduleOne';
import ScheduleTwo from '@/src/components/Schedules/ScheduleTwo';
import ScheduleThree from '@/src/components/Schedules/ScheduleThree';
import ScheduleFour from '@/src/components/Schedules/ScheduleFour';
import ScheduleFive from '@/src/components/Schedules/ScheduleFive';
import ScheduleSix from '@/src/components/Schedules/ScheduleSix';
import ScheduleSeven from '@/src/components/Schedules/ScheduleSeven';
import ScheduleEight from '@/src/components/Schedules/ScheduleEight';
import ScheduleNine from '@/src/components/Schedules/ScheduleNine';
import Preamble from '@/src/components/Preamble';

import DevNote from '@/src/DevNote';

import MySelect from '@/src/components/MySelect';

import constitutionData from '../constitutionData.json';

import Fuse from 'fuse.js';

const Index = () => {
  const [currentPart, setCurrentPart] = useState('Preamble');

  const [searchText, setSearchText] = useState('');

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = constitutionData.filter((element) =>
      element.articleTitle.includes(searchText),
    );
    setFilteredData(filtered);
  }, [searchText]);

  console.log(currentPart);

  const RenderInfo = () => {
    if (currentPart === 'Preamble') return <Preamble />;
    else if (currentPart === 'Schedule1') return <ScheduleOne />;
    else if (currentPart === 'Schedule2') return <ScheduleTwo />;
    else if (currentPart === 'Schedule3') return <ScheduleThree />;
    else if (currentPart === 'Schedule4') return <ScheduleFour />;
    else if (currentPart === 'Schedule5') return <ScheduleFive />;
    else if (currentPart === 'Schedule6') return <ScheduleSix />;
    else if (currentPart === 'Schedule7') return <ScheduleSeven />;
    else if (currentPart === 'Schedule8') return <ScheduleEight />;
    else if (currentPart === 'Schedule9') return <ScheduleNine />;
    else return <MyAccordion currentPart={currentPart} filteredData={filteredData} />;
    // else return <MyAccordion currentPart={currentPart} filteredData={filteredData} />;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        background: '#242424',
        color: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography variant="h3" component="h3" sx={{ my: 4 }}>
          Constitution of Nepal
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '.5rem', sm: '12rem' },
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <TextField
            id="input-with-icon-textfield"
            autoFocus
            fullWidth
            label="Search for keywords"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ marginBottom: '2rem', justifySelf: 'flex-start', flex: 0.4 }}
          />
          <MySelect
            currentPart={currentPart}
            setCurrentPart={setCurrentPart}
            setSearchText={setSearchText}
          />
        </Box>
        <RenderInfo />
        <DevNote />
      </Box>
    </Container>
  );
};

export default Index;
