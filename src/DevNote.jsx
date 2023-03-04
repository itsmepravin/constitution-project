import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/system';

export default function DevNote() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <InfoIcon sx={{ mb: 0.5, fontSize: '2.2rem' }} />
      <Typography
        variant="p"
        component="span"
        color="text.secondary"
        align="center"
        sx={{ my: 2, py: 2, color: '#f9f9f9' }}
      >
        <Typography component="span" sx={{ textDecoration: 'underline' }}>
          Dev Note:
        </Typography>{' '}
        All the information are in sync with the Constitution. However, you should only use the
        information here as an non-official reference instead of using it as an
        replacement/alternative to the official{' '}
        <a
          style={{ color: '#f2f2f2' }}
          href="https://ag.gov.np/files/Constitution-of-Nepal_2072_Eng_www.moljpa.gov_.npDate-72_11_16.pdf"
        >
          Constitution{' '}
        </a>
        , or when dealing with government officials, local, state and federal authorities.
      </Typography>
    </Box>
  );
}
