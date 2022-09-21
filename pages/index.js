import { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProTip from '@/src/ProTip';
import Link from '@/src/Link';
import MyAccordion from '@/src/components/MyAccordion';
import Copyright from '@/src/Copyright';

import MySelect from '@/src/components/MySelect';

const Index = () => {
  const [currentPart, setCurrentPart] = useState('ONE');

  return (
    <Container
      maxWidth="lg"
      sx={{
        background: '#f0f0f0',
        textAlign: 'center',
        boxShadow: '0 0 20px 8px #d0d0d0',
      }}
    >
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Constitution of Nepal
        </Typography>
        <MySelect currentPart={currentPart} setCurrentPart={setCurrentPart} />
        <MyAccordion currentPart={currentPart} />
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        {/* <ProTip /> */}
        <Copyright />
      </Box>
    </Container>
  );
};

export default Index;
