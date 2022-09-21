import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NoSubClauses = ({ clause }) => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Typography sx={{ my: 1 }}>
        {clause.clauseNumber} {')'} {clause.clause}
      </Typography>
      {clause.extraInfo ? <Typography sx={{ my: 1, mx: 4 }}>{clause.extraInfo}</Typography> : null}
      {clause.explanation ? (
        <Typography sx={{ display: 'flex', gap: 1, my: 1, mx: 3 }}>
          <Typography sx={{ textDecoration: 'underline' }}>Explanation: </Typography>
          {clause.explanation}
        </Typography>
      ) : null}
    </Box>
  );
};

export default NoSubClauses;
