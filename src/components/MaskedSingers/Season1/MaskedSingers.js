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

// export default function MaskedSingers() {
//   const { loading, error, data } = useQuery(SINGERS_1);

//   if (loading) return <p className='loading'>Loading...</p>;
//   if (error) return <p className='error'>Error 😑</p>;

//   return data.MaskedSingers.map(
//     ({
//       contestant,
//       datevotedoff,
//       id,
//       maskedimageurl,
//       maskedname,
//       occupation,
//       season,
//       unmaskedimageurl,
//       winner,
//     }) => (
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
//                     <p className='card-text'>Name: {contestant} </p>{' '}
//                     <p className='card-text'>Season Debut: {season}</p>
//                     <p className='card-text'>Occupation: {occupation} </p>{' '}
//                     <p className='card-text'>Date Voted Off: {datevotedoff} </p>
//                     <p className='card-text'>Winner: {winner} </p>
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
