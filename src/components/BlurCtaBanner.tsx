import erwinguus from '@/assets/images/erwinguus.jpg';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
	'Innovatieve full-stack developer.',
	'Naadloze gebruikerservaringen.',
	'Supermodern ontwerp.',
	'Flexibele en schaalbare oplossingen.',
	'Volledige technische controle.',
	'Technologie en design verenigd.',
];
const BlurCtaBanner = () => {
	return (
		<div className="relative isolate py-10 lg:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto flex max-w-2xl flex-col gap-8 rounded-4xl bg-white/5 p-4 px-4 ring-1 ring-primary-light/20 sm:p-8 sm:px-6 sm:py-6  md:gap-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
					<Image
						className="h-80 w-full flex-none rounded-2xl object-cover shadow-xl sm:h-96 lg:aspect-square lg:h-auto lg:max-w-sm"
						src={erwinguus}
						alt="Erwin met een hond"
					/>
					<div className="w-full flex-auto">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Erwin Wijnveld
						</h2>
						<p className="mt-6 leading-6 text-gray-300">
							Als full stack developer met een specialisatie in{' '}
							<strong>modern design</strong> en{' '}
							<strong>interactiviteit</strong>, breng ik jouw
							website tot leven. Met mijn creatieve aanpak en
							technische vaardigheden zorg ik voor een boeiende
							gebruikerservaring.
						</p>
						<ul
							role="list"
							className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2 text-sm leading-7 text-white sm:grid-cols-2"
						>
							{benefits.map((benefit) => (
								<li key={benefit} className="flex gap-x-3">
									<CheckCircleIcon
										className="h-6 w-4 flex-none"
										aria-hidden="true"
									/>
									{benefit}
								</li>
							))}
						</ul>
						<div className="mt-10 flex pb-6 md:pb-0">
							<Link
								href="/contact"
								className="text-sm font-bold leading-6 text-primary-light"
							>
								Neem contact op{' '}
								<span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div
				className="pointer-events-none absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
				aria-hidden="true"
			>
				<div
					className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-primary via-brown-light/60 to-primary-light/50 opacity-25"
					style={{
						clipPath:
							'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
					}}
				/>
			</div>
		</div>
	);
};
export default BlurCtaBanner;
