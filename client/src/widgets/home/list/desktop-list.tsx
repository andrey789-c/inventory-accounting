import { Boxes, Cloud, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type FeatureItem = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const features: FeatureItem[] = [
  {
    title: "Управление инвентарём",
    icon: <Boxes className="w-6 h-6" />,
    description: "Структурированное хранение и быстрый поиск",
  },
  {
    title: "Облачная синхронизация",
    icon: <Cloud className="w-6 h-6" />,
    description: "Ваши данные доступны из любого места",
  },
  {
    title: "Контроль доступа",
    icon: <Key className="w-6 h-6" />,
    description: "Безопасность и ограничения доступа",
  },
];

export const DesktopList = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Функции</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg py-0 transition-all rounded-2xl"
            >
              <CardContent className="p-3 lg:p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gray-100">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
