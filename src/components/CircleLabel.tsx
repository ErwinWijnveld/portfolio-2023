const CircleLabel = ({ children, className, ...rest }: any) => {
	return (
		<span
			className={
				'rounded-full border border-brown-dark px-2 pt-px  uppercase leading-[1.2] ' +
				className
			}
		>
			{children}
		</span>
	);
};
export default CircleLabel;
