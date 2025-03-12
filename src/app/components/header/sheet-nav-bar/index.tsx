"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RoutesList } from "../routes-list";

export const SheetNavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden md:bg-black">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="[&>button]:top-8 [&>button]:right-8 [&>button]:scale-150"
      >
        <SheetHeader className="relative">
          <SheetTitle className="text-start text-2xl">Navegação</SheetTitle>
          <Separator />
          <RoutesList insideASheet />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
