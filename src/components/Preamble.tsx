import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Preamble = () => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Typography variant="h5" fontWeight={700} textAlign="center" marginBottom={2}>
        The Constitution of Nepal
      </Typography>
      <Typography fontSize={17} textAlign="right">
        Date of Publication in Nepal Gazette
        <br />
        20 September 2015 (2072.6.3)
      </Typography>
      <Typography fontSize={17} sx={{ textDecoration: 'underline', mb: 1 }}>
        Preamble:
      </Typography>
      <Typography fontSize={17}>
        We, the Sovereign People of Nepal, <br />
        <br />
        Internalizing the people's sovereign right and right to autonomy and self-rule, while
        maintaining freedom, sovereignty, territorial integrity, national unity, independence and
        dignity of Nepal, <br />
        <br />
        Recalling the glorious history of historic people's movements, armed conflict, dedication
        and sacrifice undertaken by the Nepalese people at times for the interest of the nation,
        democracy and progressive changes, and respecting for the martyrs and disappeared and victim
        citizens, <br />
        <br />
        Ending all forms of discrimination and oppression created by the feudalistic, autocratic,
        centralized, unitary system of governance,
        <br />
        <br />
        Protecting and promoting social and cultural solidarity, tolerance and harmony, and unity in
        diversity by recognizing the multi-ethnic, multi-lingual, multi-religious, multi-cultural
        and diverse regional characteristics, resolving to build an egalitarian society founded on
        the proportional inclusive and participatory principles in order to ensure economic
        equality, prosperity and social justice, by eliminating discrimination based on class,
        caste, region, language, religion and gender and all forms of caste- based untouchability,
        and <br />
        <br />
        Being committed to socialism based on democratic norms and values including the people's
        competitive multiparty democratic system of governance, civil liberties, fundamental rights,
        human rights, adult franchise, periodic elections, full freedom of the press, and
        independent, impartial and competent judiciary and concept of the rule of law, and build a
        prosperous nation, <br />
        <br />
        Do hereby pass and promulgate this Constitution, through the Constituent Assembly, in order
        to fulfil the aspirations for sustainable peace, good governance, development and prosperity
        through the federal, democratic, republican, system of governance.
      </Typography>
    </Box>
  );
};

export default Preamble;
