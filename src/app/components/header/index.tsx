"use client";
import { useEffect, useRef, useState } from "react";

import { header } from "@/style";

import { Logo } from "./logo";
import { RoutesList } from "./routes-list";
import { SheetNavBar } from "./sheet-nav-bar";
import { ThemeTogglerButton } from "./theme-toggler-button";

export const Header = () => {
  const [pageScrolled, setPageScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setPageScrolled(window.scrollY !== 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () =>
      headerRef.current && setHeaderHeight(headerRef.current.offsetHeight);

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <>
      {pageScrolled && <div style={{ height: `${headerHeight}px` }} />}{" "}
      {/* This div prevents content from shifting up when the header becomes fixed. */}
      <header
        ref={headerRef}
        className={pageScrolled ? header({ scroll: "primary" }) : header()}
      >
        <SheetNavBar />
        <Logo />
        <RoutesList insideASheet={false} className="hidden md:flex" />
        <ThemeTogglerButton />
      </header>
    </>
  );
};
