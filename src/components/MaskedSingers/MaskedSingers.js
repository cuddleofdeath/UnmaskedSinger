import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './SingerStyles.css';

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
        <p className='attribute'>Unmasked: {contestant} </p>
        <p className='attribute'>Winner??: {winner} </p>
        <p className='attribute'>Dated Voted Off: {datevotedoff} </p>
        <p className='attribute'>Who is that?:</p>
        <p className='attribute'>
          <img src={unmaskedimageurl} alt='img' className='pic'></img>
        </p>
      </div>
    )
  );
}
