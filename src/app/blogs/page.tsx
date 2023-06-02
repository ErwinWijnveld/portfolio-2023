import town from '@/assets/images/town.jpg';
import Card from '@/components/Card';
import Hero from '@/components/Hero';
import HorizontalCard from '@/components/HorizontalCard';
import Layout from '@/components/Layout';
import VerticalCard from '@/components/VerticalCard';
import { blogs, blogsMeta } from '@/data/blogs';
import { projectsMeta } from '@/data/projects';

const page = () => {
	// reverse blog array
	const blogsReversed = [...blogs].reverse();
	return (
		<Layout>
			<Hero>
				<h1 className=" tracking-tight text-primary-light sm:text-6xl">
					Blogartikelen
				</h1>
				<p className="mt-6  leading-6 text-primary-light/75">
					Ik schrijf blogartikelen over de alles wat temaken heeft met
					webdevelopment en design. De nieuwste technieken, mijn
					ervaringen en mijn visie op de toekomst.
				</p>
			</Hero>
			<div className="container grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
				{blogsReversed?.map((blog: any, index) => {
					const first = index === 0;
					if (first) {
						return (
							<HorizontalCard
								className={'bg-primary-light sm:col-span-2'}
								label="Laatste blogartikel"
								title={blog.title}
								imageSrc={town}
								imageAlt="Dorpje waar de informatie spreid"
								href={blogsMeta.slug + '/' + blog.slug}
							/>
						);
					}
					return (
						<Card
							// randomize bg brown and bg primary
							className={
								Math.random() < 0.5 ? 'bg-brown' : 'bg-primary'
							}
							classNameTitle="lg:!text-2xl -mb-4"
							classNameImageCover="bg-brown"
							title={blog.title}
							content={blog.description}
							href={blogsMeta.slug + '/' + blog.slug}
						/>
					);
				})}
			</div>
		</Layout>
	);
};
export default page;
