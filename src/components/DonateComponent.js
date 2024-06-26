import * as React from 'react';

export const DonateComponent = () => {
	return (
		<div className="bg-gray-900 text-white pt-10 md:pb-40 mt-1">
			<div className="flex justify-center">
				<iframe
					src="https://www.paypal.com/giving/campaigns?campaign_id=X3MDFKUVAE7FJ"
					title="PayPal donate campaign card"
					frameborder="0" width={382} height={550} scrolling="no" />
			</div>
			<div className="text-center text-xl my-4">
				<p>
					The Orangevale History Project is a 501(c)(3)
					organization recognized by the Internal Revenue Service.
				</p>
				<p>All donations are tax-deductible per IRS codes.</p>
			</div>
		</div>
	);
};