import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Hero } from '../components/hero';
import '../styles/global.css';
import { SimpleSlider } from '../components/carousel/simple-carousel';

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="Home" />
            <div id="home-page">
                <Hero />
                <SimpleSlider />
                <div className="block md:flex text-white bg-gray-900 relative justify-center items-center ">
                    <div className="md:w-1/2 mt-8 p-4">
                        <StaticImage
                            src="../images/GRAND_OPENING_ohm.png"
                            loading="eager"
                            quality={95}
                            formats={['auto', 'webp', 'avif']}
                            alt=""
                        />
                    </div>

                    <div className="md:w-1/2">
                        <div style={{ margin: '15% 20% 15% 20%' }}>
                            <div className="items-center flex">
                                <h1 className="text-4xl">
                                    About the <br />
                                    Orangevale History Museum
                                </h1>
                            </div>

                            <p className="text-left text-lg font-bold py-8 px-2">
                                We are a group of community volunteers who
                                desire to document and preserve Orangevale's
                                stories. We meet monthly and hope to continue to
                                capture the people and history that make our
                                community unique.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
