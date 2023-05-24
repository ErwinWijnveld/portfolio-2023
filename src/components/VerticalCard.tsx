import Image from 'next/image';
import Link from 'next/link';
import BottomLink from './BottomLink';
import CircleLabel from './CircleLabel';

const VerticalCard = ({
	label,
	title,
	imageSrc,
	imageAlt,
	href,
	className,
	...rest
}: any) => {
	return (
		<div
			className={'group flex flex-col rounded-4xl ' + className}
			{...rest}
		>
			<div className="flex h-full flex-col p-3">
				<div className="p-4">
					<CircleLabel className="mb-4 block w-max">
						{label}
					</CircleLabel>
					<h2 className="mb-2">{title}</h2>
				</div>
				<div className="relative h-40 w-full flex-1 overflow-hidden rounded-3xl ">
					<div className="absolute inset-0 z-10 bg-primary-light opacity-60 mix-blend-color"></div>
					<Image
						src={imageSrc}
						alt={imageAlt}
						className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
						fill
					/>
				</div>
			</div>
			<BottomLink className="mt-4" href={href} as={Link}>
				Lees meer
			</BottomLink>
		</div>
	);
};
export default VerticalCard;
