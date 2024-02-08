import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ScheduleTwo = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Schedule-2 <br /> (Relating to clause (1) of Article 9) <br />{' '}
        <Typography variant="h5" sx={{ textDecoration: 'underline' }}>
          National Anthem of Nepal
        </Typography>
      </Typography>
      <Typography variant="h6" sx={{ fontStyle: 'italic', my: 2 }}>
        Sayaun Thunga Phool Ka Hami Eutai Mala Nepali <br />
        Sarvavhaum Vai Failiyeka Mechi Mahakali <br />
        Prakitika Koti Koti Sampada Ko Aanchala <br />
        Bir Haruka Ragata Le Swatantra Ra Atala <br />
        Gyana Bhumi Shanti Bhumi Terai Pahad Himala <br />
        Akhanda Yo Pyaro Hamro Matri Bhumi Nepal <br />
        Bahul Jati Bhasa Dharma Sanskriti Chan Bishala <br />
        Agragami Rastra Hamro Jaya Jaya Nepal.
      </Typography>
    </Box>
  );
};

export default ScheduleTwo;
