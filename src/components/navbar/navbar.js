import React from 'react';
import { MobileNavigation } from './mobile-navigation';
import { NavLinks } from './navlinks';

export const Navbar = () => {
    return (
        <div>
            <MobileNavigation />
            <div className="flex">
                <div>
                    <NavLinks
                        styles={
                            'hidden md:flex flex-row font-sans font-light justify-center space-between px-3 pb-2 text-white text-2xl'
                        }
                    />
                </div>
                {/* <div className="text-center pb-2 text-sm ml-20">
                    <div className="">Hours </div>
                    <div className="">Tues: 10am-2pm </div>
                    <div className="">Thurs: 4pm-8pm </div>
                    <div className="">Sat: 10am-4pm</div>
                </div> */}
            </div>
        </div>
    );
};
