"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  ICursorPosition,
  IRoutesListProps,
} from "@/core/interfaces/components/routes-list-props";

import { Cursor } from "./cursor";
import { RouteItem } from "./route-item";
import { navBarRoutes } from "./routes";

export const RoutesList = ({ insideASheet, className }: IRoutesListProps) => {
  const [position, setPosition] = useState<ICursorPosition>({
    top: 0,
    left: 0,
    width: 0,
    opacity: 0,
    height: 0,
  });

  const handleOnMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <ul
      onMouseLeave={handleOnMouseLeave}
      className={twMerge(
        "relative flex flex-col items-center gap-4 pt-8 md:mx-auto md:flex-row md:justify-center md:gap-0 md:pt-0",
        className
      )}
    >
      {navBarRoutes.map((route) => (
        <RouteItem
          key={route.title}
          route={route}
          setPosition={setPosition}
          insideASheet={insideASheet}
        />
      ))}
      <Cursor position={position} />
    </ul>
  );
};
