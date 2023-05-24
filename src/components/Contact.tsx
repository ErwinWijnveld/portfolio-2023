import erwinguus from '@/assets/images/erwinguus.jpg';
import profielfoto from '@/assets/images/profielfoto.jpg';
import Image from 'next/image';
import Link from 'next/link';
import BottomLink from './BottomLink';
import CircleLabel from './CircleLabel';

const Contact = ({ className, ...rest }: any) => {
	return (
		<div {...rest} className={'flex flex-col rounded-4xl ' + className}>
			<div className="flex-1 p-7">
				<div className=" flex items-start justify-between">
					<CircleLabel className="mb-4 block w-max">
						Contact
					</CircleLabel>
					<div className="relative -mt-2 aspect-square h-16  overflow-hidden rounded-full">
						<div className="absolute inset-0 z-10 bg-brown-light opacity-50 mix-blend-color"></div>
						<Image
							src={profielfoto}
							alt={'Erwin Wijnveld'}
							className="origin-top scale-150 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
							fill
						/>
					</div>
				</div>
				<h2>
					Neem <u>contact</u> op.
				</h2>
				<p className="text-xs uppercase">
					Heb je een vraag of wil je een project bespreken? Neem dan
					contact met mij op via de volgende kanalen:
				</p>
				<table className="mt-4 w-full text-xs uppercase">
					<tbody>
						<tr>
							<td className="border-t-2 border-brown-dark py-2">
								Telefoon
							</td>
							<td className="border-t-2 border-brown-dark py-2">
								<a href="tel:+31615207232">+31 6 15207232</a>
							</td>
						</tr>
						<tr>
							<td className="border-y-2 border-brown-dark py-2">
								E-mail
							</td>
							<td className="border-y-2 border-brown-dark py-2">
								<a href="mailto:info@erwinwijnveld.nl">
									info@erwinwijnveld.nl
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<BottomLink href={'tel:+31615207232'} as={Link}>
				Direct bellen
			</BottomLink>
		</div>
	);
};
export default Contact;
