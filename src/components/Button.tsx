const Button = ({
	as: Component = 'div',
	className,
	children,
	...rest
}: any) => {
	return (
		<Component
			{...rest}
			className={
				'rounded-full border border-inherit p-2 text-center font-medium lg:p-3 ' +
				className
			}
		>
			{children}
		</Component>
	);
};
export default Button;
