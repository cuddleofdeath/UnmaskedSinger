import * as React from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import { styled, makeStyles } from '@mui/material/legacy/styles';
import './NewMaskedSingerStyle.css';
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

export default function BasicCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (itemID) => {
    setExpanded(!expanded(itemID));
  };

  const { loading, error, data } = useQuery(SINGERS);

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
      <div className='cards'>
        <Card className='card'>
          <CardContent>
            <CardMedia
              component='img'
              image={maskedimageurl}
              width='200px'
              alt={maskedname}
              className='cardmedia'
            />

            <Typography variant='h5' component='div'>
              {maskedname}
            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            adjective
          </Typography>f */}
            <Typography variant='body2'>
              Who could {maskedname} be?
              <br />
              Click Unmask to reveal!
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size='small'>Learn More</Button> */}

            {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='unmask this singer'
            > */}
            <Collapsible trigger={<UnmaskButton />}>
              <CardContent>
                <CardMedia
                  component='img'
                  image={unmaskedimageurl}
                  width='150px'
                  height='300vw'
                  alt={maskedname}
                  className='media'
                />
                <Typography paragraph className='unmaskedcontent'>
                  Name(s): {contestant}
                </Typography>
                {/* {contestant} {season} {occupation} {datevotedoff} {winner} */}
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
            {/* </ExpandMore> */}
          </CardActions>
          {/* <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <CardMedia
                component='img'
                image={unmaskedimageurl}
                width='150px'
                height='300vw'
                alt={maskedname}
              />
              <Typography paragraph className='unmaskedcontent'>
                Name(s): {contestant}
              </Typography>
              {/* {contestant} {season} {occupation} {datevotedoff} {winner} */}
          {/* <Typography paragraph className='unmaskedcontent'>
                Occupation(s): {occupation}
              </Typography>
              <Typography paragraph className='unmaskedcontent'>
                Date Voted Off: {datevotedoff}
              </Typography>
              <Typography paragraph className='unmaskedcontent'>
                Season {season} Winner?: {winner}
              </Typography>
            </CardContent>
          </Collapse> */}
        </Card>
      </div>
    )
  );
}

// import React from 'react';
// import { useQuery } from '@apollo/client';
// import {
//   SINGERS,
//   SINGERS_1,
//   SINGERS_2,
//   SINGERS_3,
//   SINGERS_4,
//   SINGERS_5,
//   SINGERS_6,
// } from '../../Fragments/Fragments';
// import { singersList, seasonList } from '../../PickSeason/PickSeason';
// import './SingerStyles.css';
// import {
//   Grommet,
//   Card,
//   CardBody,
//   CardHeader,
//   Text,
//   Accordion,
//   AccordionPanel,
//   Box,
// } from 'grommet';

// export default function NewMaskedSingers() {
// const { loading, error, data } = useQuery(SINGERS_4);

// if (loading) return <p className='loading'>Loading...</p>;
// if (error) return <p className='error'>Error 😑</p>;

// return data.MaskedSingers.map(
//   ({
//     contestant,
//     datevotedoff,
//     id,
//     maskedimageurl,
//     maskedname,
//     occupation,
//     season,
//     unmaskedimageurl,
//     winner,
//   }) => (
//       <div key={id} className='content'>
//         <h4 className='szn'>{season}</h4>
//         <Grommet>
//           <Card
//             margin={{ bottom: 'large' }}
//             background={{ dark: true, color: 'dark-1' }}
//             gap='xxsmall'
//             fill='horizontal'
//             width={{ min: 'medium', max: 'medium', width: '100%' }}
//             height={{ min: 'large', max: 'medium', height: '100%' }}
//             overflow='visible'
//             hoverIndicator={{ opacity: 'strong' }}
//           >
//             <CardBody
//               pad='small'
//               background={{
//                 image: `url(${maskedimageurl})`,
//               }}
//             >
//               <CardHeader
//                 align='center'
//                 direction='row'
//                 flex={false}
//                 justify='center'
//                 gap='medium'
//                 pad='small'
//               >
//                 {maskedname}
//               </CardHeader>
//             </CardBody>
//             <Accordion>
//               <AccordionPanel
//                 label='Unmask This Singer!'
//                 className='accordion'
//                 alignSelf='center'
//               >
//                 <Box pad='large' flex='true'>
//                   <Text>

// <p className='card-text'>Name: {contestant} </p>{' '}
// <p className='card-text'>Season Debut: {season}</p>
// <p className='card-text'>Occupation: {occupation} </p>{' '}
// <p className='card-text'>Date Voted Off: {datevotedoff} </p>
// <p className='card-text'>Winner: {winner} </p>
//                   </Text>
//                   <p className='attribute'>
//                     <img src={unmaskedimageurl} alt='img' className='pic'></img>
//                   </p>
//                 </Box>
//               </AccordionPanel>
//             </Accordion>
//           </Card>
//         </Grommet>
//       </div>
//     )
//   );
// }
