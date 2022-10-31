import { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MyAccordion from '@/src/components/MyAccordion';
import Copyright from '@/src/Copyright';

import MySelect from '@/src/components/MySelect';

const Index = () => {
  const [currentPart, setCurrentPart] = useState('PartOne');

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
        <MyAccordion currentPart={currentPart} />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Index;
