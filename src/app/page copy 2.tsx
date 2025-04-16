import AnimationContainer from "@/components/AnimationContainer";
import { BorderBeam } from "@/components/BorderBeam";
import { Hero } from "@/components/Hero";
import MagicBadge from "@/components/MagicBadge";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Pricing } from "@/components/Pricing";
import Templates from "@/components/Templates";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: 'Web apps nouvelle génération | Vous méritez mieux qu’un site vitrine',
	description: 'Des fonctionnalités avancées, une interface d’exception, des performances optimisées. Nous concevons des applications web sur-mesure avec Next.js, alliant design et puissance.',
	openGraph: {
		title: 'Web apps nouvelle génération | Vous méritez mieux qu’un site vitrine',
		description: 'Des fonctionnalités avancées, une interface d’exception, des performances optimisées. Création d’applications web haut de gamme avec Next.js.',
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
		<main>
			{/* <Hero /> */}
			{/* <div className="overflow-x-hidden scrollbar-hide size-full"> */}

			<MaxWidthWrapper>
				<div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background ">

					<AnimationContainer delay={0.2} className="relative  px-2 bg-transparent w-full">
						<div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
						{/* <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow from-[rgb(109,40,217)] to-black"></div> */}

						<div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl overflow-hidden" id="template">
							<BorderBeam
								size={250}
								duration={12}
								delay={9}
							/>

							<Templates />


							{/* <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent z-40"></div>
							<div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div> */}
						</div>
					</AnimationContainer>

				</div>

			</MaxWidthWrapper >
			{/* </div> */}
			<MaxWidthWrapper className="py-10">
				<AnimationContainer delay={0.1}>
					<div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto" id="tarifs">
						<MagicBadge title="Tarification simple" />
						<h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
							Choisissez un plan qui vous convient
						</h2>
						<p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
							Get started with Linkify today and enjoy more features with our pro plans.
						</p>
					</div>
				</AnimationContainer>
				<AnimationContainer delay={0.2}>
					<Pricing />
				</AnimationContainer>
			</MaxWidthWrapper>

		</main>
	);
}
