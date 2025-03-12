import { useRef } from "react";

import { SheetClose } from "@/components/ui/sheet";
import { IRouteItemProps } from "@/core/interfaces/components/routes-list-props";

export const RouteItem = ({
  route,
  setPosition,
  insideASheet,
}: IRouteItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const handleOnMouseEnter = () => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
      top: ref.current.offsetTop, // the relative position to the father element
      height,
    });
  };

  const link = (
    <a
      href={route.path}
      className={`inline-block px-3 py-1.5 ${insideASheet ? "text-xl" : "text-base"}`}
    >
      {route.title}
    </a>
  );

  return (
    <li
      ref={ref}
      onMouseEnter={handleOnMouseEnter}
      className="relative z-30 block w-fit px-4"
    >
      {insideASheet ? <SheetClose>{link}</SheetClose> : link}
    </li>
  );
};
