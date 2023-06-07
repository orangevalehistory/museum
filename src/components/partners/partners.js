import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Section } from './section';

export const Partners = ({ data }) => {
    const partnerNodes = data.allMarkdownRemark.nodes;
    let founders = [];
    let partners = [];
    let members = [];

    for (const node of partnerNodes) {
        const element = node.frontmatter;
        if (element.membership === 'member') {
            members.push(element);
        } else if (element.membership === 'business-partner') {
            partners.push(element);
        } else if (element.membership === 'founder') {
            founders.push(element);
        }
    }

    return (
        <div className="w-full text-center bg-gray-900 text-white ">
            <div className="hl" />
            <div className="text-3xl py-8 px-2">
                Our sponsors and partners in the community make all the
                difference!
            </div>

            <Section sectionTitle="FOUNDERS LEVEL">
                <div id="founders" className="w-full">
                    {founders.map((founder) => {
                        const logo = getImage(founder.logo);
                        return (
                            <div key={founder.slug} className="mx-8 text-white">
                                <p className="pb-4">{founder.org}</p>
                                <a href={founder.link}>
                                    <GatsbyImage
                                        imgStyle={{ backgroundColor: 'white' }}
                                        image={logo}
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </Section>

            <hr className="white mt-4" />
            <Section sectionTitle="BUSINESS PARTNERS">
                <div className="w-full flex flex-row flex-wrap justify-center">
                    {partners.map((partner, i) => {
                        const logo = getImage(partner.logo);
                        // const horizontalLine = (i === partners.length-1) ? "" : <hr className="white my-8 lg:invisible lg:p-2" />
                        const horizontalLine = (
                            <div className="my-8 lg:invisible lg:p-2" />
                        );
                        return (
                            <div
                                key={partner.slug}
                                className="md:w-1/2 text-white"
                            >
                                <a href={partner.link}>
                                    <p className="pb-4">{partner.org}</p>
                                    <GatsbyImage
                                        imgStyle={{
                                            backgroundColor: 'white'
                                        }}
                                        image={logo}
                                        alt={partner.org}
                                    />
                                </a>

                                {horizontalLine}
                            </div>
                        );
                    })}
                </div>
            </Section>
            <hr className="white my-4" />
            <Section sectionTitle="BUSINESS MEMBERS">
                <div className="w-full">
                    {members.map((member) => {
                        return (
                            <div
                                key={member.slug}
                                className="mx-8 text-white lg:text-xl"
                            >
                                <a href={member.link}>
                                    <ul>
                                        <li>{member.org}</li>
                                        <li>{member.line1}</li>
                                        <li>{member.line2}</li>
                                    </ul>
                                </a>
                                <hr className="white my-4 lg:my-8 lg:invisible lg:p-2" />
                            </div>
                        );
                    })}
                </div>
            </Section>
            <br />
        </div>
    );
};
