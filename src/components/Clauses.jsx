import Box from '@mui/material/Box';

import NoSubClauses from './NoSubClauses';
import SubClausesWithAddDetails from './SubClausesWithAddDetails';
import SubClauses from './SubClauses';

const Clauses = ({ allClauses }) => {
  return (
    <Box>
      {allClauses.map((clause) =>
        !clause.subClauses ? (
          <NoSubClauses clause={clause} />
        ) : clause.additionalDetails ? (
          <SubClausesWithAddDetails clause={clause} />
        ) : (
          <SubClauses clause={clause} />
        ),
      )}
    </Box>
  );
};

export default Clauses;
