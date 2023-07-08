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
                    padding: `var(--size-gutter)`
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
                    <a
                        href="https://www.orangevalehistory.org"
                        target="_blank"
                        rel="noreferrer"
                    >
                        © {new Date().getFullYear()} &middot; {title}
                    </a>
                </footer>
            </div>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
