import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import './styles.css';

const links = [
  { href: "/home", text: "Home" },
  { href: "/screenone", text: "Screen One" },
  { href: "/screentwo", text: "Screen Two" },
];

type NavBarProps = {
  href?: string,
  text?: string,
  className?: any,
}

const createNavItem = ({ href, text, className }: NavBarProps) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: "100vw" }}>
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="/">GameOfThrones</NavbarBrand>
        <NavbarToggler onClick={toggleHandler} style={{ boxShadow: 'none' }}>
          <div id="close-icon" className={isOpen ? "open" : ""}>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="customNav" navbar>
            {links.map(createNavItem)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
