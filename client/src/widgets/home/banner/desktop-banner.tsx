import { Button } from "@/components/ui/button";

export const DesktopBanner = () => {
	return (
		<div className="w-full h-screen relative overflow-hidden flex items-center justify-between">
			<div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-[#d6dae0] to-gray-600"></div>
			<div className="container mx-auto px-6 flex items-center justify-between">
				<div className="relative z-10 w-1/2 flex flex-col items-start justify-center text-left max-w-3xl">
					<h1 className="text-3xl  md:text-4xl lg:text-6xl font-bold mb-4 text-gray-900">
						Управляйте инвентарем просто и надежно
					</h1>
					<p className="text-lg max-w-2xl md:text-xl mb-8 text-gray-700 opacity-90">
						Inventory Tables Manager дает вам полный контроль над вашими
						запасами. Безопасное хранилище, быстрое редактирование и полная
						прозрачность — в одном месте.
					</p>

					<Button className="px-6 py-3 text-lg !text-white" asChild>
						<a href="/register">Попробовать</a>
					</Button>
				</div>

				{/* ПРАВЫЙ БЛОК — КАРТИНКА С ТЕНЬЮ И СВЕТОМ */}
				<div className="relative z-10 w-1/2 h-full flex items-center justify-center pr-0">
					<img
						src="/main-banner.png"
						className="h-[80%] max-w-full object-contain object-right "
						// style={{
						// 	boxShadow: "0 0 60px 20px rgba(255, 255, 255, 0.15)"
						// }}
						alt="Main banner"
					/>
				</div>
			</div>
		</div>
	);
};
