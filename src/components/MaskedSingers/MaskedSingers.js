import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './SingerStyles.css';
import Unmask from '../Unmask/Unmask';
import {
  Grommet,
  Card,
  CardBody,
  CardHeader,
  Text,
  Accordion,
  AccordionPanel,
  Box,
} from 'grommet';

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
  if (error) return <p>Error 😑</p>;

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
      <div key={id} className='content'>
        <Grommet>
          <Card
            margin={{ bottom: 'large' }}
            background={{ dark: true, color: 'dark-1' }}
            gap='xxsmall'
            fill='horizontal'
            width={{ min: 'medium', max: 'medium', width: '100%' }}
            height={{ min: 'large', max: 'medium', height: '100%' }}
            overflow='visible'
            hoverIndicator={{ opacity: 'strong' }}
          >
            <CardBody
              pad='small'
              background={{
                image: `url(${maskedimageurl})`,
              }}
            >
              <CardHeader
                align='center'
                direction='row'
                flex={false}
                justify='center'
                gap='medium'
                pad='small'
              >
                {maskedname}
              </CardHeader>
            </CardBody>
            <Accordion>
              <AccordionPanel
                label='Unmask This Singer!'
                className='accordion'
                alignSelf='center'
              >
                <Box pad='large' flex='true'>
                  <Text>{contestant}</Text>
                  <p className='attribute'>
                    <img src={unmaskedimageurl} alt='img' className='pic'></img>
                  </p>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Card>
        </Grommet>

        {/* <p className='attribute'>
          <h2 className='text-gradient text-glow bigbold'>Creature</h2>
          <h3 className='attribute'> {maskedname} </h3>
        </p>

        <p className='attribute'>
          <img src={maskedimageurl} alt='img' className='pic'></img>
        </p>
        <p className='attribute'>Debut Season: {season}</p>
        <p className='attribute'>Occupation: {occupation} </p>
        <p className='attribute'>Winner??: {winner} </p>
        <p className='attribute'>Dated Voted Off: {datevotedoff} </p> */}

        {/* <Accordion>
          <AccordionPanel
            label='Unmask This Singer!'
            className='accordion'
            alignSelf='center'
          >
            <Box pad='large' flex='true'>
              <Text>{contestant}</Text>
              <p className='attribute'>
                <img src={unmaskedimageurl} alt='img' className='pic'></img>
              </p>
            </Box>
          </AccordionPanel>
        </Accordion> */}

        {/* <button className='btn'>Unmask {maskedname}! </button> */}
      </div>
    )
  );
}
