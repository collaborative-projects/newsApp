import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'

const headerStyle = {
  backgroundColor: 'var(--errie)',
  padding: '1rem 0 0 0'
}

const logoStyle = {
  color: 'white',
  fontSize: '5rem'
}

const navBar = {
  backgroundColor: 'var(--errie)',
  border: '0'
}

const centerNavBar = {
  justifyContent: 'center'
}

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )
//
// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Top Headlines</Nav.Link>
    <Dropdown>
      <Dropdown.Toggle style={navBar} id="dropdown-basic">
      World News
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/austrailia">Austrailia</Dropdown.Item>
        <Dropdown.Item href="#/canada">Canada</Dropdown.Item>
        <Dropdown.Item href="#/france">France</Dropdown.Item>
        <Dropdown.Item href="#/germany">Germany</Dropdown.Item>
        <Dropdown.Item href="#/hongkong">Hong Kong</Dropdown.Item>
        <Dropdown.Item href="#/uk">United Kingdom</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Nav.Link href="#/us-business">Business</Nav.Link>
    <Nav.Link href="#/us-entertainment">Entertainment</Nav.Link>
    <Nav.Link href="#/us-health">Health</Nav.Link>
    <Nav.Link href="#/us-science">Science</Nav.Link>
    <Nav.Link href="#/us-sports">Sports</Nav.Link>
    <Nav.Link href="#/us-technology">Technology</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Fragment>
    <div style={headerStyle} className="text-center">
      <Navbar.Brand style={logoStyle} href="#/">
        LOOP
      </Navbar.Brand>
    </div>
    <Navbar style={navBar} variant="dark" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={centerNavBar} id="basic-navbar-nav">
        <Nav>
          { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
          { alwaysOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
)

export default Header
