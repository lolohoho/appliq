import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import PaymentLink from "@/components/PaymentLink";
import { pricingList, PopularPlanType, PricingProps } from "@/data";


export const Pricing = () => {
	return (
		<section id='tarifs' className='container py-24 sm:py-32' >
			<h2 className='text-3xl md:text-4xl font-bold text-center'>
			Choisissez votre 
				<span className='bg-gradient-to-b from-[#667EEA] to-[#764BA2] uppercase text-transparent bg-clip-text'>
					{" "}
					formule{" "}
				</span>
				
			</h2>
			<h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
			Quel que soit votre projet, nous avons une offre adaptée à vos besoins et à votre budget.
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{pricingList.map((pricing: PricingProps) => (
					<Card
						key={pricing.title}
						className={
							pricing.popular === PopularPlanType.YES
								? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
								: ""
						}
					>
						<CardHeader>
							<CardTitle className='flex item-center justify-center'>
								{pricing.title}
								{pricing.popular === PopularPlanType.YES ? (
									<Badge variant='secondary' className='text-sm text-primary mx-2'>
										Most popular
									</Badge>
								) : null}
							</CardTitle>
							{/* <div>
								<span className='text-3xl font-bold'>{pricing.price}€</span>
								<span className='text-muted-foreground'> {pricing.billing}</span>
							</div> */}
							{/* <div className="bg-black text-white p-6 rounded-lg flex flex-col items-center justify-center min-h-[150px] w-full max-w-xs mx-auto shadow-lg hover:scale-105 transition-transform duration-300">
								
								<div className="bg-gray-900 p-4 rounded-md text-xl text-gray-400 font-semibold mb-2">
									79 € <span className="text-sm italic">setup</span>
								</div>
								
								<div className="text-gray-500 text-lg">+</div>
								
								<div className="flex items-baseline">
									<span className="text-4xl font-extrabold">9 €</span>
									<span className="text-sm text-gray-500 ml-1">/mois</span>
								</div>
							</div> */}
							<div className=" text-white p-4 rounded-lg flex flex-col items-center justify-center min-h-[250px] w-full max-w-xs mx-auto shadow-lg hover:scale-105 transition-transform duration-300">
								{/* <h3 className="text-2xl font-bold mb-4">Starter</h3> */}
								<div className="text-xl bg-gray-900 text-gray-400 p-3 rounded-md font-semibold mb-2">
								{pricing.setupprice}	 € <span className="text-sm italic">setup</span>
								</div>
								<div className="text-gray-500 text-lg">+</div>
								<div className="flex items-baseline">
									<span className="text-4xl font-extrabold">{pricing.price} €</span>
									<span className="text-sm text-gray-500 ml-1">/mois</span>
								</div>
								{/* <p className="text-gray-300 text-sm mt-4 text-center">{pricing.benefitList[0]}</p> */}
							</div>
							<CardDescription>{pricing.description}</CardDescription>
						</CardHeader>

						<CardContent>
							{/* <Link href={pricing.href} className={buttonVariants()}>
								{pricing.buttonText}
							</Link> */}
							<PaymentLink
								href={pricing.href}
								text={pricing.buttonText}
								paymentLink={pricing.paymentLink}
								taille={2}

							/>
						</CardContent>

						<hr className='w-4/5 m-auto mb-4' />

						<CardFooter className='flex'>
							<div className='space-y-4'>
								{pricing.benefitList.map((benefit: string) => (
									<span key={benefit} className='flex'>
										<Check className='text-purple-500' /> <h3 className='ml-2'>{benefit}</h3>
									</span>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
