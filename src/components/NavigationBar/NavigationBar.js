import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationBar.css';
import { GiCarnivalMask } from 'react-icons/gi';
import { BsArrowReturnRight } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className='Navbar'>
      <Navbar bg='dark' fixed='top'>
        <Navbar.Brand className='brand'>
          <h3>
            <GiCarnivalMask className='icon' />
            <logo className='logo'>The Unmasked Singer</logo>{' '}
            <ul className='link'>
              {' '}
              <BsArrowReturnRight className='icon' />
              {'  '}
              <a href='/season1'>Season 1</a> | <a href='/season2'>Season 2</a>{' '}
              | <a href='/season3'>Season 3</a> |{' '}
              <a href='/season2'>Season 4</a> | <a href='/season3'>Season 5</a>{' '}
              | <a href='/season2'>Season 6</a> |{' '}
              <a href='/season3'>Season 7</a>
            </ul>
          </h3>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
