import React, { useState, Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Collapse from 'react-bootstrap/Collapse'

function Header ({ user }) {
  const [open, setOpen] = useState(false)

  const alwaysOptions = (
    <Fragment>
      <Nav.Link href="#/">Top Headlines</Nav.Link>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
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

  const headerContent = {
    backgroundColor: 'var(--primary)',
    padding: '1rem 0 0 0'
  }

  const headerStyle = {
    backgroundColor: 'var(--primary)'
  }

  const logoStyle = {
    color: 'white',
    fontSize: '5rem'
  }

  return (
    <Fragment>
      <div style={headerStyle}>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          LOOP
        </Button>
        <Collapse in={open}>
          <div style={headerContent} className="text-center">
            <Navbar.Brand style={logoStyle} href="#/">
              LOOP
            </Navbar.Brand>
            <Navbar bg="primary" variant="dark" expand="md">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  { alwaysOptions }
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Collapse>
      </div>
    </Fragment>
  )
}

export default Header
