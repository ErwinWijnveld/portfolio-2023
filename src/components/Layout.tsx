import CustomCursor from './CustomCursor';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

const Layout = ({ children, meta, ...rest }: any) => {
	return (
		<>
			<Meta {...meta} />
			<Header />
			<CustomCursor />
			<main {...rest}>{children}</main>
			<Footer />
		</>
	);
};
export default Layout;
