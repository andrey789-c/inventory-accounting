import { Button } from "@/components/ui/button";

export const DesktopBanner = () => {
	return (
		<div className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden flex flex-col items-center justify-center px-4 text-center">
			<h1 className="text-4xl md:text-6xl font-bold mb-4">
				Your Project Title
			</h1>
			<p className="text-lg md:text-xl max-w-2xl mb-8 opacity-80">
				A collection of powerful, easy‑to‑use tools designed to help developers
				build faster, work smarter, and launch projects with confidence.
			</p>

			<div className="flex flex-col sm:flex-row gap-4">
				<Button className="px-6 py-3 text-lg" asChild>
					<a href="/register">Sign Up</a>
				</Button>
				<Button variant="outline" className="px-6 py-3 text-lg !text-black" asChild>
					<a className="" href="/login">Log In</a>
				</Button>
			</div>
		</div>
	);
};
