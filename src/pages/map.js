import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const MapPage = () => {
    const width = 760;
    const height = width * 1.333;

    return (
        <Layout>
            <Seo />
            <div className="hl"></div>
            <div className="bg-gray-900 py-[3%] flex justify-center">
                <iframe
                    title="Historyical Map"
                    src="https://www.google.com/maps/d/embed?mid=1lE6dTskpWjuUIVoYj3M8RWak8hjWNq5N&ehbc=2E312F"
                    width={height}
                    height={width}
                ></iframe>
            </div>
        </Layout>
    );
};

export default MapPage;
