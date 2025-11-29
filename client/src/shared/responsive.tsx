'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FC, ReactNode } from "react";

interface IResponsiveProps {
  desktop: ReactNode
  mobile: ReactNode
}

export const Responsive: FC<IResponsiveProps> = ({ desktop, mobile }) => {

  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      {isMobile ? mobile : desktop}
    </>
  );
};
