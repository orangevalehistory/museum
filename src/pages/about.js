import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="About Us" />

            <div className="block md:flex mt-1 text-white bg-gray-900 relative inline-block justify-center items-center ">
                <div className="md:w-1/2">
                    <div className="pt-[15%] px-[10%] pb-0 md:px-[20%] md:pb-[15%]">
                        <div className="items-center flex">
                            <h1 className="text-5xl">
                                About Us
                                <br />
                            </h1>
                        </div>

                        <p className="text-left text-lg font-bold py-8 px-2">
                            We are a group of community volunteers who desire to
                            document and preserve Orangevale's stories.
                            Orangevale is a community in Northeast Sacramento
                            County, California, USA. We meet monthly and hope to
                            continue to capture the people and history that make
                            our community unique.
                        </p>
                        <p className="text-left text-lg font-bold py-8 px-2">
                            Meetings are held the first Wednesday of each month at
                            6:30pm at the Orangevale Chamber of Commerce office
                            on the corner Greenback Blvd & Hazel Ave.
                        </p>
                        <p className="text-left text-lg font-bold py-8 px-2">
                            <ul>
                                <li className='underline'>Mailing Address:</li>
                                <li>Orangevale History Project</li>
                                <li>6920 Hazel Ave</li>
                                <li>Orangevale, CA 95662</li>
                            </ul>
                        </p>                        
                    </div>
                </div>
                <div className="md:w-1/2 my-8 p-4 bg-gray-900 text-center">
                    <StaticImage
                        src="../images/gallery/TheGreatWestOrangevale1.jpeg"
                        loading="eager"
                        quality={95}
                        formats={['auto', 'webp', 'avif']}
                        alt=""
                    />
                </div>
            </div>
            <div className="bg-gray-900 text-white pt-10 md:pb-40 mt-1">
                <div className="flex justify-center">
                    <a
                        className="m-4 text-black btn text-xl"
                        href="https://www.paypal.com/donate/?hosted_button_id=7BBVDWWJVASPU"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-disabled="false"
                    >
                        Donate
                    </a>
                </div>
                <div className="text-center text-xl my-4">
                    <p>
                        The Orangevale History Project is a 501(c)(3)
                        organization recognized by the Internal Revenue Service.
                    </p>
                    <p>All donations are tax-deductible per IRS codes.</p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
