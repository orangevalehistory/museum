import React from 'react';
import Layout from '../components/layout.js';
import Seo from '../components/seo.js';
import donors from '../images/Museum_Donor_Banner.png';

const SponsorsPage = ({data}) => {
    return (
        <Layout>
            <Seo title="Supporting Partners and Businesses" />
            <img src={donors} alt="Donors" />
        </Layout>
    );
};



export default SponsorsPage;
