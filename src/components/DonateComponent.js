import React from 'react';
import campers from '../images/Tour_Campers_2.jpg';

export const DonateComponent = () => {
	return (
		<div className="bg-gray-900 text-white pt-10 pb-40 mt-1 md:h-screen relative">
			{/* {isLoading && (
				<div className="flex justify-center items-center h-screen text-white absolute inset-0 bg-gray-900 bg-opacity-75 z-10">
					Loading...
				</div>
			)} */}
			<div className={`grid grid-cols-1 md:grid-cols-2 lg:flex gap-8 justify-items-center lg:justify-center`}>

				<div>
					<h1 className="xl:text-3xl m-auto my-4 lg:mt-12 text-center">
						NIGHT AT THE MUSEUM
					</h1>
					<givebutter-widget id="g85DGp" />
				</div>
			</div>
			<div id="non-profit-statement" className="text-center text-xl my-4 py-2">
				<p>
					The Orangevale History Project is a 501(c)(3)
					organization recognized by the Internal Revenue Service.
				</p>
				<p>All donations are tax-deductible per IRS codes.</p>
			</div>
		</div>
	);
};
