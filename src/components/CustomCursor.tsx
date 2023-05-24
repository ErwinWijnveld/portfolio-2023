'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
	const cursorRef = useRef(null);
	const cursorInnerRef = useRef(null);
	const smallCursorRef = useRef(null);

	useEffect(() => {
		// return if mobile
		if (typeof window === 'undefined') return;
		if (window.innerWidth < 1024) return;

		function scaleDashed(init: boolean) {
			if (init) {
				gsap.to(cursorRef.current, 0.5, {
					css: {
						scale: 1.5,
					},
				});
				gsap.to(cursorInnerRef.current, 0.5, {
					css: {
						borderStyle: 'dashed',
					},
				});
				return;
			}
			gsap.to(cursorRef.current, 0.5, {
				css: {
					scale: 1,
				},
			});
			gsap.to(cursorInnerRef.current, 0.5, {
				css: {
					borderStyle: 'solid',
				},
			});
		}

		function followCursor(e: any, speed: number, element?: any) {
			gsap.to(element, speed, {
				css: {
					left: e.clientX,
					top: e.clientY,
				},
			});
		}
		document.addEventListener('mousemove', (e: any) => {
			if (!cursorRef.current) return;
			followCursor(e, 0.5, cursorRef.current);
			followCursor(e, 0.05, smallCursorRef.current);

			// when hovering over a tag
			if (e?.target?.tagName === 'A') {
				scaleDashed(true);
			} else {
				scaleDashed(false);
			}
		});
		document.addEventListener('mousedown', (e) => {
			if (!cursorRef.current) return;
			scaleDashed(true);
		});

		document.addEventListener('mouseup', (e) => {
			if (!cursorRef.current) return;
			scaleDashed(false);
		});
	}, []);

	return (
		<>
			<div
				ref={smallCursorRef}
				className="pointer-events-none fixed -left-20 -top-20 z-[9999] flex h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light mix-blend-hard-light "
			/>
			{/* big circle */}
			<div
				ref={cursorRef}
				className="pointer-events-none fixed -left-20 -top-20 z-[9999] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 mix-blend-hard-light "
			>
				<div
					ref={cursorInnerRef}
					className="h-full w-full animate-spin-slower rounded-full border-[2px] border-primary-light"
				/>
			</div>
		</>
	);
};
export default CustomCursor;
