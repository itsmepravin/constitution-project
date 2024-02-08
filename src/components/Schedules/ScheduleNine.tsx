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

const ScheduleNine = () => {
  const scheduleNineData = scheduleData[4].scheduleNine;
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Schedule-9 <br /> (Relating to clause (5) of Article 57, Article 109, clause (4) of Article
        162,
        <br />
        Article 197, clause (2) of Article 214, clause (2) of Article 221, and clause (1) of
        <br />
        Article 226) <br />{' '}
        <Typography variant="h5" sx={{ mb: 4, textDecoration: 'underline' }}>
          List of Concurrent Powers of Federation, State and Local Level
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
            {scheduleNineData!.map((element) => (
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

export default ScheduleNine;
