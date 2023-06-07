import React from 'react';

export const Section = ({ sectionTitle, children }) => {
    return (
        <React.Fragment>
            <div className="text-center text-2xl py-4 lg:my-8">
                <h1 className="block-title uppercase">
                    {sectionTitle}
                </h1>
            </div>
            <div className="text-center ">
                <div className="row">{children}</div>
            </div>
        </React.Fragment>
    );
};
