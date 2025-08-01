import Customer from "@/components/block/home/customer";
import Faq from "@/components/block/home/faq";
import Hero from "@/components/block/home/hero";
import Highlight from "@/components/block/home/highlight";
import Keypoint from "@/components/block/home/keypoint";
import Mission from "@/components/block/home/mission";
import Review from "@/components/block/home/review";
import Solution from "@/components/block/home/solution";
import Timeline from "@/components/block/home/timeline";
import Why from "@/components/block/home/why";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { metadata as Metadata } from "@/app/layout";

export const metadata = Metadata;

export default function Home() {
	return (
		<div className="relative w-full h-full">
			<Header />
			<Hero />
			<Customer />
			<Highlight />
			<Review />
			<Mission />
			<Why />
			<Solution />
			<Timeline />
			<Faq />
			<Keypoint />
			<Footer />
		</div>
	);
}
