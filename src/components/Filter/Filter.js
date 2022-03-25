// This will be where the filter button is created, allowing users to sort through each season of Masked Singer (USA).
import React, { useState } from 'react';
import { FormClose } from 'grommet-icons';

import { Box, Button, Select, Text } from 'grommet';

const msSeasons = [
  'Season 1',
  'Season 2',
  'Season 3',
  'Season 4',
  'Season 5',
  'Season 6',
  'Season 7',
];

export const Children = () => {
  const [selected, setSelected] = useState([]);

  const onRemoveSeason = (season) => {
    const seasonIndex = msSeasons.indexOf(season);
    setSelected(
      selected.filter((selectedSeason) => selectedSeason !== seasonIndex)
    );
  };
};

const renderSeason = (season) => (
  <Button
    key={`season_tag_${season}`}
    href='#'
    onClick={(event) => {
      event.preventDefault();
      event.stopPropagation();
      onRemoveSeason(season);
    }}
    onFocus={(event) => event.stopPropagation()}
  >
    <Box
      align='center'
      direction='row'
      gap='xsmall'
      pad={{ vertical: 'xsmall', horizontal: 'small' }}
      margin='xsmall'
      background='brand'
      round='large'
    >
      <Text size='small'>{season}</Text>
      <Box round='full' margin={{ left: 'xsmall' }}>
        <FormClose size='small' style={{ width: '12px', height: '12px' }} />
      </Box>
    </Box>
  </Button>
);
