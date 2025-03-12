import { tv } from "tailwind-variants";

export const header = tv({
  base: "flex w-full max-w-(--breakpoint-2xl) items-center justify-between p-4 transition-all duration-300 z-50",
  variants: {
    scroll: {
      primary:
        "fixed bg-accent/60 rounded-lg shadow-md border-x-6 border-transparent backdrop-blur-sm mt-4 duration-300 z-50",
    },
  },
});
