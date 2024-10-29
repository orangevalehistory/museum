import React from 'react';
import Layout from '../components/layout.js';
import Seo from '../components/seo.js';
import donors from '../images/Museum_Donor_Banner.png';

const SponsorsPage = ({ data }) => {
    return (
        <Layout>
            <Seo title="Supporting Partners and Businesses" />
            <div className="flex justify-center bg-gray-900">
                <img src={donors} alt="Donors" />
            </div>
        </Layout>
    );
};



export default SponsorsPage;
