import { FC, ReactNode } from "react";

interface IResponsiveProps {
  desktop: ReactNode
  mobile: ReactNode
}

export const Responsive:FC<IResponsiveProps> = ({desktop, mobile}) => {
	return (
		<>
			{/* Desktop version visible on md+ screens */}
			<div className="hidden md:block">
				{desktop}
			</div>

			{/* Mobile version visible on sm screens */}
			<div className="block md:hidden">
				{mobile}
			</div>
		</>
	);
};
