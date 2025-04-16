import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

import Navbar from "@/components/Navbar";
import TanStackProvider from "@/components/providers/TanStackProvider";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AppliQ - Buy your App",
	description: "Learn how to integrate Stripe subscriptions with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
			<html lang="en" className="scrollbar" suppressHydrationWarning >
				<body
					className={cn(
						"min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",

					)}
				>

					<main className="mt-20 mx-auto w-full z-0 relative">
						{children}
					</main>
					{/* <TanStackProvider>

						<Navbar />
						
						<Footer />
					</TanStackProvider> */}ss

				</body>
			</html>
		// </ThemeProvider>
	);
}
