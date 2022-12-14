import './navbar.css';
import HUIButton from '../button/button';
import { React, useContext, useState } from 'react';
import DefineLogo from '../../define/defineLogo/defineLogo';
import hashBurger from './../../assets/images/hashBurger.svg';
import { NavbarContext } from '../../define/define';

function Navbar(props) {
    const { active, setActive } = useContext(NavbarContext);
    const [navActive, setNavActive] = useState(active);

    return (
        <div className="NavBarContainer">
            <div className={active ? 'NavBar' : 'NavBar closed'}>
                <img className="hamburger" src={hashBurger} alt="Hash Burger"></img>
                <ul className="navbarList">
                    <li>
                        <DefineLogo></DefineLogo>
                    </li>
                    <li>Schedule</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                    <HUIButton
                        text="Coming Soon!"
                        icon="hashIcon"
                        event="define"
                        type="primary"
                        variant="1"
                        color="var(--blasphemous-black)"
                    />
                </ul>
            </div>
            <div
                className={active ? 'backgroundOverlay' : 'backgroundOverlay backgroundOverlayClosed'}
                onClick={() => {
                    setNavActive(false);
                    setActive(false);
                }}
            ></div>
        </div>
    );
}

export default Navbar;
