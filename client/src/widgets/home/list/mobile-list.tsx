import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { Boxes, Cloud,  Key } from "lucide-react";

const features = [
	{
		title: "Управление инвентарём",
		icon: Boxes,
		description: "Структурированное хранение и быстрый поиск.",
	},
	{
		title: "Облачная синхронизация",
		icon: Cloud,
		description: "Ваши данные доступны из любого места.",
	},
	{
		title: "Контроль доступа",
		icon: Key,
		description: "Безопасность и ограничения доступа.",
	},
];

export const MobileList = () => {
	return (
		<section className="w-full py-12 px-4 md:hidden">
			<h2 className="text-3xl font-bold text-center mb-8">Функции</h2>

			<Accordion type="single" collapsible className="w-full space-y-2">
				{features.map((feature, index) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className="border border-gray-200 rounded-xl px-4"
					>
						<AccordionTrigger className="flex items-center justify-start gap-3 text-left">
							<feature.icon className="w-5 h-5 !rotate-0" />
							<span className="font-medium">{feature.title}</span>
						</AccordionTrigger>

						<AccordionContent className="text-gray-600 pb-4 pl-8">
							{feature.description}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};
