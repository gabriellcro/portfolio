"use client";

import { useCommandMenu } from "@/context/command-menu-context";
import { useNavigate } from "react-router-dom";

import { Home, User, Terminal, GraduationCap, Mail } from "lucide-react";

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

const data = [
  { title: "Home", link: "/", icon: <Home /> },
  { title: "Sobre mim", link: "/about", icon: <User /> },
  { title: "Projetos", link: "/projects", icon: <Terminal /> },
  { title: "Formação", link: "/graduation", icon: <GraduationCap /> },
  { title: "Contato", link: "/contact", icon: <Mail /> },
];

export default function CommandMenu() {
  const { isOpen, setIsOpen } = useCommandMenu();
  const navigate = useNavigate();

  const handleClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput placeholder="Pesquise..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup>
          {data.map((item, idx) => (
            <CommandItem key={idx} className="flex gap-3 w-full" asChild>
              <button onClick={() => handleClick(item.link)}>
                {item.icon} {item.title}
              </button>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
