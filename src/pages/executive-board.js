import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {ExecutiveBoard} from '../components/executive-board/executive-board';


const ExecutiveBoardPage = () => {
    return (
        <Layout>
            <Seo title="Executive Board" />
            <ExecutiveBoard />
        </Layout>
    );
};

export default ExecutiveBoardPage;
