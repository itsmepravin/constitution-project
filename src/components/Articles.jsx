import Typography from '@mui/material/Typography';

const Articles = ({ article }) => {
  return (
    <>
      <Typography>{article.articleDetails}</Typography>
      {article.extraInfo ? (
        <Typography sx={{ my: 1, mx: 4 }}>{article.extraInfo}</Typography>
      ) : null}
      {article.explanation ? (
        <Typography sx={{ display: 'flex', gap: 1, my: 1, mx: 3 }}>
          <Typography sx={{ textDecoration: 'underline' }}>Explanation: </Typography>
          {article.explanation}
        </Typography>
      ) : null}
    </>
  );
};

export default Articles;
