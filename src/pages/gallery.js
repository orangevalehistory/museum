import React from 'react';
import { graphql } from 'gatsby';
import { Gallery } from '../components/gallery/gallery';
import Layout from '../components/layout';
import Seo from '../components/seo';

const GalleryPage = ({data}) => {
    return (
        <Layout>
            <Seo title="Photo Gallery" />
            <Gallery data={data} />
        </Layout>
    );
};

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: {eq: "gallery"}}) {
      nodes {
        name
        childImageSharp {
            gatsbyImageData( quality: 70 )
        }
      }
    }
  }
`

export default GalleryPage;
