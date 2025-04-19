"use client";

import { useCommandMenu } from "@/context/command-menu-context";
import { useNavigate } from "react-router-dom";

import {
  Home,
  User,
  Terminal,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

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

const menu = [
  { title: "Home", link: "/", icon: <Home /> },
  { title: "Sobre mim", link: "/about", icon: <User /> },
  { title: "Projetos", link: "/projects", icon: <Terminal /> },
  { title: "Contato", link: "/contact", icon: <Mail /> },
];

const socials = [
  {
    title: "Github",
    link: "https://github.com/gabriellcro",
    icon: <Github />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/gabriellcro_",
    icon: <Instagram />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/gabriellcro",
    icon: <Linkedin />,
  },
  {
    title: "Twitter",
    link: "https://x.com/gabriellcro_",
    icon: <Twitter />,
  },
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
        <CommandGroup heading="Menu">
          {menu.map((item, idx) => (
            <CommandItem key={idx} className="flex gap-3 w-full" asChild>
              <button onClick={() => handleClick(item.link)}>
                {item.icon} {item.title}
              </button>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Redes sociais">
          {socials.map((item, idx) => (
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
