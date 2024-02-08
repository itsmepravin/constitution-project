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

const ScheduleFive = () => {
  const scheduleFiveData = scheduleData[0].scheduleFive;
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Schedule-5 <br /> (Relating to clause (1) of Article 57, and Article 109) <br />{' '}
        <Typography variant="h5" sx={{ mb: 4 }}>
          List of Federal Power
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
            {scheduleFiveData.map((element) => (
              <TableRow>
                <TableCell>{element.number}</TableCell>
                {element.subMatter ? (
                  <TableCell
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      alignItems: 'center',
                      border: 'none',
                      borderRight: '1px solid white',
                    }}
                  >
                    <TableRow>{element.matterDescription}</TableRow>
                    {element.subMatter.map((data) => (
                      <TableRow>
                        <TableCell>
                          {data.subMatterLabel} {data.subMatterDescription}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableCell>
                ) : (
                  <TableCell>{element.matterDescription}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScheduleFive;
