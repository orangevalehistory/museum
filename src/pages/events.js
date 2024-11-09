import * as React from 'react';
// import { Script } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/global.css';

const EventsPage = () => {
    return (
        <Layout>
            <Seo title="Events" />
            <div className="relative my-1 border-0 bg-gray-900 p-4 ">
                <div id="events-page" className="container h-screen mx-auto flex flex-col justify-start items-center">
                    <iframe
                        title="Events Calendar"
                        src="https://calendar.google.com/calendar/embed?src=c_d5cd245712e4f912cac75201b32d3fb9c78aae8ee1670dd3f87c570c7a0a701d%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                        className="m-0 p-0 border-0 w-full md:w-[800px] h-[600px] md:h-[600px] rounded-none md:rounded-lg no-scrollbar"
                    >
                    </iframe>
                </div>
            </div>
        </Layout>
    );
};

export default EventsPage;
