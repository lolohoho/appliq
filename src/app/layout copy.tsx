import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import TanStackProvider from "@/components/providers/TanStackProvider";
import Footer from "@/components/Footer";

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
		<html lang='en' suppressHydrationWarning >
			<head>
				{process.env.NODE_ENV === 'development' && (
					<meta name="google" content="notranslate" />
				)}
			</head>
			{/* <body className="overflow-x-hidden" > */}
			<body className={`overflow-x-hidden ${inter.className}`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<TanStackProvider>

						<Navbar />
						{children}
						<Footer />
					</TanStackProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
