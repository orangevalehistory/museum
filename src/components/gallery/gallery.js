import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Gallery = ({ data }) => {
    const galleryNodes = data.allFile.nodes;
    return (
        <div className="w-full text-center bg-gray-900">
            <div className="hl"></div>
            <div className='my-8'>
                <h1 className="text-5xl text-white">
                    Gallery
                    <br />
                </h1>
            </div>
            <div className="md:flex justify-center bg-black">
                <div className='lg:w-full xl:px-12' >
                    {galleryNodes.map((node, i) => {
                        return (
                            <div className="w-full p-4 md:p-16 lg:w-1/3 lg:p-4 inline-block">
                                <GatsbyImage image={node.childImageSharp.gatsbyImageData} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
