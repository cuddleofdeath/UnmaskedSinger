import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './SingerStyles.css';
import Unmask from '../Unmask/Unmask';
import { Accordion, AccordionPanel, Box, Text } from 'grommet';

const SINGERS = gql`
  {
    MaskedSingers {
      contestant
      datevotedoff
      id
      maskedimageurl
      maskedname
      occupation
      season
      unmaskedimageurl
      winner
    }
  }
`;

// function Unmasks() {
//   const { loading, error, data } = useQuery(SINGERS);

//   return (
//     <div key={id}>
//       <button className='btn'>Unmask {maskedname} </button>
//     </div>
//   );
// }

export default function MaskedSingers() {
  const { loading, error, data } = useQuery(SINGERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error 😇</p>;

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
      <div key={id} className='monster-box'>
        <p className='attribute'>
          <h2 className='text-gradient text-glow bigbold'>Creature</h2>
          <h3 className='attribute'> {maskedname} </h3>
        </p>

        <p className='attribute'>
          <img src={maskedimageurl} alt='img' className='pic'></img>
        </p>
        <p className='attribute'>Debut Season: {season}</p>
        <p className='attribute'>Occupation: {occupation} </p>
        <p className='attribute'>Winner??: {winner} </p>
        <p className='attribute'>Dated Voted Off: {datevotedoff} </p>

        <Accordion>
          <AccordionPanel label='Unmask This Singer!' className='accordion'>
            <Box pad='medium'>
              <Text>{contestant}</Text>
              <p className='attribute'>
                <img src={unmaskedimageurl} alt='img' className='pic'></img>
              </p>
            </Box>
          </AccordionPanel>
        </Accordion>
        {/* <button className='btn'>Unmask {maskedname}! </button> */}
      </div>
    )
  );
}
