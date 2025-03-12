import { motion, TargetAndTransition } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { ICursorPosition } from "@/core/interfaces/components/routes-list-props";

interface ICursorProps {
  position: ICursorPosition;
  className?: string;
}

export const Cursor = ({ position, className }: ICursorProps) => (
  <motion.li
    animate={position as TargetAndTransition}
    className={twMerge("bg-secondary absolute z-0 rounded-xl", className)}
  />
);
