import { blogsMeta } from '@/data/blogs';
import Link from 'next/link';
import Button from './Button';

const Header = () => {
	return (
		<nav className="container py-2 text-primary-light">
			<div className="flex gap-1 rounded-full border border-primary-light p-1">
				<Button
					as={Link}
					href="/"
					className=" border-primary-dark bg-primary-dark px-28 "
				>
					Erwin Wijnveld
				</Button>
				<Button
					as={Link}
					href="/projecten"
					className=" bg-primary-light px-12  text-black"
				>
					Projecten
				</Button>
				<Button
					as={Link}
					href="/over-mij"
					className=" bg-transparent px-12 "
				>
					Over mij
				</Button>
				<Button
					as={Link}
					href={'/' + blogsMeta?.slug}
					className=" bg-transparent px-12 "
				>
					Blog
				</Button>
				<Button
					as={Link}
					href="/contact"
					className="ml-auto bg-transparent px-12"
				>
					Neem contact op
				</Button>
			</div>
		</nav>
	);
};
export default Header;
