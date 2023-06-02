import CustomCursor from './CustomCursor';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, ...rest }: any) => {
	return (
		<>
			<Header />
			<CustomCursor />
			<main {...rest}>{children}</main>
			<Footer />
		</>
	);
};
export default Layout;
