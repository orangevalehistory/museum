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
                {/* <Nav.Item>
                    <div className="mx-2">
                        <Link to="/">Blog</Link>
                    </div>
                </Nav.Item> */}
                <Nav.Item>
                    <div className="mx-2">
                        <Link to="/gallery">Gallery</Link>
                    </div>
                </Nav.Item>
                {/* <Nav.Item>
                    <div className="mx-2">
                        <Link to="/contact">Contact</Link>
                    </div>
                </Nav.Item> */}

                {/* <Nav.Menu title="Resources" className="pl-3">
                    <div
                        className="absolute underline m-2 ml-8 p-2 text-black bg-white
                    text-xl text-left leading-relaxed z-40 rounded-md"
                    >
                        <Nav.Item>
                            <Link to="/events">Events</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/map">Map</Link>
                        </Nav.Item>
                    </div>
                </Nav.Menu> */}
{/* 
                <Nav.Menu title="About" className="pl-3">
                    <div
                        className="absolute underline m-2 p-2 text-black bg-white
                    text-xl text-left leading-relaxed z-40 rounded-md"
                    >
                        <Nav.Item>
                            <Link to="/about">About Us</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/partners">Partners</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/executive-board">Leadership</Link>
                        </Nav.Item>                        
                    </div>
                </Nav.Menu> */}
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
