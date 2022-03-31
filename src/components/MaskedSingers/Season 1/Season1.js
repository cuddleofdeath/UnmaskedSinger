import * as React from 'react';
import { useQuery } from '@apollo/client';
import { SINGERS_1 } from '../../Fragments/Fragments';
import '../Season 7/Season7.scss';
import S1card from './S1card';

export default function Season1() {
  const { loading, error, data } = useQuery(SINGERS_1);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>Error 😑</p>;

  return (
    <div className='wrapper'>
      <S1card />
    </div>
  );
}
