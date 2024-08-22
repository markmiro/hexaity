"use client";

import {
  CheckCircledIcon,
  CheckIcon,
  ClipboardCopyIcon,
} from "@radix-ui/react-icons";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const emailBeforeAt = "contact";
const emailAfterAt = "hexaity.com";
const email = `${emailBeforeAt}@${emailAfterAt}`;

export function ContactButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen} delayDuration={200}>
        <TooltipTrigger asChild>
          <button
            className="flex gap-2  items-center rounded-full px-4 py-2 md:py-4 md:px-8 bg-white/80 text-black font-semibold transition-all hover:bg-white ring-0 ring-white/20 focus:ring-white/50 outline-none hover:ring-4 active:opacity-80 active:translate-y-px"
            onClick={() => {
              // copy email to clipboard
              navigator.clipboard.writeText(email);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
            }}
          >
            Email Us
            {copied ? (
              <CheckIcon className="size-4 fade-in zoom-in-25 animate-in" />
            ) : (
              <ClipboardCopyIcon
                className="size-4 fade-in slide-in-from-bottom-2 animate-in"
                onClick={() => {}}
              />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent sideOffset={6}>
          copy email: <code>{email}</code>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
