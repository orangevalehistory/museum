import * as React from 'react';
import Layout from '../components/layout';
import { DonateComponent } from '../components/DonateComponent';

const DonatePage = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Layout>
            {isLoaded ? (
                <DonateComponent />
            ) : (
                <div className="flex justify-center items-center h-screen text-white">
                    Loading...
                </div>
            )}
        </Layout>
    );
};

export default DonatePage;
