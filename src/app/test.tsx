
import AnimationContainer from "@/components/AnimationContainer";
import { BorderBeam } from "@/components/BorderBeam";
import MagicBadge from "@/components/MagicBadge";
import MagicBadgeLink from "@/components/MagicBadgeLink";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Pricing } from "@/components/Pricing";
import Templates from "@/components/Templates";
import { Metadata } from "next";
import { templates,TemplateProps, pricingList, PricingProps, PopularPlanType } from "@/data";
import { notFound } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import PaymentLink from "@/components/PaymentLink";



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

export default function TemplatePage({ params }: { params: { templateId: string, templatename:string } }) {
    const current = templates.find(t => t.name === params.templatename);
    if (!current) {
        notFound();
    }
    const pricing = pricingList.find(p => p.id === current.priceplan);
    return (
        <>
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background ">

                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow pointer-events-none"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl overflow-hidden">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="p-4 rounded-lg">

                                    <h1 className=" font-bold text-4xl md:text-5xl text-center">
                                        {current?.title}
                                    </h1>
                                    <p className="p-4 ">{current?.des}</p>
                                    <MagicBadgeLink title="Voir le site live" link={current.link} />
                                    <div className="p-4"></div>
                                    <h2 className=" font-bold text-2xl md:text-3xl text-center p-4">
                                        CMS : {current?.cms}
                                    </h2>
                                    <MagicBadgeLink title="Voir le CMS" link={current.cmsurl} />
                                </div>
                                <div className="p-4 rounded-lg">
                                    <section id='pricing' className='container'>



                                        <Card
                                            key={pricing?.title}
                                            className={
                                                pricing?.popular === PopularPlanType.YES
                                                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                                                    : ""
                                            }
                                        >
                                            <CardHeader>
                                          
                                      
                                                <div className="bg-black text-white p-2 rounded-lg flex flex-col items-center justify-center min-h-[100px] w-full max-w-xs mx-auto shadow-lg hover:scale-105 transition-transform duration-300">
                                                    {/* <h3 className="text-2xl font-bold mb-4">Starter</h3> */}
                                                    <div className="text-xl bg-gray-900 text-gray-400 p-3 rounded-md font-semibold mb-2">
                                                        {pricing?.setupprice}	 € <span className="text-sm italic">setup</span>
                                                    </div>
                                                    <div className="text-gray-500 text-lg">+</div>
                                                    <div className="flex items-baseline">
                                                        <span className="text-4xl font-extrabold">{pricing?.price} €</span>
                                                        <span className="text-sm text-gray-500 ml-1">/mois</span>
                                                    </div>
                                                    {/* <p className="text-gray-300 text-sm mt-4 text-center">{pricing.benefitList[0]}</p> */}
                                                </div>
                                                {/* <CardDescription>{pricing?.description}</CardDescription> */}
                                            </CardHeader>

                                            <CardContent>
                                                {/* <Link href={pricing.href} className={buttonVariants()}>
										{pricing.buttonText}
									</Link> */}
                                                <PaymentLink
                                                    href={pricing?.href||""}
                                                    text="Acheter maintenant"
                                                    paymentLink={pricing?.paymentLink}
                                                    taille={2}
                                                />
                                            </CardContent>

                                       

                                          
                                        </Card>


                                    </section>
                                </div>
                            </div>




                        </div>
                    </AnimationContainer>

                </div>

            </MaxWidthWrapper >

        </>
    );
}