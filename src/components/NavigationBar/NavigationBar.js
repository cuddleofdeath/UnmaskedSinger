import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationBar.css';
import { GiCarnivalMask } from 'react-icons/gi';

function NavigationBar() {
  return (
    <div className='Navbar'>
      <Navbar bg='dark' fixed='top'>
        <Navbar.Brand className='brand'>
          <h3>
            <GiCarnivalMask className='icon' />
            <logo className='logo'>The Unmasked Singer</logo>
          </h3>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
