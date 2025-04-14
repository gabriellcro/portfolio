"use client";

import { useIsMobile } from "@/hooks/useMobile";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Button } from "./ui/button";
import { TypographyInlineCode } from "./typography/typography-inline-code";

import {
  Command,
  Home,
  User,
  Terminal,
  GraduationCap,
  Mail,
  MoveRight,
} from "lucide-react";

const data = [
  { title: "home", link: "/", icon: <Home /> },
  { title: "sobre mim", link: "/about", icon: <User /> },
  { title: "projetos", link: "/projects", icon: <Terminal /> },
  { title: "formação", link: "/graduation", icon: <GraduationCap /> },
  { title: "contato", link: "/contact", icon: <Mail /> },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <Button variant="ghost" onClick={handleClick}>
        <span>{isMobile ? "Toque para começar" : "Pressione"} </span>

        {isMobile ? (
          <MoveRight />
        ) : (
          <TypographyInlineCode
            content={
              <div className="flex items-center gap-1">
                <Command className="w-4 h-4" />
                <span className="ml-1">K</span>
              </div>
            }
          />
        )}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Pesquise..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup>
            {data.map((item, idx) => (
              <CommandItem key={idx} className="flex capitalize gap-3">
                {item.icon} {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
