import {
	BugAntIcon,
	ChatBubbleLeftRightIcon,
	ComputerDesktopIcon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
const cards = [
	{
		Icon: PhoneIcon,
		title: 'Offerte aanvragen',
		description:
			'Heb je interesse in mijn diensten en wil je een offerte aanvragen? Ik help je graag verder. Neem contact met me op en ik zorg ervoor dat je snel een passende offerte ontvangt.',
		cta: {
			href: 'tel:+31615207232',
			title: '<span aria-hidden="true">&rarr;</span> +31 6 15 207 232',
		},
		color: '#8E8768',
	},

	{
		Icon: EnvelopeIcon,
		title: 'Overige vragen',
		description:
			'Heb je nog andere vragen met betrekking tot web- of softwareontwikkeling? Ik sta voor je klaar om al je vragen te beantwoorden en je te helpen bij het vinden van de beste oplossingen. Aarzel niet om contact met me op te nemen.',
		cta: {
			href: 'mailto:info@erwinwijnveld.nl',
			title: '<span aria-hidden="true">&rarr;</span> info@erwinwijnveld.nl',
		},
		color: '#B5A28B',
	},
	{
		Icon: BugAntIcon,
		title: 'Technische support',
		description:
			'Heb je technische ondersteuning nodig voor je website of software? Ik ben gespecialiseerd in het oplossen van technische problemen en sta klaar om je te helpen. Neem contact met me op en ik zorg ervoor dat je snel weer operationeel bent.',
		cta: {
			href: 'tel:+31615207232',
			title: '<span aria-hidden="true">&rarr;</span> +31 6 15 207 232',
		},
		color: '#966C54',
	},
];

export default function ContactInfo() {
	return (
		<div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
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
			<div className="mx-auto max-w-2xl sm:text-center">
				<h1 className=" tracking-tight text-primary-light sm:text-6xl">
					Neem contact op
				</h1>
				<p className="mt-6  leading-6 text-primary-light/75">
					Heb je een vraag of wil je een offerte aanvragen? Neem dan
					contact met mij op via de onderstaande kanalen.
				</p>
			</div>
			<div className="mx-auto mt-20 max-w-lg space-y-16">
				{cards?.map(
					({ Icon, title, description, cta, color }, index) => (
						<div className="flex gap-x-6" key={index}>
							<div
								className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
								style={{
									backgroundColor: color,
								}}
							>
								<Icon
									className="h-6 w-6 text-white"
									aria-hidden="true"
								/>
							</div>
							<div>
								<h3 className="text-base font-semibold leading-7 text-primary-light">
									{title}
								</h3>
								<p className="mt-2 text-sm leading-7 text-primary-light/75 md:text-base">
									{description}
								</p>
								<p className="mt-4">
									<a
										href={cta?.href}
										className="text-sm font-bold leading-6 "
										style={{
											color,
										}}
										dangerouslySetInnerHTML={{
											__html: cta?.title,
										}}
									/>
								</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
