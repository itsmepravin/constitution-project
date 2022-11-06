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

const ScheduleEight = () => {
  const scheduleEightData = scheduleData[3].scheduleEight;
  return (
    <Box>
      <Typography variant="h5" textAlign="center">
        Schedule-8 <br /> (Relating to clause (4) of Article 57, clause (2) of Article 214, clause
        (2) of Article 221 and clause (1) of Article 226) <br />{' '}
        <Typography variant="h5" marginBottom={4}>
          List of Local Level Power
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
            {scheduleEightData.map((element) => (
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

export default ScheduleEight;
