import HeroVideo from "@/components/block/home/hero-video";
import { Button } from "@/components/ui/button";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Hero() {
	return (
		<LayoutLine className="pt-[14vh] md:pt-[22vh] px-8">
			<Title className="text-3xl md:text-6xl text-justify">
				We Build What the World Hasn&apos;t Seen Yet.
			</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 w-full mt-8 md:mt-8">
				<div className="w-full flex space-x-2 justify-start">
					<Button size="lg" variant="default" asChild>
						<Link href="/inquiry">Start a Project</Link>
					</Button>
					<Button size="lg" variant="link" asChild>
						<Link
							href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							Talk to Us
						</Link>
					</Button>
				</div>
				<div className="w-full flex justify-end mt-8 md:mt-0">
					<Paragraph className="text-sm">
						We&apos;re the most respected tech firm in Central Java that gets
						your challenges and uses the best tech in industries to help you.
					</Paragraph>
				</div>
			</div>
			<div className="flex w-full h-full aspect-video mt-10 md:mt-2">
				<HeroVideo />
			</div>
		</LayoutLine>
	);
}
