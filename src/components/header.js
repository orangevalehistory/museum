import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import logo from '../images/ov-history-museum-01.jpg';
import { Navbar } from './navbar/navbar';
// import { Donate } from './navbar/donate';
// import { Social } from './navbar/social';

const Header = ({ siteTitle }) => {
    return (
        <header className="bg-gray-900 text-white">
            <div className="flex px-5 py-4 items-center justify-between bg-gray-900 text-white">
                <div id="left" className="px-0 w-1/4">
                    <img
                        alt="Orangevale History Project Museum logo"
                        className="inline-block pl-4"
                        src={logo}
                    />
                    <Link
                        to="/"
                        className="text-xl font-bold no-underline inline-block pl-4"
                    >
                        {siteTitle}
                    </Link>
                </div>

                <div className="lg:hidden w-3/4">
                    <div>
                        <Navbar />
                    </div>
                    {/* <div className="hidden md:flex justify-center">
                        <Social />
                        <Donate />
                    </div> */}
                </div>

                <div className="hidden lg:flex">
                    <Navbar />
                </div>

                <div className="hidden lg:flex">
                    <div className="hidden md:flex justify-center pb-2">
                        &nbsp;
                        {/* <Social />
                        <Donate /> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
