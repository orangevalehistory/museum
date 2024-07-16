import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const hours = () => {
    return (
        <React.Fragment>
            <div className="">TEMPORARILY CLOSED</div>
            <div className="">Hours Open</div>
            <div className="">Tues: noon-4pm </div>
            <div className="">Thurs: noon-4pm </div>
            <div className="">Sat: noon-4pm</div>
            <div className="">FREE ADMISSION</div>
        </React.Fragment>
    );
};

const location = () => {
    return (
        <React.Fragment>
            <div className="lg:hidden text-center">Location </div>
            <div className="">6920 Hazel Ave</div>
            <div className="">Orangevale, CA</div>
            <div className="text-base xl:text-xl lg:mt-3 underline text-center">
                map
            </div>
            <div className="text-xl xl:text-2xl lg:mt-3 text-center">
                (916) 800-4711
            </div>            
        </React.Fragment>
    );
};

export const Hero = () => {
    const { heroImage } = useStaticQuery(
        graphql`
            query {
                heroImage: file(
                    relativePath: { eq: "Museum_Frnt_Sign.jpg" }
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
            <div
                id="mobile"
                className="bg-gray-900 text-white text-center lg:hidden p-4 md:text-lg"
            >
                <div className="pb-4">{hours()}</div>
                <hr className="pt-4" />
                <a href="https://www.google.com/search?q=6920+Hazel+Ave.+Orangevale%2C+CA&oq=6920+Hazel+Ave.+Orangevale%2C+CA&aqs=chrome..69i57.14216j0j7&sourceid=chrome&ie=UTF-8#ip=1">
                    {location()}
                </a>
            </div>
            <div className="pt-1 bg-white">
                <div
                    className="bg-gray-900 text-white"
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <div className="hidden lg:flex justify-center items-center flex-1 lg:text-lg xl:text-3xl">
                        <div>{hours()}</div>
                    </div>
                    <GatsbyImage
                        className="lg:w-1/2"
                        image={backgroundImage}
                        alt="grand opening"
                    />
                    <div className="hidden lg:flex justify-center items-center flex-1 lg:text-lg xl:text-3xl">
                        <a
                            href="https://www.google.com/search?q=6920+Hazel+Ave.+Orangevale%2C+CA&oq=6920+Hazel+Ave.+Orangevale%2C+CA&aqs=chrome..69i57.14216j0j7&sourceid=chrome&ie=UTF-8#ip=1"
                            className=""
                        >
                            {location()}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
