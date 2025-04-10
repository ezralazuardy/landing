"use client";

import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import { useEffect } from "react";

export default function ArticleText({ content }) {
	useEffect(() => {
		const links = document.querySelectorAll(".content a");
		links.forEach((link) => {
			link.setAttribute("rel", "noopener noreferrer");
			link.setAttribute("target", "_blank");
		});
	}, []);

	return (
		<>
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-6 w-full">
					<div className="flex w-full" />
					<div
						className="content w-full col-span-4 text-neutral-600 leading-snug font-light text-md text-justify md:border-l md:border-r border-neutral-400 border-opacity-90 py-8"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
					<div className="flex w-full" />
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</>
	);
}
