import React, { useCallback, useMemo, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import './styles.css';

import GotLogo from '../../assets/got-logo.png';

type DropDownTypes = {
  href?: string,
  text?: string
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  console.log('>>>>> ', isDropDownOpen)

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const URLList = [
    {
      href: '/season-1',
      text: 'Session 1'
    },
    {
      href: '/season-2',
      text: 'Session 2'
    },
    {
      href: '/season-3',
      text: 'Session 3'
    },
    {
      href: '/season-4',
      text: 'Session 4'
    },
    {
      href: '/season-5',
      text: 'Session 5'
    },
    {
      href: '/season-6',
      text: 'Session 6'
    },
    {
      href: '/season-7',
      text: 'Session 7'
    },
    {
      href: '/season-8',
      text: 'Session 8'
    },
  ]

  const renderDropDownItem = useCallback((href: string, text: string) => {
    return (
      <>
        <DropdownItem href={href}>{text}</DropdownItem>
        <DropdownItem divider />
      </>
    )
  }, []);

  return (
    <div style={{ width: "100vw" }}>
      <Navbar color="light" light expand="sm">
        <NavbarBrand
          href="/"
        >
          <img
            alt="got-logo"
            src={GotLogo}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleHandler} style={{ boxShadow: 'none' }}>
          <div id="close-icon" className={isOpen ? "open" : ""}>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="customNav" navbar>
            <NavItem>
              <NavLink href="/casting">Casting</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/funfacts">FunFacts</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <>
                  Seasons
                  {' '}
                  {/* {isDropDownOpen && <IoIosArrowUp />} */}
                  {!isDropDownOpen && <IoIosArrowDown />}
                </>
              </DropdownToggle>
              <DropdownMenu>
                {URLList && URLList.map((item) => renderDropDownItem(item.href, item.text))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
