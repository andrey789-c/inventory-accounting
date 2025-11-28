import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/shared/icons";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="w-full px-8 py-4 bg-gray-100 border-gray-500 border-b">
			<div className="container mx-auto px-6 flex items-center justify-between">
				<Link href="/" className="text-2xl w-20 font-bold tracking-tight">
					<img src="/logo.jpg" alt="logo" />
				</Link>

				{/* Navigation */}
				<nav className="hidden md:flex gap-8 text-lg">
					<Link
						href="#features"
						className="text-muted-foreground hover:text-foreground transition"
					>
						Функции
					</Link>
					<Link
						href="#pricing"
						className="text-muted-foreground hover:text-foreground transition"
					>
						Тарифы
					</Link>
					<Link
						href="#about"
						className="text-muted-foreground hover:text-foreground transition"
					>
						О нас
					</Link>
				</nav>

				{/* Auth Button */}
				<Button variant="default" className="rounded-xl px-6 py-2 text-base">
					Войти
				</Button>
			</div>
		</header>
	);
};
