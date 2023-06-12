import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const tiers = [
	{
		name: 'Ontwerp',
		id: 'tier-ontwerp',
		href: '/contact',
		priceMonthly:
			'Ik ontwerp uw huisstijl, branding, website of app op maat:',
		description:
			'Professioneel webdesign en appdesign dat meegroeit met uw snel groeiende bedrijf.',
		features: [
			'Aantrekkelijke visuele ontwerpen',
			'Intuïtieve navigatie en doordachte lay-outs',
			'Grafische elementen die uw merkidentiteit weerspiegelen',
			'Moderne ontwerptools en technieken',
		],
		mostPopular: false,
	},
	{
		name: 'Ontwikkeling',
		id: 'tier-ontwikkeling',
		href: '/contact',
		priceMonthly:
			'Ik bouw met de hoogste kwaliteit maatwerk een website of app:',
		description:
			'Professionele web- en appontwikkeling, de juiste technologie voor uw bedrijf.',
		features: [
			'De meest moderne technologieën',
			'Razendsnelle websites zonder laadtijden',
			'Op maat gemaakte web/app ontwikkeling',
			'Responsieve en gebruiksvriendelijke interfaces',
			'Actieve ondersteuing en schaalbaarheid',
		],
		mostPopular: true,
	},
	{
		name: 'Optimalisatie',
		id: 'tier-optimalisatie',
		href: '/contact',
		priceMonthly:
			'Ik optimaliseer uw website of app voor de beste prestaties:',
		description:
			'Perfectie in performance en technologie zorgt voor een hoog scorende website.',
		features: [
			'Verbeterde laadtijd en prestaties van de website',
			'Zoekmachineoptimalisatie (SEO)',
			'Responsieve weergave op alle apparaten',
			'Uitgebreide analyse van gebruikersgedrag',
			'Doorvoeren van best practices',
		],
		mostPopular: false,
	},
];

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Options() {
	return (
		<div className="relative isolate overflow-x-clip py-24 sm:py-32">
			<div
				className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brown-light to-brown opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-primary">
						Diensten
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-primary-light sm:text-5xl">
						Expertise in Webdesign, Appdesign, Ontwikkeling en
						Optimalisatie
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-primary-light/75">
					Professionele diensten voor webdesign, appdesign, web- en
					appontwikkeling, en optimalisatie. Vind het juiste plan voor
					uw bedrijf.
				</p>

				<div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{tiers.map((tier, tierIdx) => (
						<div
							key={tier.id}
							className={classNames(
								tier.mostPopular
									? 'bg-primary-light lg:z-10 lg:rounded-b-none'
									: 'lg:mt-8',
								tierIdx === 0
									? 'border-r-0 bg-primary lg:rounded-r-none'
									: '',
								tierIdx === tiers.length - 1
									? 'border-l-0 bg-brown-light lg:rounded-l-none'
									: '',
								'flex flex-col justify-between rounded-3xl  p-8 xl:p-10'
							)}
						>
							<div>
								<div className="flex items-center justify-between gap-x-4">
									<h3
										id={tier.id}
										className={classNames(
											tier.mostPopular
												? 'text-brown-dark'
												: '',
											'mb-0 text-xl font-semibold leading-8'
										)}
									>
										{tier.name}
									</h3>
									{tier.mostPopular ? (
										<p className="rounded-full bg-brown/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brown  ">
											Meest populair
										</p>
									) : null}
								</div>
								<p className="text-sm leading-6   ">
									{tier.description}
								</p>
								<p className="mt-6 font-bold">
									{tier.priceMonthly}
								</p>
								<ul
									role="list"
									className=" space-y-3 text-sm leading-6   "
								>
									{tier.features.map((feature) => (
										<li
											key={feature}
											className="flex gap-x-3"
										>
											<CheckIcon
												className="h-6 w-5 flex-none"
												aria-hidden="true"
											/>
											{feature}
										</li>
									))}
								</ul>
							</div>
							<Link
								href={tier.href}
								aria-describedby={tier.id}
								className={classNames(
									tier.mostPopular
										? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
										: '  ring-2 ring-inset ring-brown-dark hover:ring-brown',
									'mt-8 block rounded-4xl px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								)}
							>
								Vraag offerte aan
							</Link>
						</div>
					))}
				</div>
			</div>
			<div
				className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-light to-primary-dark opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
		</div>
	);
}
