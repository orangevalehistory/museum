import React from 'react';
import { EmailForm } from './email-form';
import downloadFile from '/static/new_member_application.pdf' 

//Based on https://formsubmit.co/live-demo

export const Contact = () => {

    return (
        <div className="bg-gray-900 bg-cover text-white font-sans">
            <div className="hl"></div>
            <div className="xl:mt-32">
                <div className="lg:flex lg:items-center">
                    <div className="md:flex md:w-full lg:w-[60%] lg:flex-col">
                        <div className="text-center sm:flex justify-center items-center md:w-1/2 lg:w-full md:flex-col lg:my-10">
                            <div className="lg:text-center py-4 md:py-0 m-4 lg:w-full">
                                Download the <span className='whitespace-nowrap'>membership application pdf</span>
                            </div>
                            <div className="">
                                <a
                                    className="submit-button"
                                    href={downloadFile}
                                    download
                                >
                                    Download
                                </a>
                            </div>
                        </div>

                        <div className="py-8 md:w-1/2 lg:w-full md:flex md:flex-col md:justify-center md:items-center xl:justify-around xl:mb-8">
                            <div>
                                <div className="text-center mb-4">
                                    Subscribe to newsletters and <span className='whitespace-nowrap'>event notices</span>
                                </div>
                                <div className="text-center m-4 xl:mx-0 xl:my-4">
                                    <EmailForm />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hl my-4 lg:no-hl" />

                    <div className="lg:vl w-full md:m-auto">
                        <div className="text-center lg:text-xl">
                            <h1 className="my-4 text-lg">CONTACT US</h1>
                            <p className="text-xs md:text-sm xl:text-base w-[80%] m-auto">
                                OUR MISSION: TO COLLECT AND SHARE ORANGEVALE’S
                                HISTORY AND TRADITIONS
                            </p>
                        </div>
                        <form 
                            target="_blank"
                            action="https://formsubmit.co/b8677c2544d6cac76e5b442835cc5fb2" 
                            method="POST"
                        >
                            <div className="text-black flex flex-col xl:flex-row justify-center md:w-[80%] md:m-auto">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control m-3 h-10"
                                    placeholder="Full Name"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control m-3 h-10"
                                    placeholder="Email Address"
                                    required
                                />

                                <input
                                    type="phone"
                                    name="phone"
                                    className="form-control m-3 h-10"
                                    placeholder="Phone number (optional)"
                                />
                            </div>
                            <div className="text-black flex justify-center m-3">
                                <textarea
                                    placeholder="Your Message"
                                    className="form-control lg:w-[80%]"
                                    name="message"
                                    rows="10"
                                    cols="78"
                                    required
                                ></textarea>
                            </div>

                            <div className="mt-4 text-center">
                                <button type="submit" className="submit-button">
                                    Submit Form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hl mt-12 xl:mt-32" />

                <div
                    className="spacer-border w-[90%] md:w-[80%] m-auto"
                    style={{ marginTop: '8rem' }}
                >
                    <p
                        className="text-center text-xl visible"
                        style={{ marginBottom: '10rem' }}
                    >
                        The Orangevale History Project does not provide, rent,
                        or sell email addresses or any other personal
                        information to anyone outside the organization.
                    </p>
                </div>
            </div>
        </div>
    );
};
