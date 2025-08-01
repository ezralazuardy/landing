"use client";

import Head from "next/head";
import { useEffect, useRef } from "react";

const VIDEO_FILENAME = "lexa";

export default function LEXAVideo() {
	const video = useRef(null);

	useEffect(() => {
		const _video = video?.current;
		let timer1;

		const handleVideoLoaded = () => {
			_video.play();
			timer1 = setTimeout(() => {
				_video.classList.add("opacity-100");
			});
		};

		if (_video) {
			_video.addEventListener("loadeddata", handleVideoLoaded);
			_video.load();
		}

		return () => {
			clearTimeout(timer1);
			if (_video) {
				_video.removeEventListener("loadeddata", handleVideoLoaded);
				_video.pause();
				_video.removeAttribute("src");
				_video.load();
			}
		};
	}, []);

	return (
		<>
			<Head>
				<link
					rel="preload"
					as="video"
					href={`/videos/cover/${VIDEO_FILENAME}.webm`}
					type="video/webm"
				/>
				<link
					rel="preload"
					as="video"
					href={`/videos/promotion/${VIDEO_FILENAME}.mp4`}
					type="video/mp4"
				/>
			</Head>
			<div className="flex items-center justify-center aspect-[9/16]">
				<div className="relative w-full h-full">
					<video
						ref={video}
						className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 aspect-[9/16]"
						preload="auto"
						autoPlay
						loop
						muted
						playsInline
					>
						<source
							src={`/videos/cover/${VIDEO_FILENAME}.webm`}
							type="video/webm"
						/>
						<source
							src={`/videos/promotion/${VIDEO_FILENAME}.mp4`}
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</>
	);
}
