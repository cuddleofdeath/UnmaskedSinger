import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationBar.css';
import { GiCarnivalMask } from 'react-icons/gi';

function NavigationBar() {
  return (
    <div className='NavBar'>
      <Navbar bg='dark' fixed='top'>
        <Navbar.Brand className='brand'>
          <GiCarnivalMask className='icon' />
          <h7 className='logo'> The Unmasked Singer</h7>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavigationBar;