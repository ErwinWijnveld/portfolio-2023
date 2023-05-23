import erwinguus from '@/assets/images/erwinguus.jpg';
import { projects, projectsMeta } from '@/data/projects.js';
import Image from 'next/image';
import Link from 'next/link';
import BottomLink from './BottomLink';
import CircleLabel from './CircleLabel';
import Contact from './Contact';

const HomeHero = () => {
	const featuredProject = projects[0];

	return (
		<section className="container flex gap-2 xl:h-[calc(100vh_-_82px)] xl:max-h-[1000px] xl:min-h-[670px]">
			<div className="group flex w-1/3 flex-col rounded-4xl bg-primary-light">
				<div className="flex h-full flex-col p-3">
					<div className="p-4">
						<CircleLabel className="mb-6 block w-max">
							Uitgelicht Project
						</CircleLabel>
						<h2 className="mb-2">{featuredProject?.title}</h2>
					</div>
					<div className="relative h-40 w-full flex-1 overflow-hidden rounded-3xl ">
						<div className="absolute inset-0 z-10 bg-primary-light opacity-50 mix-blend-color"></div>
						<Image
							src={featuredProject?.thumbnail?.image}
							alt={featuredProject?.thumbnail?.alt}
							className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
							fill
						/>
					</div>
				</div>
				<BottomLink
					className="mt-4"
					href={projectsMeta?.slug + '/' + featuredProject?.slug}
					as={Link}
				>
					Lees meer
				</BottomLink>
			</div>
			<div className="flex w-2/3 flex-col gap-2">
				<div className="group flex flex-col rounded-4xl bg-primary">
					<div className="flex grow gap-10 p-7">
						<div>
							<CircleLabel className="mb-6 block w-max">
								Over mij
							</CircleLabel>
							<h1 className="mb-6 lg:text-3xl">
								Erwin <u>Wijnveld</u>.
							</h1>
							<p className="m-0 text-sm uppercase">
								Als full stack developer met een specialisatie
								in <strong>modern design</strong> en{' '}
								<strong>interactiviteit</strong>, breng ik jouw
								website tot leven. Met mijn creatieve aanpak en
								technische vaardigheden zorg ik voor een
								boeiende gebruikerservaring.
							</p>
						</div>
						<div className="relative h-full w-[44%] shrink-0 overflow-hidden rounded-3xl ">
							<div className="absolute inset-0 z-10 bg-primary opacity-50 mix-blend-color"></div>
							<Image
								src={erwinguus}
								alt="Erwin Wijnveld"
								className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
								fill
								priority
							/>
						</div>
					</div>
					<BottomLink href={'/projecten'} as={Link}>
						Lees meer
					</BottomLink>
				</div>
				<div className="flex flex-1 gap-2">
					<div className="group flex w-1/2 flex-col rounded-4xl bg-brown">
						<div className="flex h-full flex-col p-3">
							<div className="relative w-full flex-1 overflow-hidden rounded-3xl">
								<div className="absolute inset-0 z-10 bg-brown opacity-50 mix-blend-color"></div>
								<Image
									src={featuredProject?.thumbnail?.image}
									alt={featuredProject?.thumbnail?.alt}
									className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
									fill
								/>
							</div>
							<div className="p-4">
								<h2 className="flex items-center justify-between text-4xl">
									Blog
									<div className="flex">
										<div className="h-6 w-6 rounded-full bg-brown-dark" />
										<div className="h-6 w-6 rounded-full bg-brown-dark" />
										<div className="h-6 w-6 rounded-full bg-brown-dark" />
									</div>
								</h2>
								<p className="text-xs uppercase">
									Ik schrijf blogartikelen over de meest
									recente ontwikkelingen op het gebied van
									software- en webontwikkeling.
								</p>
							</div>
						</div>
						<BottomLink href={'/blog'} as={Link}>
							Lees meer
						</BottomLink>
					</div>
					<Contact className="w-1/2 bg-brown-light" />
				</div>
			</div>
		</section>
	);
};
export default HomeHero;
