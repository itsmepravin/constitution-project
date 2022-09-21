import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SubClausesWithAddDetails = ({ clause }) => {
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
      {clause.subClauses.map((subClause) => (
        <Box sx={{ mx: 4, textAlign: 'left' }}>
          <Typography>
            Sub-Clause {"'"}
            {subClause.label}
            {"' "}
            {':'}
          </Typography>
          <Typography sx={{ mx: 2 }}>• {subClause.subClause}</Typography>
        </Box>
      ))}
      <Typography align="left" sx={{ my: 1, mx: 4, textDecoration: 'underline' }}>
        {clause.additionalTitle}
      </Typography>
      {clause.additionalDetails.map((details) => (
        <Box sx={{ mx: 8, my: 1, textAlign: 'left' }}>
          <Typography>
            {details.addNumber}
            {')'} {details.addInfo}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SubClausesWithAddDetails;
