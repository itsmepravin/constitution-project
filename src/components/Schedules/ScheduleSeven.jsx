import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import scheduleData from '../../../scheduleData.json';

const ScheduleSeven = () => {
  const scheduleSevenData = scheduleData[2].scheduleSeven;
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Schedule-7 <br /> (Relating to clause (3) of Articles 57, Article 109, clause (4) of Article
        162, and Article 197) <br />{' '}
        <Typography variant="h5" sx={{ mb: 4 }}>
          List of Concurrent Powers of Federation and State
        </Typography>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, backgroundColor: '#2f2f2f' }}>
          <TableHead sx={{ textAlign: 'center' }}>
            <TableRow>
              <TableCell sx={{ fontSize: '1.2rem' }}>SN</TableCell>
              <TableCell sx={{ fontSize: '1.2rem', textDecoration: 'underline' }}>
                Matters
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleSevenData.map((element) => (
              <TableRow>
                <TableCell>{element.number}</TableCell>
                <TableCell>{element.matterDescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScheduleSeven;
