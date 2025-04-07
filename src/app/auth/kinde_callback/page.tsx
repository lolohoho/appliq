"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { checkAuthStatus } from "./actions";
import { useEffect } from "react";

const Page = () => {
	const router = useRouter();
	const { user } = useKindeBrowserClient();
	const { data } = useQuery({
		queryKey: ["checkAuthStatus"],
		queryFn: async () => await checkAuthStatus(),
		retry: 2, // Réessayer si échec
		staleTime: 1000, // Attendre 1 seconde avant de considérer les données obsolètes
	});

	useEffect(() => {
		console.log("Data from checkAuthStatus:", data);
		console.log("User from client:", user);
		if (!data) return;

		const stripePaymentLink = localStorage.getItem("stripePaymentLink");
		if (data.success && stripePaymentLink && user?.email) {
			console.log("Redirecting to Stripe:", stripePaymentLink);
			localStorage.removeItem("stripePaymentLink");
			router.push(stripePaymentLink + `?prefilled_email=${user.email}`);
		} else if (data.success) {
			console.log("Redirecting to /dashboard");
			router.push("/dashboard");
		} else if (data.success === false) {
			console.log("Redirecting to / due to failure");
			router.push("/");
		}
	}, [router, user, data]);
	return (
		<div className='mt-20 w-full flex justify-center'>
			<div className='flex flex-col items-center gap-2'>
				<Loader className='w-10 h-10 animate-spin text-primary' />
				<h3 className='text-xl font-bold'>Redirecting...</h3>
				<p>Please wait...</p>
			</div>
		</div>
	);
};
export default Page;