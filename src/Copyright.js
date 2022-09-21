import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 2, py: 2 }}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://pravin-singh.netlify.app/">
        Pravin Singh
      </MuiLink>{' '}
      {new Date().getFullYear()}.{'(The website, not the information)'}
    </Typography>
  );
}
