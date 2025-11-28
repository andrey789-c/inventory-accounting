import { Button } from "@/components/ui/button";

export const MobileBanner = () => {
	return <div className="w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center px-6 py-10 text-center">
	<h1 className="text-3xl font-bold mb-3">Your Project Title</h1>

	<p className="text-base max-w-sm mb-6 opacity-80">
		A collection of powerful, simple tools to help you build and launch
		projects faster.
	</p>

	<div className="flex flex-col w-full max-w-xs gap-5">
		<Button className="w-full py-3 text-lg !text-white" asChild>
			<a href="/register">Sign Up</a>
		</Button>
		<Button
			variant="outline"
			className="w-full py-3 text-lg border-gray-300 text-gray-900"
			asChild
		>
			<a href="/login">Log In</a>
		</Button>
	</div>
</div>;
	
};
