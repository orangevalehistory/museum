import React from 'react';

export const EmailForm = () => {
    return (
        <>
            <form
                target="_blank"
                action="https://formsubmit.co/b8677c2544d6cac76e5b442835cc5fb2"
                method="POST"
            >
                <div className="md:w-[90%] md:m-auto">
                    <input
                        type="email"
                        name="email"
                        className="h-10 w-full md:w-[90%] mb-4 text-black"
                        placeholder="Email Address"
                        required
                    />
                    <button type="submit" className="submit-button">
                        Sign up
                    </button>
                </div>
            </form>
        </>
    );
};
