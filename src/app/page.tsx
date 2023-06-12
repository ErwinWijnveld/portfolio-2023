import HomeHero from '@/components/HomeHero';
import Layout from '@/components/Layout';
import Options from '@/components/Options';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Freelance Web/App Developer in Arnhem | Supermoderne websites en apps | Erwin Wijnveld',
	description:
		'Ontdek mijn expertise in ontwikkeling en design! Ik ben een freelance web/app developer in Arnhem, gespecialiseerd in het ontwerpen en ontwikkelen van supermoderne websites en apps. Bekijk mijn portfolio en ontdek hoe ik boeiende digitale ervaringen kan creëren die perfect aansluiten bij jouw wensen.',
};

export default function Home() {
	return (
		<Layout>
			<HomeHero />
			<Options />
		</Layout>
	);
}
