"use client";

import { cn } from "@/lib/utils";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useEventListener } from "usehooks-ts";

export function ScrollArrow() {
  const [isScrolled, setIsScrolled] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEventListener("scroll", onScroll);

  return (
    <DoubleArrowDownIcon
      className={cn(
        "size-4 absolute bottom-8 transition-opacity",
        !isScrolled && "animate-pulse",
        isScrolled && "opacity-20",
      )}
    />
  );
}
