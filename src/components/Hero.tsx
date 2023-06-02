'use client';
import Link from 'next/link';
import { useRef } from 'react';
import Button from './Button';

export default function Hero({ children }: any) {
	const mainreadRef = useRef(null) as any;

	function scrollToMain() {
		mainreadRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
	return (
		<>
			<section className="-z-10">
				<div className="relative isolate py-14">
					<div
						className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brown-light to-brown opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
					<div className="py-16 sm:py-20">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-2xl text-center">
								{children}
								<div className="mx-auto mt-10 grid max-w-[280px] grid-cols-1 items-center justify-center gap-x-6 gap-y-2 md:max-w-[500px] md:grid-cols-2">
									<Button
										as={Link}
										href="/contact"
										className="origin-right border-primary-light px-12 text-primary-light"
									>
										Neem contact op
									</Button>
									<Button
										onClick={() => scrollToMain()}
										as={'div'}
										className="origin-left border-primary-light bg-primary-light px-12"
									>
										Lees meer{' '}
										<span aria-hidden="true">→</span>
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div
						className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-light to-primary-dark opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
				</div>
			</section>
			<div ref={mainreadRef} />
		</>
	);
}
