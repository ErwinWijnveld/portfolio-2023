import Header from './Header';

const Layout = ({ children, ...rest }: any) => {
	return (
		<>
			<Header />
			<main {...rest}>{children}</main>
		</>
	);
};
export default Layout;
