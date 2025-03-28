import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";

export default function Rnd() {
	return (
		<div className="flex flex-col w-full">
			<LayoutLine className="pt-8" />
			<HorizontalBorder />
			<LayoutLine>
				<div className="grid grid-cols-1 md:grid-cols-3 w-full">
					<div className="hidden md:flex flex-col w-full border-r border-neutral-400 border-opacity-90" />
					<div className="flex flex-col w-full md:col-span-2 p-8">
						<Title className="text-lg">Our Commitment to Technology</Title>
						<Paragraph className="text-xs md:text-sm text-justify mt-4">
							We always strive to provide the best solutions for our clients,
							with the latest technology and the best practices available out
							there. By standing on the shoulders of giants, following a
							industry-grade best practices, we aim provide the best solutions
							for our clients.
						</Paragraph>
						<Paragraph className="text-xs md:text-sm text-justify mt-4">
							We believe that modern technology should be accessible to anyone,
							any type of business, by any scale, that is affordable, and easy
							to use.
						</Paragraph>
					</div>
				</div>
			</LayoutLine>
			<HorizontalBorder />
		</div>
	);
}
