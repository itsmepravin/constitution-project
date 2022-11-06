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

const ScheduleSix = () => {
  const scheduleSixData = scheduleData[1].scheduleSix;
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Schedule-6 <br /> (Relating to clause (2) of Article 57, clause (4) of Article 162,
        <br />
        Article 197, clause (3) of Article 231, clause <br />
        (7) of Article 232, clause (4) of Article 274 and clause (4) of Article 296) <br />{' '}
        <Typography variant="h5" sx={{ mb: 4 }}>
          List of State Power
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
            {scheduleSixData.map((element) => (
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

export default ScheduleSix;
