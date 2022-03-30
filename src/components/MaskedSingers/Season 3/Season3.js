import * as React from 'react';
import { styled, makeStyles } from '@mui/material/legacy/styles';

import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Collapse,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
  Grid,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { useQuery } from '@apollo/client';
import {
  SINGERS,
  SINGERS_1,
  SINGERS_2,
  SINGERS_3,
  SINGERS_4,
  SINGERS_5,
  SINGERS_6,
} from '../../Fragments/Fragments';
import { singersList, seasonList } from '../../PickSeason/PickSeason';
import { Expand } from '@mui/icons-material';
import UnmaskButton from '../../UnmaskButton/UnmaskButton';
import Collapsible from 'react-collapsible';

const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Season3() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (itemID) => {
    setExpanded(!expanded(itemID));
  };

  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}} >
`;

  const { loading, error, data } = useQuery(SINGERS_3);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>Error 😑</p>;

  return data.MaskedSingers.map(
    ({
      contestant,
      datevotedoff,
      id,
      maskedimageurl,
      maskedname,
      occupation,
      season,
      unmaskedimageurl,
      winner,
    }) => (
      <Grid
        sx={{
          flexGrow: 1,
          m: 2,
        }}
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container justifyContent='center' spacing={spacing}>
            {[0].map((value) => (
              <Grid key={value} item>
                <CardMedia
                  component='img'
                  image={maskedimageurl}
                  width='200px'
                  alt={maskedname}
                  sx={{
                    height: 240,
                    maxWidth: 200,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light' ? '#1A2027' : '#000',
                  }}
                />
                {/* <CardContent>
                  <CardMedia
                    component='img'
                    image={maskedimageurl}
                    width='200px'
                    alt={maskedname}
                  /> */}

                <Typography variant='h5' component='div'>
                  {maskedname}
                </Typography>

                <Typography variant='body2'>
                  Who could {maskedname} be?
                  <br />
                  Click Unmask to reveal!
                </Typography>

                <CardActions disableSpacing>
                  <Collapsible trigger={<UnmaskButton />}>
                    <CardContent>
                      <CardMedia
                        component='img'
                        image={unmaskedimageurl}
                        width='200px'
                        height='230'
                        alt={maskedname}
                      />
                      <Typography paragraph>Name(s): {contestant}</Typography>

                      <Typography paragraph className='unmaskedcontent'>
                        Occupation(s): {occupation}
                      </Typography>
                      <Typography paragraph className='unmaskedcontent'>
                        Date Voted Off: {datevotedoff}
                      </Typography>
                      <Typography paragraph className='unmaskedcontent'>
                        Season {season} Winner?: {winner}
                      </Typography>
                    </CardContent>
                  </Collapsible>
                </CardActions>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  );
}
