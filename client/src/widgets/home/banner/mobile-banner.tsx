import { Button } from "@/components/ui/button";

export const MobileBanner = () => {
	return (
		<div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between bg-gradient-to-b from-gray-100 via-[#d6dae0] to-gray-600 px-5 pt-40 py-10">

			{/* ТЕКСТ */}
			<div className="flex flex-col items-start text-left z-10">
				<h1 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">
					Управляйте инвентарем
					<br /> просто и надежно
				</h1>

				<p className="text-base text-gray-700 opacity-90 mb-6">
					Inventory Tables Manager дает полный контроль над вашими запасами —
					безопасное хранилище, быстрое редактирование и прозрачность.
				</p>

				<Button className="px-6 py-3 text-base !text-white" asChild>
					<a href="/register">Попробовать</a>
				</Button>
			</div>

			{/* КАРТИНКА — ВСЕГДА ВНИЗУ */}
			<div className="w-full h-[400px] flex justify-center mt-10">
				<img
					src="/main-banner.png"
					alt="Main banner"
					className="w-full max-w-sm object-contain"
				/>
			</div>
		</div>
	);
};
