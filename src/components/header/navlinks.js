import React from 'react';
import { Link } from 'gatsby';
import { Social } from './social';
import { Donate } from './donate';
import { Nav } from 'rsuite';

export const NavLinks = (props) => {
    let navclasses = 'text-white flex';
    if (props.mobile) {
        navclasses = 'text-white flex flex-col';
    }

    return (
        <div className={props.styles}>
            <Nav className={navclasses}>
                <Nav.Item>
                    <div className="mx-2 text-white">
                        <Link to="/">Home</Link>
                    </div>
                </Nav.Item>
                {/* <Nav.Item> Reminder: this swallows <a> events */}
                <div className="mx-2 text-white">
                    <a href="https://www.orangevalehistory.org/" target="_blank" rel="noopener noreferrer">Org</a>
                </div>
                {/* </Nav.Item> */}
                <Nav.Item>
                    <div className="mx-2">
                        <Link to="/sponsors">Sponsors</Link>
                    </div>
                </Nav.Item>
                <Nav.Item>
                    <div className="mx-2">
                        <Link to="/events">Events</Link>
                    </div>
                </Nav.Item>
            </Nav>
            <div className="mx-2 my-3 md:hidden">
                <Social />
            </div>
            <div className="mx-2 md:hidden">
                <Donate />
            </div>
        </div>
    );
};