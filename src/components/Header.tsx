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
					className=" flex-1 border-primary-dark bg-primary-dark text-sm sm:text-base lg:flex-none lg:px-16 xl:px-28 "
				>
					Erwin Wijnveld
				</Button>
				{/* <Button
					as={Link}
					href="/projecten"
					className=" hidden bg-transparent duration-200 hover:bg-primary-light hover:text-primary-dark hover:transition-all lg:flex lg:px-12"
				>
					Projecten
				</Button> */}
				<Button
					as={Link}
					href="/over-mij"
					className=" hidden bg-transparent duration-200 hover:bg-primary-light hover:text-primary-dark hover:transition-all lg:flex lg:px-12"
				>
					Over mij
				</Button>
				<Button
					as={Link}
					href={'/' + blogsMeta?.slug}
					className=" hidden bg-transparent duration-200 hover:bg-primary-light hover:text-primary-dark hover:transition-all lg:flex lg:px-12"
				>
					Blog
				</Button>
				<Button
					as={Link}
					href="/contact"
					className="ml-auto hidden bg-transparent duration-200 hover:bg-primary-light hover:text-primary-dark hover:transition-all lg:flex lg:px-12"
				>
					Neem contact op
				</Button>
				<Button className="ml-auto flex bg-transparent px-8 text-sm sm:text-base lg:hidden">
					Menu
				</Button>
			</div>
		</nav>
	);
};
export default Header;
