import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const hours = () => {
    return (
        <React.Fragment>
            <div className="">Hours </div>
            <div className="">Tues: 10am-2pm </div>
            <div className="">Thurs: 4pm-8pm </div>
            <div className="">Sat: 10am-4pm</div>
        </React.Fragment>
    );
};

const location = () => {
    return (
        <React.Fragment>
            <div className="">Location </div>
            <div className="">6920 Hazel Ave</div>
            <div className="">Orangevale, CA</div>
            <div className="text-xs underline mt-1">map</div>
        </React.Fragment>
    );
};

export const Hero = () => {
    const { heroImage } = useStaticQuery(
        graphql`
            query {
                heroImage: file(
                    relativePath: { eq: "MuseumFrontCropped.jpg" }
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
        <div className="block">
            <hr className="border-1" />
            <div className="flex justify-around bg-gray-900 text-white text-center">
                <div className="py-4">{hours()}</div>

                <a
                    href="https://www.google.com/search?q=6920+Hazel+Ave.+Orangevale%2C+CA&oq=6920+Hazel+Ave.+Orangevale%2C+CA&aqs=chrome..69i57.14216j0j7&sourceid=chrome&ie=UTF-8#ip=1"
                    className="py-4"
                >
                    {location()}
                </a>
            </div>
            <div className="pt-1 bg-white">
                <div className="xl:py-2 w-full flex justify-center align-middle bg-gray-900">
                    <GatsbyImage image={backgroundImage} alt="grand opening" />
                </div>
            </div>
        </div>
    );
};
