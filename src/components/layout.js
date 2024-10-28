/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const Layout = ({ children }) => {
    //   const title =  data.site.siteMetadata?.title || `Title`
    const title = 'The Orangevale History Project';

    return (
        <React.Fragment>
            <Header siteTitle={title} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: `var(--size-content)`,
                    padding: `var(--size-gutter)`,
                    minWidth: `358px`
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `var(--space-5)`,
                        fontSize: `var(--font-sm)`
                    }}
                >
                    {/* copyright */}
                    <h3 className="flex flex-col mx-auto md:flex-row justify-center ml-4">
                        <div inline-block>&copy; 2022 - {new Date().getFullYear()}</div>
                        <div className="hidden md:inline">&nbsp;|&nbsp;</div>
                        <div className="inline tracking-wider">{title}</div>
                        <div className="hidden md:inline">&nbsp;|&nbsp;</div> All Rights Reserved
                    </h3>
                </footer>
            </div>
        </React.Fragment>
    );

};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
