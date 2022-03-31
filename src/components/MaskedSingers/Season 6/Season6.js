import * as React from 'react';
import { styled, makeStyles } from '@mui/material/legacy/styles';

import {
  Box,
  CardHeader,
  CardMedia,
  Collapse,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Grid,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { Card, CardGroup, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { SINGERS_6 } from '../../Fragments/Fragments';

import '../Season 7/Season7.scss';
import S6card from './S6card';

export default function Season6() {
  const { loading, error, data } = useQuery(SINGERS_6);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>Error 😑</p>;

  return (
    <div className='wrapper'>
      <S6card />
    </div>
  );
}
