import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ScheduleFour = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Schedule-4 <br /> (Relating to clause (3) of Article 56) <br />{' '}
        <Typography variant="h5" sx={{ textDecoration: 'underline', mb: 4 }}>
          States, and Districts to be included in the concerned States
        </Typography>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, backgroundColor: '#2f2f2f' }}>
          <TableHead sx={{ textAlign: 'center' }}>
            <TableRow>
              <TableCell sx={{ fontSize: '1.2rem' }}>State No. 1</TableCell>
              <TableCell sx={{ fontSize: '1.2rem' }}>State No. 2</TableCell>
              <TableCell sx={{ fontSize: '1.2rem' }}>State No. 3</TableCell>
              <TableCell sx={{ fontSize: '1.2rem' }}>State No. 4</TableCell>
              <TableCell sx={{ fontSize: '1.2rem' }}>State No. 5</TableCell>
              <TableCell sx={{ fontSize: '1.2rem' }}>State No. 6</TableCell>
              <TableCell sx={{ fontSize: '1.2rem' }}>State No. 7</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1. Taplejung</TableCell>
              <TableCell>1. Saptari</TableCell>
              <TableCell>1. Dolakha</TableCell>
              <TableCell>1. Gorkha</TableCell>
              <TableCell>
                1. Nawalparasi (West <br />
                of Bardaghat Susta)
              </TableCell>
              <TableCell>
                1. Rukum (<br />
                Western Part)
              </TableCell>
              <TableCell>1. Bajura</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2. Panchthar</TableCell>
              <TableCell>2. Siraha</TableCell>
              <TableCell>2. Ramechhap</TableCell>
              <TableCell>2. Lamjung</TableCell>
              <TableCell>2. Rupandehi</TableCell>
              <TableCell>2. Salyan</TableCell>
              <TableCell>2. Bajhang</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3. Ilam</TableCell>
              <TableCell>3. Dhanusa</TableCell>
              <TableCell>3. Sindhuli</TableCell>
              <TableCell>3. Tanahun</TableCell>
              <TableCell>3. Kapilbastu</TableCell>
              <TableCell>3. Dolpa</TableCell>
              <TableCell>3. Doti</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4. Sankhuwasabha</TableCell>
              <TableCell>4. Mahottari</TableCell>
              <TableCell>4. Kavrepalanchok</TableCell>
              <TableCell>4. Kaski</TableCell>
              <TableCell>4. Palpa</TableCell>
              <TableCell>4. Jumla</TableCell>
              <TableCell>4. Achham</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5. Tehrathum</TableCell>
              <TableCell>5. Sarlahi</TableCell>
              <TableCell>5. Sindhupalchok</TableCell>
              <TableCell>5. Manang</TableCell>
              <TableCell>5. Arghakhanchi</TableCell>
              <TableCell>5. Mugu</TableCell>
              <TableCell>5. Darchula</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6. Dhankuta</TableCell>
              <TableCell>6. Rautahat</TableCell>
              <TableCell>6. Rasuwa</TableCell>
              <TableCell>6. Mustang</TableCell>
              <TableCell>6. Gulmi</TableCell>
              <TableCell>6. Humla</TableCell>
              <TableCell>6. Baitadi</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7. Bhojpur</TableCell>
              <TableCell>7. Bara</TableCell>
              <TableCell>7. Nuwakot</TableCell>
              <TableCell>7. Parbat</TableCell>
              <TableCell>
                7. Rukum (<br />
                Eastern Part)
              </TableCell>
              <TableCell>7. Kalikot</TableCell>
              <TableCell>7. Dadeldhura</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8. Khotang</TableCell>
              <TableCell>8. Parsa</TableCell>
              <TableCell>8. Dhading</TableCell>
              <TableCell>8. Syangja</TableCell>
              <TableCell>8. Rolpa</TableCell>
              <TableCell>8. Jajarkot</TableCell>
              <TableCell>8. Kanchanpur</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9. Solukhumbu</TableCell>
              <TableCell></TableCell>
              <TableCell>9. Chitwan</TableCell>
              <TableCell>9. Myagdi</TableCell>
              <TableCell>9. Pyuthan</TableCell>
              <TableCell>9. Dailekh</TableCell>
              <TableCell>9. Kailali</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10. Okhaldhunga</TableCell>
              <TableCell></TableCell>
              <TableCell>10. Makawanpur</TableCell>
              <TableCell>10. Baglung</TableCell>
              <TableCell>10. Daang</TableCell>
              <TableCell>10. Surkhet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>11. Udayapur</TableCell>
              <TableCell></TableCell>
              <TableCell>11. Bhaktapur</TableCell>
              <TableCell>
                11. Nawalparasi (East <br />
                of Bardaghat Susta)
              </TableCell>
              <TableCell>11. Banke</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12. Jhapa</TableCell>
              <TableCell></TableCell>
              <TableCell>12. Lalitpur</TableCell>
              <TableCell></TableCell>
              <TableCell>12. Bardiya</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>13. Morang</TableCell>
              <TableCell></TableCell>
              <TableCell>13. Kathmandu</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>14. Sunsari</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScheduleFour;
