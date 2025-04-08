import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
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
			<Hero />
			<Pricing />
		</main>
	);
}
