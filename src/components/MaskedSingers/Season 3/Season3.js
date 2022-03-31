import * as React from 'react';
import { useQuery } from '@apollo/client';
import { SINGERS_3 } from '../../Fragments/Fragments';

import '../Season 7/Season7.scss';
import S3card from './S3card';

export default function Season3() {
  const { loading, error, data } = useQuery(SINGERS_3);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>Error 😑</p>;

  return (
    <div className='wrapper'>
      <S3card />
    </div>
  );
}
