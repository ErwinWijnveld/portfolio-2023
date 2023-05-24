import Image from 'next/image';
import Link from 'next/link';
import BottomLink from './BottomLink';
import CircleLabel from './CircleLabel';

const HorizontalCard = ({
	label,
	title,
	imageSrc,
	imageAlt,
	classNameImageCover,
	href,
	content,
	className,
	titleAs: TitleComponent = 'h2',
	...rest
}: any) => {
	return (
		<div
			className={'group flex flex-col rounded-4xl ' + className}
			{...rest}
		>
			<div className="flex grow gap-10 p-7">
				<div className="pb-2">
					<CircleLabel className="mb-4 block w-max">
						{label}
					</CircleLabel>
					<TitleComponent
						className="mb-6 lg:text-3xl"
						dangerouslySetInnerHTML={{ __html: title }}
					/>
					<p
						className="m-0 text-sm uppercase"
						dangerouslySetInnerHTML={{ __html: content || '' }}
					/>
				</div>
				<div className="relative h-full w-[44%] shrink-0 overflow-hidden rounded-3xl ">
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
						priority
					/>
				</div>
			</div>
			<BottomLink className="mt-0" href={href} as={Link}>
				Lees meer
			</BottomLink>
		</div>
	);
};
export default HorizontalCard;
