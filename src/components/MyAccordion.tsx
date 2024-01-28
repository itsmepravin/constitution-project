import { useState, useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import constitutionData from '../../constitutionData.json';

type MyAccordion = {
  currentPart: string;
  filteredData: any;
};

type TSubClauses = {
  subClauseLabel: string;
  subClauseDescription: string;
  subClauseExtraInfo: string;
};

type TClauses = {
  clauseNumber: number;
  clauseDescription: string;
  clauseExplanation: string;
  clauseExtraInfo: string;
  subClauses: TSubClauses[];
};

type TConstitution = {
  part: string;
  articleNumber: number;
  articleTitle: string;
  articleDescription: string;
  articleExtraInfo: string;
  articleExplanation: string;
  clauses: TClauses[];
};

export default function MyAccordion({ currentPart, filteredData }: MyAccordion) {
  const [constitution, setConstitution] = useState<TConstitution[] | []>([]);

  useEffect(() => {
    const newConstitution = constitutionData.filter((element) => element.part === currentPart);
    if (filteredData.length === 0) setConstitution(newConstitution);
    else setConstitution(filteredData);
  }, [currentPart]);

  // const constitutionInfo = filteredData.length !== 0 ? filteredData : constitution;

  return (
    <Box>
      {constitution?.map((element) => (
        <Accordion key={element.articleNumber}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Article {element.articleNumber} - {element.articleTitle}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ mx: 2, mt: -1, textAlign: 'left' }}>
            {element.articleDescription ? (
              <Typography sx={{ textAlign: 'left', mb: 2 }}>
                {element.articleDescription}
              </Typography>
            ) : null}

            {element.articleExtraInfo ? (
              <Typography sx={{ textAlign: 'left', mx: 4, my: 1 }}>
                {element.articleExtraInfo}
              </Typography>
            ) : null}

            {element.articleExplanation ? (
              <Typography sx={{ textAlign: 'left' }}>
                <Typography component="span" sx={{ textDecoration: 'underline' }}>
                  Explanation:
                </Typography>{' '}
                {element.articleExplanation}
              </Typography>
            ) : null}

            {element.clauses ? (
              // Multiple Clauses
              <>
                <Typography align="left">Clauses :</Typography>
                {element.clauses.map((clause) =>
                  clause.subClauses ? (
                    // Multiple SubClauses
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography sx={{ my: 1 }}>
                        {clause.clauseNumber} {')'} {clause.clauseDescription}
                      </Typography>

                      {clause.subClauses.map((subClause) => (
                        <Box sx={{ textAlign: 'left', mx: 4, my: 2 }}>
                          <Typography component="span">
                            Sub-Clause {"'"}
                            {subClause.subClauseLabel}
                            {"' "}
                            {':'}
                            <Typography component="span" sx={{ mx: 1 }}>
                              {subClause.subClauseDescription}
                            </Typography>
                          </Typography>
                          {subClause.subClauseExtraInfo ? (
                            <Typography sx={{ mt: 1, mx: 2 }}>
                              {subClause.subClauseExtraInfo}
                            </Typography>
                          ) : null}
                        </Box>
                      ))}

                      {clause.clauseExtraInfo ? (
                        Array.isArray(clause.clauseExtraInfo) ? (
                          <>
                            <Typography sx={{ textDecoration: 'underline', mx: 4 }}>
                              Provided that:
                            </Typography>
                            {clause.clauseExtraInfo.map((extra) => (
                              <Box sx={{ mx: 8, my: 1, textAlign: 'left' }}>
                                <Typography>
                                  {extra.extraNumber}
                                  {')'} {extra.extraDescription}
                                </Typography>
                              </Box>
                            ))}
                          </>
                        ) : (
                          <Typography sx={{ my: 1, mx: 2 }}>{clause.clauseExtraInfo}</Typography>
                        )
                      ) : null}

                      {clause.clauseExplanation ? (
                        <Typography sx={{ my: 1 }}>
                          <Typography component="span" sx={{ textDecoration: 'underline' }}>
                            Explanation:
                          </Typography>{' '}
                          {clause.clauseExplanation}
                        </Typography>
                      ) : null}
                    </Box>
                  ) : (
                    // No SubClauses
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography sx={{ my: 1 }}>
                        {clause.clauseNumber} {')'} {clause.clauseDescription}
                        {clause.clauseExtraInfo ? (
                          Array.isArray(clause.clauseExtraInfo) ? (
                            <>
                              <Typography sx={{ textDecoration: 'underline', mx: 4 }}>
                                Provided that:
                              </Typography>
                              {clause.clauseExtraInfo.map((extra) => (
                                <Box sx={{ mx: 8, my: 1, textAlign: 'left' }}>
                                  <Typography>
                                    Sub-Clause {extra.extraNumber}
                                    {')'} {extra.extraDescription}
                                  </Typography>
                                </Box>
                              ))}
                            </>
                          ) : (
                            <Typography sx={{ my: 1, mx: 2 }}>{clause.clauseExtraInfo}</Typography>
                          )
                        ) : null}
                        {clause.clauseExplanation ? (
                          <Typography sx={{ my: 1, mx: 4 }}>
                            <Typography component="span" sx={{ textDecoration: 'underline' }}>
                              Explanation:
                            </Typography>{' '}
                            {clause.clauseExplanation}
                          </Typography>
                        ) : null}
                      </Typography>
                    </Box>
                  ),
                )}
              </>
            ) : null}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
