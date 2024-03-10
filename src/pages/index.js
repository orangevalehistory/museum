import * as React from 'react';
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
                {/* <div className="text-xl text-center bg-orange-500"> */}
                {/* <div className="text-xl text-center text-red-500">
                    New hours! - Effective the week of January 16th
                    we will be open three days a week, Tuesday, Thursday, and Saturday, 12pm - 4pm.
                </div> */}
                <Hero />
                <SimpleSlider />
                <div className="block md:flex text-white bg-gray-900 relative justify-center items-center ">
                    <div className="md:w-1/2">
                        <div style={{ margin: '8% 18% 0 18%' }}>
                            <div className="items-center flex">
                                <h1 className="text-4xl mt-6">
                                    About the <br />
                                    Orangevale History Museum
                                </h1>
                            </div>

                            <p className="text-left text-lg font-bold py-8 px-2">
                                The new Orangevale History Museum fulfills part
                                of the purpose of the Orangevale History Project
                                (OHP) which is to preserve, chronicle and
                                promote the history of Orangevale, California,
                                and educate the community thereof. Thanks to the
                                Orangevale Recreation & Park District, OHP can
                                now house and share the unique history of this
                                community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
