import CustomCursor from './CustomCursor';
import Header from './Header';

const Layout = ({ children, ...rest }: any) => {
	return (
		<>
			<Header />
			<CustomCursor />
			<main {...rest}>{children}</main>
		</>
	);
};
export default Layout;
