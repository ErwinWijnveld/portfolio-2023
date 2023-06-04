import HomeHero from '@/components/HomeHero';
import Layout from '@/components/Layout';

export default function Home() {
	return (
		<Layout
			meta={{
				title: 'Erwin Wijnveld | Portfolio',
				description:
					'Mijn naam is Erwin Wijnveld. Als full stack developer met een specialisatie in modern design en interactiviteit, breng ik jouw website tot leven. Met mijn creatieve aanpak en technische vaardigheden zorg ik voor een boeiende gebruikerservaring.',
			}}
		>
			<HomeHero />
		</Layout>
	);
}
