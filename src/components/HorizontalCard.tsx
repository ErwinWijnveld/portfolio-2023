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
			<div className="flex grow flex-col gap-4 p-7 md:flex-row md:gap-10">
				<div className="md:pb-2">
					<CircleLabel className="mb-4 block w-max">
						{label}
					</CircleLabel>
					<TitleComponent
						className="md:mb-6 lg:text-3xl"
						dangerouslySetInnerHTML={{ __html: title }}
					/>
					<p
						className="m-0 text-sm uppercase"
						dangerouslySetInnerHTML={{ __html: content || '' }}
					/>
				</div>
				<div className="relative -ml-4 h-[250px] w-[calc(100%_+_32px)] shrink-0 overflow-hidden rounded-3xl md:ml-0 md:h-full md:w-[44%] ">
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
