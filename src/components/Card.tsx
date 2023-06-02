import Image from 'next/image';
import Link from 'next/link';
import BottomLink from './BottomLink';
import CircleLabel from './CircleLabel';

const Card = ({
	title,
	imageSrc,
	imageAlt,
	href,
	content,
	className,
	classNameImageCover,
	classNameTitle,
	...rest
}: any) => {
	return (
		<div
			className={'group flex flex-col rounded-4xl ' + className}
			{...rest}
		>
			<div className="flex h-full flex-1 flex-col p-3">
				{imageSrc && (
					<div className="relative w-full flex-1 overflow-hidden rounded-3xl">
						<div
							className={
								'absolute inset-0 z-10 opacity-50 mix-blend-color ' +
								classNameImageCover
							}
						></div>
						<Image
							src={imageSrc}
							alt={imageAlt}
							className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
							fill
						/>
					</div>
				)}
				<div className="p-4">
					<h2
						className={
							'flex flex-col-reverse justify-between gap-4 md:flex-row md:items-center md:gap-0 lg:text-4xl ' +
							classNameTitle
						}
					>
						{title}
						<div className="flex">
							<div className="h-6 w-6 rounded-full bg-brown-dark" />
							<div className="h-6 w-6 rounded-full bg-brown-dark" />
							<div className="h-6 w-6 rounded-full bg-brown-dark" />
						</div>
					</h2>
					<p className="m-0 text-xs uppercase">{content}</p>
				</div>
			</div>
			<BottomLink className="mt-4" href={href} as={Link}>
				Lees meer
			</BottomLink>
		</div>
	);
};
export default Card;
