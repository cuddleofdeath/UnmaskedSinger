import * as React from 'react';
import { styled } from '@mui/material/legacy/styles';
import Button from '@mui/material/Button';
import './UnmaskedButton.css';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  width: 20,
  padding: '0 30px',
});

export default function UnmaskButton() {
  return <MyButton className='unmaskbutton'>Unmask!</MyButton>;
}
