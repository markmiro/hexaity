"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";

const emailBeforeAt = "contact";
const emailAfterAt = "hexaity.com";
const email = `${emailBeforeAt}@${emailAfterAt}`;
const link = `mailto:${email}`;

export function ContactButton() {
  return (
    <a
      className="flex gap-2  items-center rounded-full px-4 py-2 md:py-4 md:px-8 bg-white/80 text-black font-semibold transition-all hover:bg-white ring-0 ring-white/20 focus:ring-white/50 outline-none hover:ring-4 active:opacity-80 active:translate-y-px"
      href={link}
    >
      Email Us <ArrowRightIcon className="size-4" />
    </a>
  );
}
