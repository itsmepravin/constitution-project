import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { articlesArray } from '../../articles';
import Clauses from './Clauses';
import Articles from './Articles';

export default function MyAccordion({ currentPart }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const newArticles = articlesArray.filter((element) => element.part === currentPart);
    setArticles(newArticles);
  }, [currentPart]);

  return (
    <Box>
      {articles.map((article) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Article {article.articleNumber} - {article.articleTitle}
            </Typography>
          </AccordionSummary>

          <Box sx={{ mx: 2, mt: -1, textAlign: 'left' }}>
            {article.totalClauses === null ? (
              <AccordionDetails>
                <Articles article={article} />
              </AccordionDetails>
            ) : (
              <AccordionDetails>
                <Typography align="left">Clauses :</Typography>
                <Clauses allClauses={article.clauseDetails} />
              </AccordionDetails>
            )}
          </Box>
        </Accordion>
      ))}
    </Box>
  );
}
