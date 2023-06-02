import erwinguus from '@/assets/images/erwinguus.jpg';
import town from '@/assets/images/town.jpg';
import { blogsMeta } from '@/data/blogs';
import { projects, projectsMeta } from '@/data/projects.js';
import Image from 'next/image';
import Link from 'next/link';
import BottomLink from './BottomLink';
import Card from './Card';
import CircleLabel from './CircleLabel';
import Contact from './Contact';
import HorizontalCard from './HorizontalCard';
import VerticalCard from './VerticalCard';

const HomeHero = () => {
	return (
		<section className="container flex flex-col-reverse gap-2 lg:flex-row xl:h-[calc(100vh_-_82px)] xl:max-h-[1000px] xl:min-h-[670px]">
			<VerticalCard
				className="lg:min-h-unset min-h-[450px] w-full bg-primary-light lg:w-1/3"
				label="Uitgelicht Project"
				title={projectsMeta.featured?.title}
				imageSrc={projectsMeta.featured?.thumbnail?.image}
				imageAlt={projectsMeta.featured?.thumbnail?.alt}
				href={projectsMeta?.slug + '/' + projectsMeta.featured?.slug}
			/>
			<div className="flex w-full flex-col gap-2 lg:w-2/3">
				<HorizontalCard
					className="bg-primary"
					classNameImageCover="bg-primary"
					label="Over mij"
					title="Erwin <u>Wijnveld</u>."
					titleAs="h1"
					content="Als full stack developer met een specialisatie
					in <strong>modern design</strong> en
					<strong>interactiviteit</strong>, breng ik jouw
					website tot leven. Met mijn creatieve aanpak en
					technische vaardigheden zorg ik voor een
					boeiende gebruikerservaring."
					imageSrc={erwinguus}
					imageAlt="Erwin Wijnveld met een hond"
					href={'/over-mij'}
				/>
				<div className="flex flex-1 flex-col gap-2 md:flex-row">
					<Card
						className="min-h-[450px] w-full bg-brown md:min-h-0 md:w-1/2"
						classNameImageCover="bg-brown"
						title="blog"
						content="Ik schrijf blogartikelen over de meest
						recente ontwikkelingen op het gebied van
						software- en webontwikkeling."
						href={blogsMeta.slug}
						imageSrc={town}
						imageAlt={'Dorpje waar de informatie spreid'}
					/>
					<Contact className="w-full bg-brown-light md:w-1/2" />
				</div>
			</div>
		</section>
	);
};
export default HomeHero;
