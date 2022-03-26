import { gql } from '@apollo/client';

export const SINGERS = gql`
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

export const SINGERS_1 = gql`
  {
    MaskedSingers(where: { season: { _eq: "1" } }) {
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

export const SINGERS_2 = gql`
  {
    MaskedSingers(where: { season: { _eq: "2" } }) {
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

export const SINGERS_3 = gql`
  {
    MaskedSingers(where: { season: { _eq: "3" } }) {
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
