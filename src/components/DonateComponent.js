import React from 'react';

export const DonateComponent = () => {
	return (
		<div className="bg-gray-900 text-white pt-10 pb-40 mt-1 md:h-screen relative">
			<div className={`grid grid-cols-1 md:grid-cols-2 lg:flex gap-8 justify-items-center lg:justify-center`}>
				<div>
					<h1 className="xl:text-3xl m-auto my-4 lg:mt-12 text-center">
						SUPPORT YOUR MUSEUM
					</h1>
					<givebutter-widget id="g85DGp" />
				</div>
			</div>

			<div id="non-profit-statement" className="text-center text-xl my-4">
				<p>
					The Orangevale History Project is a 501(c)(3)
					organization recognized by the Internal Revenue Service.
				</p>
				<p>All donations are tax-deductible per IRS codes.</p>
			</div>
		</div>
	);
};
