import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

const ScheduleOne = () => {
  return (
    <Box sx={{ textAlign: 'left', mx: '2rem', lineHeight: '20px' }}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Schedule-1 <br /> (Relating to clause (2) of Article 8) <br />{' '}
        <Typography variant="h5" sx={{ textDecoration: 'underline' }}>
          National Flag of Nepal
        </Typography>
        <Image src="/images/nepalFlag.png" alt="Flag Of Nepal" width={300} height={360} />
        <Typography variant="h5" sx={{ textDecoration: 'underline' }}>
          The method of making the National Flag of Nepal
        </Typography>
      </Typography>
      <div>
        <Typography variant="h6">
          (a){' '}
          <Typography variant="h6" component="span" sx={{ ml: 1, textDecoration: 'underline' }}>
            Method of making the shape inside the border
          </Typography>
        </Typography>
        <Box sx={{ mx: 6 }}>
          <Typography>
            (1){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              On the lower portion of a crimson cloth draw a line AB of the required length from
              left to right.
            </Typography>
          </Typography>
          <Typography>
            (2){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              From A draw a line AC perpendicular to AB making AC equal to AB plus one third AB.
              From AC mark off D making line AD equal to line AB. Join B and D.
            </Typography>
          </Typography>
          <Typography>
            (3){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              From BD mark off E making BE equal to AB.
            </Typography>
          </Typography>
          <Typography>
            (4){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Touching E draw a line FG, starting from the point F on line AC, parallel to AB to the
              right hand-side. Mark off FG equal to AB.
            </Typography>
          </Typography>
          <Typography>
            (5){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Join C and G.
            </Typography>
          </Typography>
        </Box>
      </div>
      <div>
        <Typography variant="h6">
          (b){' '}
          <Typography variant="h6" component="span" sx={{ ml: 1, textDecoration: 'underline' }}>
            Method of making the moon
          </Typography>
        </Typography>
        <Box sx={{ mx: 6 }}>
          <Typography>
            (6){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              From AB mark off AH making AH equal to one-fourth of line AB and starting from H draw
              a line HI parallel to line AC touching line CG at point I.
            </Typography>
          </Typography>
          <Typography>
            (7){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Bisect CF at J and draw a line JK parallel to AB touching CG at point K.
            </Typography>
          </Typography>
          <Typography>
            (8){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Let L be the point where lines JK and HI cut one another.
            </Typography>
          </Typography>
          <Typography>
            (9){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Join J and G.
            </Typography>
          </Typography>
          <Typography>
            (10){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Let M be the point where line JG and HI cut one another.
            </Typography>
          </Typography>
          <Typography>
            (11){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              With centre M and with a distance shortest from M to BD mark off N on the lower
              portion of line HI.
            </Typography>
          </Typography>
          <Typography>
            (12){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Touching M and starting from O, a point on AC, draw a line from left to right parallel
              to AB.
            </Typography>
          </Typography>
          <Typography>
            (13){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              With centre L and radius LN draw a semi-circle on the lower portion and let P and Q be
              the points where it touches the line OM respectively.
            </Typography>
          </Typography>
          <Typography>
            (14){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              With centre M and radius MQ draw a semi-circle on the lower portion touching P and Q.
            </Typography>
          </Typography>
          <Typography>
            (15){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              With centre N and radius NM draw an arc touching PNQ at R and S. Join RS. Let T be the
              point where RS and HI cut one another.
            </Typography>
          </Typography>
          <Typography>
            (16){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              With centre T and radius TS draw a semi-circle on the upper portion of PNQ touching it
              at two points.
            </Typography>
          </Typography>
          <Typography>
            (17){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              With centre T and radius TM draw an arc on the upper portion of PNQ touching at two
              points.
            </Typography>
          </Typography>
          <Typography>
            (18){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Eight equal and similar triangles of the moon are to be made in the space lying inside
              the semi-circle of No. (16) and outside the arc of No. (17) of this Schedule.
            </Typography>
          </Typography>
        </Box>
      </div>
      <div>
        <Typography variant="h6">
          (c){' '}
          <Typography variant="h6" component="span" sx={{ ml: 1, textDecoration: 'underline' }}>
            Method of making the sun
          </Typography>
        </Typography>
        <Box sx={{ mx: 6 }}>
          <Typography>
            (19){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Bisect line AF at U, and draw a line UV parallel to AB line touching line BE at V.
            </Typography>
          </Typography>
          <Typography>
            (20){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              With centre W, the point where HI and UV cut one another and radius MN draw a circle.
            </Typography>
          </Typography>
          <Typography>
            (21){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              With centre W and radius LN draw a circle.
            </Typography>
          </Typography>
          <Typography>
            (22){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              Twelve equal and similar triangles of the sun are to be made in the space enclosed by
              the circles of No. (20) and of No. (21) with the two apexes of two triangles touching
              line HI.
            </Typography>
          </Typography>
        </Box>
      </div>
      <div>
        <Typography variant="h6">
          (d){' '}
          <Typography variant="h6" component="span" sx={{ ml: 1, textDecoration: 'underline' }}>
            Method of making the border
          </Typography>
        </Typography>
        <Box sx={{ mx: 6 }}>
          <Typography>
            (23){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              The width of the border will be equal to the width TN. This will be of deep blue
              colour and will be provided on all the side of the flag. However, on the five angles
              of the flag the external angles will be equal to the internal angles.
            </Typography>
          </Typography>
          <Typography>
            (24){' '}
            <Typography component="span" sx={{ ml: 1 }}>
              The above mentioned border will be provided if the flag is to be used with a rope. On
              the other hand, if it is to be hoisted on a pole, the hole on the border on the side
              AC can be extended according to requirements.
            </Typography>
          </Typography>
          <Typography>
            <Typography component="span" sx={{ textDecoration: 'underline' }}>
              Explanation:{' '}
            </Typography>
            The lines HI, RS, FE, ED, JG, OQ, JK and UV are imaginary. Similarly, the external and
            internal circles of the sun and the other arcs except the crescent moon are also
            imaginary. These are not shown on the flag.
          </Typography>
        </Box>
      </div>
      <Typography variant="h6">
        <Typography variant="h6" component="span" sx={{ textDecoration: 'underline' }}>
          Note bene:{' '}
        </Typography>
        The size of the National Flag of Nepal shall be as determined by the Government of Nepal.
      </Typography>
    </Box>
  );
};

export default ScheduleOne;
