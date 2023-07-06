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
                <Nav.Item>
                    <div className="mx-2">
                        <a
                            href="https://www.google.com/search?q=6920+Hazel+Ave.+Orangevale%2C+CA&oq=6920+Hazel+Ave.+Orangevale%2C+CA&aqs=chrome..69i57.14216j0j7&sourceid=chrome&ie=UTF-8#ip=1"
                        >
                            Location
                        </a>
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
