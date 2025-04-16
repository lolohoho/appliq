import AnimationContainer from "@/components/AnimationContainer";
import { BorderBeam } from "@/components/BorderBeam";
import { Hero } from "@/components/Hero";
import MagicBadge from "@/components/MagicBadge";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Pricing } from "@/components/Pricing";
import Templates from "@/components/Templates";
import { Metadata } from "next";
import { LampContainer } from "@/components/ui/lamp"
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CreditCardIcon, StarIcon } from "lucide-react";

export const metadata: Metadata = {
	title: 'Web apps nouvelle génération | Vous méritez mieux qu&rbrace;un site vitrine',
	description: 'Des fonctionnalités avancées, une interface d&rbrace;exception, des performances optimisées. Nous concevons des applications web sur-mesure avec Next.js, alliant design et puissance.',
	openGraph: {
		title: 'Web apps nouvelle génération | Vous méritez mieux qu&rbrace;un site vitrine',
		description: 'Des fonctionnalités avancées, une interface d&rbrace;exception, des performances optimisées. Création d&rbrace;applications web haut de gamme avec Next.js.',
		url: 'https://appliq.fr',
		siteName: 'Ton Nom d’Agence',
		images: [
			{
				url: 'https://appliq.fr/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Web apps nouvelle génération',
			},
		],
		locale: 'fr_FR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Web apps nouvelle génération',
		description: 'Fonctionnalités avancées, interface d’exception, performances optimisées.',
		images: ['https://appliq.fr/og-image.jpg'],
		creator: '@tonhandle',
	},
};
export default function Home() {
	return (
		<main className="overflow-x-hidden scrollbar-hide size-full">

			<Hero />
			<MaxWidthWrapper>
				<div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background mt-8">

					<AnimationContainer delay={0.2} className="relative  px-2 bg-transparent w-full">
						<div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
					
						<div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl overflow-hidden" id="template">
							<BorderBeam
								size={250}
								duration={12}
								delay={9}
							/>
							<Templates />			
							<div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div> 
						</div>
					</AnimationContainer>
				</div>
			</MaxWidthWrapper >

			<MaxWidthWrapper className="py-10">
				<AnimationContainer delay={0.2} >
					<Pricing />
				</AnimationContainer>
			</MaxWidthWrapper>
			<MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden overflow-y-hidden scrollbar-hide">
				<AnimationContainer delay={0.1}>
					<LampContainer>
						<div className="flex flex-col items-center justify-center relative w-full text-center">
							<h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
							Next.js, React, Tailwind… et toute la puissance du web moderne
							</h2>
							<p className="text-muted-foreground mt-6 max-w-md mx-auto">
								Sites performants avec Next.js, React, Tailwind, Node.js, Radix UI & co.
								Une stack moderne, pour un impact réel."
							</p>
							<div className="mt-6">
								<Button>
									Demande personnalisée
									<ArrowRightIcon className="w-4 h-4 ml-2" />
								</Button>
							</div>
						</div>
					</LampContainer>
				</AnimationContainer>
			</MaxWidthWrapper>
		</main>
	);
}
