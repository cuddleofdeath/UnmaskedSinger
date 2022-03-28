import { useQuery, gql } from '@apollo/client';

import {
  SINGERS_1,
  SINGERS_2,
  SINGERS_3,
  SINGERS,
} from '../Fragments/Fragments';

export const singersList = [
  { 0: SINGERS },
  { 1: SINGERS_1 },
  { 2: SINGERS_2 },
  { 3: SINGERS_3 },
];

export const seasonList = [
  { title: 'Season 1' },
  { title: 'Season 2' },
  { title: 'Season 3' },
  { title: 'Season 4' },
  { title: 'Season 5' },
  { title: 'Season 6' },
  { title: 'Season 7' },
];

// export function chooseSeason() => (
//   const { loading, error, data } = useQuery(SINGERS_1);
// );