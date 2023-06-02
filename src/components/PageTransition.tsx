'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Expo, gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef } from 'react';

const PageTransition = ({ children }: any) => {
	const pathName = usePathname();
	const firstUpdate = useRef(true);

	useLayoutEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		// exit animation
		gsap.to('#small-cursor', 1, {
			width: 6,
			height: 6,
			ease: Expo.easeInOut,
		});
	}, [pathName]);

	const handleExitComplete = () => {
		console.log('handleExitComplete');
		window.scrollTo(0, 0);
		// enter animation
		gsap.to('#small-cursor', 1, {
			width: '100vw',
			height: '100vw',
			ease: Expo.easeInOut,
		});
	};

	return (
		<AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
			<motion.div
				key={pathName}
				transition={{
					duration: 1,
				}}
				exit={{
					x: 0,
				}}
				initial="initial"
				animate="animate"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
