import * as React from 'react';
import { useQuery } from '@apollo/client';
import { SINGERS_2 } from '../../Fragments/Fragments';

import '../Season 7/Season7.scss';
import S2card from './S2card';

export default function Season2() {
  const { loading, error, data } = useQuery(SINGERS_2);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>Error 😑</p>;

  return (
    <div className='wrapper'>
      <S2card />
    </div>
  );
}
