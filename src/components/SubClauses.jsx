import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SubClauses = ({ clause }) => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Typography sx={{ my: 1 }}>
        {clause.clauseNumber} {')'} {clause.clause}
      </Typography>

      {clause.extraInfo ? <Typography sx={{ my: 1, mx: 4 }}>{clause.extraInfo}</Typography> : null}

      {clause.subClauses.map((subClause) => (
        <Box sx={{ mx: 4, textAlign: 'left' }}>
          <Typography>
            Sub-Clause {"'"}
            {subClause.label}
            {"' "}
            {':'}
          </Typography>
          <Typography sx={{ mx: 2 }}>• {subClause.subClause}</Typography>
          {subClause.extraInfo ? (
            <Typography sx={{ my: 1, mx: 4 }}>{subClause.extraInfo}</Typography>
          ) : null}
        </Box>
      ))}

      {clause.explanation ? (
        <Typography sx={{ display: 'flex', gap: 1, my: 1, mx: 3 }}>
          <Typography sx={{ textDecoration: 'underline' }}>Explanation: </Typography>
          {clause.explanation}
        </Typography>
      ) : null}
    </Box>
  );
};

export default SubClauses;
