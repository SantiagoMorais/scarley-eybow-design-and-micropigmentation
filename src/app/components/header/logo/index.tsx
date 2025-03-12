"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import logo from "@/assets/logo.png";
import { Separator } from "@/components/ui/separator";
import { useThemeToggler } from "@/contexts/theme-toggler-context";
import { ILogoProps } from "@/core/interfaces/logo-props";

export const Logo = ({ invert, imageClassName, textClassName }: ILogoProps) => {
  const { isThemeDark } = useThemeToggler();

  return (
    <section
      className={`flex items-center select-none ${invert ? "flex-col gap-0" : "gap-2"}`}
    >
      <div
        className={twMerge(
          `relative size-12 ${invert && "mb-1.5"}`,
          imageClassName
        )}
      >
        <Image
          src={logo}
          fill
          alt="logo"
          className={`object-contain duration-0 ${isThemeDark && "invert"}`}
        />
      </div>
      <Separator className={`bg-foreground ${!invert && "hidden"}`} />
      <h1
        className={twMerge(
          "font-family-cactus-classical flex flex-col gap-0.5 text-xl leading-none tracking-widest uppercase duration-0",
          textClassName
        )}
      >
        <span>Scarlety</span>
        <span>Bozzi</span>
      </h1>
    </section>
  );
};
