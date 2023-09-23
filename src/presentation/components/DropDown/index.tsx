import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Direction } from 'reactstrap/types/lib/Dropdown';

type DropDownProps = {
    direction?: Direction,
    args?: any,
}

function DropDown({ direction, ...args }: DropDownProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="d-flex p-5">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                <DropdownToggle caret>Seasons</DropdownToggle>
                <DropdownMenu {...args}>
                    <DropdownItem>Season 1</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Season 2</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

DropDown.propTypes = {
    direction: PropTypes.string,
};

export default DropDown;