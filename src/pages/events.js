import * as React from 'react';
// import { Script } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/global.css';

//https://stackoverflow.com/questions/3982422/full-screen-iframe

// export function Head() {
//     return (
//         <>
//             <Script src="https://impact.locable.com/javascripts/website_embed.js"></Script>
//             <Script async="true">
//                 CalendarWidget.load("dcf5c7ae-7087-4b85-b93d-e70f26ab96d8",
//                 "https://impact.locable.com/");
//             </Script>
//         </>
//     );
// };

const EventsPage = () => {
    return (
        <Layout>
            <Seo title="Events" />
            <div class="flex justify-center">
                <div className="p-2 m-2 margin-auto text-center text-orange-500 border-orange-500 border-2">
                    Use the Source dropdown to select only events for the
                    Orangevale History Project
                </div>
            </div>
            <div className="relative">
                <div id="events-page" style={{ height: '800px' }}>
                    <iframe
                        title="Events"
                        src="https://impact.locable.com/widgets/calendar_widgets/dcf5c7ae-7087-4b85-b93d-e70f26ab96d8"
                        id="calendar-widget-dcf5c7ae-7087-4b85-b93d-e70f26ab96d8"
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            bottom: '0',
                            right: '0',
                            width: '100%',
                            height: '800px',
                            border: 'none',
                            margin: '0',
                            padding: '0',
                            overflow: 'hidden',
                            zIndex: '999999'
                        }}
                    >
                        Your browser doesn't support iframes
                    </iframe>
                </div>
            </div>
        </Layout>
    );
};

export default EventsPage;
