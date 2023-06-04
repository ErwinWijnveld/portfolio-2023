import Head from 'next/head';

const Meta = (props: any) => {
	return (
		<Head>
			<title>{props?.title}</title>
			{props?.description && (
				<meta name="description" content={props.description} />
			)}
		</Head>
	);
};
export default Meta;
