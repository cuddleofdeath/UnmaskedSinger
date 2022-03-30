import { useQuery, gql } from '@apollo/client';

import {
  SINGERS_1,
  SINGERS_2,
  SINGERS_3,
  SINGERS_4,
  SINGERS_5,
  SINGERS_6,
  SINGERS_7,
  SINGERS,
} from '../Fragments/Fragments';

export const singersList = [
  { 0: SINGERS },
  { 1: SINGERS_1 },
  { 2: SINGERS_2 },
  { 3: SINGERS_3 },
  { 4: SINGERS_4 },
  { 5: SINGERS_5 },
  { 6: SINGERS_6 },
  { 7: SINGERS_7 },
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
