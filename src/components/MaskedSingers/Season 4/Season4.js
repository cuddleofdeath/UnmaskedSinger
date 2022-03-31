import * as React from 'react';

import { useQuery } from '@apollo/client';
import { SINGERS_4 } from '../../Fragments/Fragments';
import '../Season 7/Season7.scss';
import S4card from './S4card';

export default function Season4() {
  const { loading, error, data } = useQuery(SINGERS_4);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>Error 😑</p>;

  return (
    <div className='wrapper'>
      <S4card />
    </div>
  );
}
