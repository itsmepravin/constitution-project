import { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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

const Index = () => {
  const [currentPart, setCurrentPart] = useState('Preamble');

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
    else return <MyAccordion currentPart={currentPart} />;
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
        <MySelect currentPart={currentPart} setCurrentPart={setCurrentPart} />
        <RenderInfo />
        <DevNote />
      </Box>
    </Container>
  );
};

export default Index;
