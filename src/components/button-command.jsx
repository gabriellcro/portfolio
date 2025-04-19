"use client";

import { useIsMobile } from "@/hooks/useMobile";
import { useCommandMenu } from '@/context/command-menu-context';

import { Button } from "./ui/button";
import { TypographyInlineCode } from "./typography/typography-inline-code";
import { ArrowRight } from "lucide-react";

export default function ButtonCommand() {
  const isMobile = useIsMobile();
  const { setIsOpen } = useCommandMenu();

  return (
    <Button
      variant="ghost"
      className="flex gap-1 items-center text-center group"
      onClick={() => setIsOpen(true)}
    >
      {isMobile ? (
        <span>Clique</span>
      ) : (
        <>
          <span>Pressione</span>
          <TypographyInlineCode content="ctrl K" />
        </>
      )}
      <span>para iniciar</span>
      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
    </Button>
  );
}
