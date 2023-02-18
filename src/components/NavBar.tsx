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

const links = [
  { href: "/home", text: "Home" },
  { href: "/screenone", text: "Screen One" },
  { href: "/screentwo", text: "Screen Two" },
];

type NavBarProps = {
  href?: any,
  text?: any,
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleHandler} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {links.map(createNavItem)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
