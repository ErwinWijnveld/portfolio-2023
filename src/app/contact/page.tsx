import ContactInfo from '@/components/ContactInfo';
import HomeHero from '@/components/HomeHero';
import Layout from '@/components/Layout';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Contact | Erwin Wijnveld - Freelance Web/App Developer',
	description:
		'Neem contact op met Erwin Wijnveld, een ervaren freelance web/app developer, voor al uw digitale projecten. Ontdek hoe ik u kan helpen bij het bouwen van professionele websites en mobiele applicaties. Laat ons samenwerken en uw ideeën tot leven brengen.',
};
export default function Contact() {
	return (
		<Layout>
			<ContactInfo />
		</Layout>
	);
}
