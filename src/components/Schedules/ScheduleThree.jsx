import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

const ScheduleThree = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Schedule-3 <br /> (Relating to clause (2) of Article 9) <br />{' '}
        <Typography variant="h5" sx={{ textDecoration: 'underline', mb: 4 }}>
          Coat of Arms of Nepal
        </Typography>
        <Image
          src="/images/nepalCoatOfArms.jpg"
          alt="Nepal Coat Of Arms"
          width={200}
          height={195}
        />
      </Typography>
      <Typography variant="h6" sx={{ mx: '4rem' }}>
        <Typography variant="h6" component="span" sx={{ textDecoration: 'underline' }}>
          Note bene:{' '}
        </Typography>
        This Coat of Arms may be made in larger or smaller size as per necessity. The colour
        determined by the Government of Nepal shall be used on it.
      </Typography>
    </Box>
  );
};

export default ScheduleThree;
