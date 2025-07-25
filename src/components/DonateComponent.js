import React from 'react';
import campers from '../images/Tour_Campers_2.jpg';

export const DonateComponent = () => {

	return (
		<div className="bg-gray-900 text-white pt-10 pb-40 mt-1 xl:h-screen relative">
			<div className={`flex flex-col xl:w-1/2 xl:mx-auto xl:flex-row justify-between gap-4 xl:gap-8`}>
				<div>
					<givebutter-widget id="g85DGp"></givebutter-widget>
				</div>
				<div id="donation" className='bg-white text-black rounded-lg p-5 h-[420px] w-[358px] mx-auto'>
					<img src={campers} alt="Docent with campers at the museum"
						className='max-h-36 w-full' />
					<div className='text-center text-2xl font-sans mt-4'>
						<div>Make a year-end donation</div>
						<form
							action="https://www.paypal.com/ncp/payment/BEY9DHJE66WNU"
							method="post"
							target="_top"
							style={{
								display: 'inline-grid',
								justifyItems: 'center', alignContent: 'start', gap: '1.5rem'
							}}
						>
							<input className="pp-BEY9DHJE66WNU mt-5" type="submit" value="Donate" />
							<img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
							<section>
								Powered by
								<img
									src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
									alt="paypal"
									style={{ height: '0.875rem', verticalAlign: 'middle' }}
								/>
							</section>
						</form>
						<style>
							{`
								.pp-BEY9DHJE66WNU {
									text-align: center;
									border: none;
									border-radius: 1.5rem;
									min-width: 11.625rem;
									padding: 0 2rem;
									height: 2.625rem;
									font-weight: bold;
									background-color: #FFD140;
									color: #000000;
									font-family: "Helvetica Neue", Arial, sans-serif;
									font-size: 1rem;
									line-height: 1.25rem;
									cursor: pointer;
								}
							`}
						</style>
					</div>
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
