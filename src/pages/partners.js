import React from 'react';
import { graphql } from 'gatsby';
import { Partners } from '../components/partners/partners.js';
import Layout from '../components/layout';
import Seo from '../components/seo';

const PartnersPage = ({data}) => {
    return (
        <Layout>
            <Seo title="Supporting Partners and Businesses" />
            <Partners data={data} />
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {membership: {in: [ "founder", "member", "business-partner" ]}}}) {
            nodes {
                frontmatter {
                    date
                    org
                    line1
                    line2
                    logo {
                        childImageSharp {
                            gatsbyImageData(
                                width: 460
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        } 
                        publicURL
                    }
                    link
                    membership
                }
            }
        }
    }`


export default PartnersPage;
