import './MaskedSingerss.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GiCarnivalMask } from 'react-icons/gi';

function SingApp() {
  return (
    <div className='SingApp'>
      <Navbar bg='dark' variant='dark' fixed='top' expand='sm' collapseOnSelect>
        {/* //brand is a container that's specific to logo related uses, it can be a link (can use a href) */}

        <Navbar.Brand className='logo'>
          <GiCarnivalMask />
          <text>The Unmasked Singer</text>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav bg='dark' variant='dark'>
            <NavDropdown title='Seasons' menuVariant='dark'>
              <NavDropdown.Item href='seasons/season1'>
                Season 1
              </NavDropdown.Item>
              <NavDropdown.Item href='seasons/season2'>
                Season 2
              </NavDropdown.Item>
              <NavDropdown.Item href='seasons/season3'>
                Season 3
              </NavDropdown.Item>
              <NavDropdown.Item href='seasons/season4'>
                Season 4
              </NavDropdown.Item>
              <NavDropdown.Item href='seasons/season5'>
                Season 5
              </NavDropdown.Item>
              <NavDropdown.Item href='seasons/season6'>
                Season 6
              </NavDropdown.Item>
              <NavDropdown.Item href='seasons/season7'>
                Season 7
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='seasons/seasonall'>
                All Seasons
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='test'>Credits</Nav.Link>
            <Nav.Link href='test2'>Github</Nav.Link>
            <Nav.Link href='test3'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='content'>
        Content stuff and things and things and stuff and stuff and things and
        things and stuff.
      </div>
    </div>
  );
}

export default SingApp;
