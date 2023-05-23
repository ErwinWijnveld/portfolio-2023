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
				'rounded-full border border-inherit p-3 text-center font-medium ' +
				className
			}
		>
			{children}
		</Component>
	);
};
export default Button;
