import erwinguus from '@/assets/images/erwinguus.jpg';
import Card from '@/components/Card';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import HorizontalCard from '@/components/HorizontalCard';
import Layout from '@/components/Layout';
import VerticalCard from '@/components/VerticalCard';
import { blogs } from '@/data/blogs';
import { projectsMeta } from '@/data/projects';

const page = () => {
	return (
		<Layout>
			<Hero>
				<h1 className=" tracking-tight text-primary-light sm:text-6xl">
					Showcase van mijn projecten
				</h1>
				<p className="mt-6  leading-6 text-primary-light/75">
					Ontdek mijn diverse projecten: een boeiende showcase van
					mijn werk dat mijn vaardigheden en creativiteit
					weerspiegelt.
				</p>
			</Hero>
			<div className="container grid grid-cols-3 gap-2">
				{[...Array(5)].map((item, index) => {
					const divClass = `div${index + 1}`;
					const isBig = index === 0;
					const isSmall = index === 4;
					const isOtherColor = index === 1 || index === 3;
					const className = isOtherColor
						? 'bg-brown-light'
						: 'bg-primary';

					if (isBig) {
						return (
							<VerticalCard
								className={
									' bg-primary-light lg:min-h-[600px] ' +
									divClass
								}
								label="Development / Design"
								title={projectsMeta.featured?.title}
								imageSrc={
									projectsMeta.featured?.thumbnail?.image
								}
								imageAlt={projectsMeta.featured?.thumbnail?.alt}
								href={
									projectsMeta?.slug +
									'/' +
									projectsMeta.featured?.slug
								}
							/>
						);
					}

					if (isSmall) {
						return (
							<Card
								className=" bg-brown"
								classNameImageCover="bg-brown"
								title="blog"
								content="Ik schrijf blogartikelen over de meest
						recente ontwikkelingen op het gebied van
						software- en webontwikkeling."
								href="/blog"
								imageSrc={erwinguus}
								imageAlt={'Dorpje waar de informatie spreid'}
							/>
						);
					}

					// other
					return (
						<HorizontalCard
							className={className + ' min-h-[400px] ' + divClass}
							classNameImageCover={className}
							label="Over mij"
							title="Erwin <u>Wijnveld</u>."
							titleAs="h1"
							content="Als full stack developer met een specialisatie in <strong>modern design</strong> en <strong>interactiviteit</strong>, breng ik jouw website tot leven. Met mijn creatieve aanpak en technische vaardigheden zorg ik voor een boeiende gebruikerservaring."
							imageSrc={erwinguus}
							imageAlt="Erwin Wijnveld met een hond"
							href={'/over-mij'}
						/>
					);
				})}
			</div>
		</Layout>
	);
};
export default page;
