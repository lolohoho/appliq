"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";

type PaymentLinkProps = {
	href: string;
	paymentLink?: string;
	text: string;
	taille:number
};

const PaymentLink = ({ href, paymentLink, text, taille }: PaymentLinkProps) => {
	return (
		<Link
			href={href}
			// className={buttonVariants() }
			className={buttonVariants({ size: taille === 2 ? "xl" : "default" })}
			onClick={() => {
				if (paymentLink) {
					localStorage.setItem("stripePaymentLink", paymentLink);
				}
			}}
		>
			{text}
		</Link>
	);
};
export default PaymentLink;
