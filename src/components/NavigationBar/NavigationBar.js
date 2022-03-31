import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GiCarnivalMask } from 'react-icons/gi';

function NavigationBar() {
  return (
    <div className='NavigationBar'>
      <Navbar bg='dark' variant='dark' fixed='top' expand='sm' collapseOnSelect>
        <Navbar.Brand className='logo'>
          <GiCarnivalMask className='logo' />
          <text>The Unmasked Singer</text>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav bg='dark' variant='dark'>
            <NavDropdown title='Seasons' menuVariant='dark' className='navitem'>
              <NavDropdown.Item href='/season1' className='navitem'>
                Season 1
              </NavDropdown.Item>
              <NavDropdown.Item href='/season2' className='navitem'>
                Season 2
              </NavDropdown.Item>
              <NavDropdown.Item href='/season3' className='navitem'>
                Season 3
              </NavDropdown.Item>
              <NavDropdown.Item href='/season4' className='navitem'>
                Season 4
              </NavDropdown.Item>
              <NavDropdown.Item href='/season5' className='navitem'>
                Season 5
              </NavDropdown.Item>
              <NavDropdown.Item href='/season6' className='navitem'>
                Season 6
              </NavDropdown.Item>
              <NavDropdown.Item href='/season7' className='navitem'>
                Season 7
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='test' className='navitem'>
              Credits
            </Nav.Link>
            <Nav.Link
              href='https://github.com/cuddleofdeath/UnmaskedSinger'
              className='navitem'
            >
              GitHub
            </Nav.Link>
            <Nav.Link href='test3' className='navitem'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='content'></div>
    </div>
  );
}

export default NavigationBar;
