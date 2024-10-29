import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../../images/ov-history-museum-01sm.jpg';
import { Donate } from './donate';
import { Social } from './social';
import { NavLinks } from './navlinks';
import { MobileNavigation } from './mobile-navigation';

const Header = ({ siteTitle }) => {
    return (
        <header className="bg-gray-900 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center px-5 bg-gray-900 text-white">
                <div id="left" className="flex items-center justify-start md:justify-start w-full md:w-auto">
                    <img
                        alt="Orangevale History Project Museum logo"
                        className="inline-block my-4 max-h-32"
                        src={logo}
                    />
                    <Link
                        to="/"
                        className="hidden text-xl font-bold no-underline lg:inline-block pl-4"
                    >
                        {siteTitle}
                    </Link>
                </div>

                <div id="middle" className="hidden lg:flex justify-center">
                    <NavLinks
                        styles={
                            'flex flex-row font-sans font-light justify-center space-between px-3 pb-2 text-white text-2xl'
                        }
                    />
                </div>

                <div id="right" className="w-full mx-auto">
                    <div className="hidden lg:flex justify-end pb-2">
                        <Social />
                        <Donate />
                    </div>

                    <div className="lg:hidden flex justify-end pb-2">
                        <MobileNavigation />
                    </div>
                </div>
            </div>
            <Link
                to="/"
                className="inline-block w-full text-center lg:hidden text-xl md:text-2xl font-bold no-underline mb-2"
            >
                {siteTitle}
            </Link>
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
