import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { BgImage } from "gbimage-bridge" //todo can this be npm removed?
// import * as styles from './hero.module.css';

//gatsbyImageData(layout: FULL_WIDTH, quality: 50, webpOptions: { quality: 70 })
/*
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
*/

export const Hero = () => {
    const { heroImage } = useStaticQuery(
        graphql`
            query {
                heroImage: file(
                    relativePath: { eq: "GRAND_OPENING_ohm.png" }
                ) {
                    childImageSharp {
                        gatsbyImageData(
                            quality: 50
                            webpOptions: { quality: 70 }
                        )
                    }
                }
            }
        `
    );
    const backgroundImage = getImage(heroImage);

    return (
        <div className="pt-1 bg-white">
            <div className="xl:py-2 w-full flex justify-center align-middle bg-gray-900">
                <GatsbyImage image={backgroundImage} alt="grand opening" />
            </div>
        </div>
    );
};
