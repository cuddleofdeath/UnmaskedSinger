import React from 'react';
import { useQuery } from '@apollo/client';
import { SINGERS_4 } from '../../Fragments/Fragments';
import { Typography } from 'antd';

import Collapsible from 'react-collapsible';

export default function S4card() {
  const { loading, error, data } = useQuery(SINGERS_4);

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
      <div className='card'>
        <div className='card__body'>
          <img src={maskedimageurl} alt='' className='card__image' />
          <h2 className='card__title'>{maskedname}</h2>
          <p className='card__description'>Who do you think {maskedname} is?</p>
        </div>
        <Collapsible
          trigger={<button className='card__btn'>Unmask this singer</button>}
        >
          <h2 className='card__title'>{contestant}</h2>
          <img src={unmaskedimageurl} alt='' className='card__image' />

          <Typography className='card__description'>
            Occupation: {occupation}
          </Typography>
          <Typography className='card__description'>
            Date Voted Off: {datevotedoff}
          </Typography>
          <Typography className='card__description'>
            Season {season} Winner?: {winner}
          </Typography>
        </Collapsible>
      </div>
    )
  );
}
