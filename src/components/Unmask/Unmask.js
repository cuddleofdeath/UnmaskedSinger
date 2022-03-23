import React from 'react';
import { useQuery, gql } from '@apollo/client';

const SINGERS = gql`
  {
    MaskedSingers {
      id
      maskedname
    }
  }
`;

function Unmask() {
  const { loading, error, data } = useQuery(SINGERS);

  return data.MaskedSingers.map(({ id, maskedname }) => (
    <div key={id}>
      <button className='btn'>Unmask {maskedname}! </button>
    </div>
  ));
}

export default Unmask;
