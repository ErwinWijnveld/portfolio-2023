import town from '@/assets/images/town.jpg';
import BottomLink from '@/components/BottomLink';
import CircleLabel from '@/components/CircleLabel';
import Contact from '@/components/Contact';
import Layout from '@/components/Layout';
import VerticalCard from '@/components/VerticalCard';
import { blogs } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';

const getData = async (slug: string) => {
	const page = blogs.find((page: any) => page.slug === slug);
	return page;
};

export async function generateStaticParams() {
	return blogs.map((page: any) => ({
		slug: page.slug,
	}));
}
const page = async ({ params: { slug } }: any) => {
	const page = (await getData(slug)) as any;

	// get 4 related blogs
	const relatedBlogs = blogs
		.filter((blog: any) => blog.slug !== slug)
		.reverse()
		.slice(0, 4);

	return (
		<Layout>
			<section className="container flex items-start gap-2">
				<div className="flex w-1/3 flex-col">
					<VerticalCard
						className="mb-2 aspect-[1.4] bg-brown"
						label="Blogartikelen"
						title="Gerelateerde artikelen"
						imageSrc={town}
						imageAlt="Dorpje waar de informatie spreid"
					/>
					{relatedBlogs?.map((blog, index) => (
						<div
							key={index}
							className="group mb-2 flex flex-col rounded-4xl bg-primary-light"
						>
							<>
								<div className="flex h-full flex-col p-3 pb-0">
									<div className="p-4 pb-0">
										<h3 className="max2lines mb-2">
											{blog?.title}
										</h3>
									</div>
								</div>
								<BottomLink
									className="mt-4 !py-3 text-xs"
									href={'/blogs/' + blog.slug}
									as={Link}
								>
									Lees meer
								</BottomLink>
							</>
						</div>
					))}
					<Contact className=" bg-brown-light" />
				</div>
				<div className="flex w-2/3 flex-col gap-2">
					{page?.thumbnail && (
						<div className="relative h-[300px] w-full overflow-hidden rounded-3xl ">
							<Image
								src={page?.thumbnail?.image}
								alt={page?.thumbnail?.alt}
								className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
								fill
							/>
						</div>
					)}

					<div className="flex-1 rounded-3xl bg-primary-light p-7">
						<CircleLabel className="mb-6 block w-max">
							Blogartikel
						</CircleLabel>
						<h1 className="lg:pr-60">{page?.title}.</h1>

						<div
							className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
							dangerouslySetInnerHTML={{ __html: page?.content }}
						/>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default page;
