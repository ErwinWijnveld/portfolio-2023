const BottomLink = ({
	as: Component = 'div',
	className,
	children,
	...rest
}: any) => {
	return (
		<Component
			{...rest}
			className={
				'flex items-center justify-between border-t  border-gray-800/20 px-7 pb-5 pt-5 text-sm font-medium uppercase ' +
				className
			}
		>
			{children}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="h-6 w-6 transition-transform duration-500 ease-in-out group-hover:translate-x-2"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>
		</Component>
	);
};
export default BottomLink;
