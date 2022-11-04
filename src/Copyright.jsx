import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography
      variant="p"
      component="p"
      color="text.secondary"
      align="center"
      sx={{ my: 2, py: 2, color: '#f9f9f9' }}
    >
      This is a work-in-progress. Remaining information are being added with time.
    </Typography>
  );
}
