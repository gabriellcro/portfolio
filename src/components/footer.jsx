import { useIsMobile } from "@/hooks/useMobile";
import { Button } from "./ui/button";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const data = [
  {
    title: "Github",
    icon: <Github />,
    link: "https://github.com/gabriellcro",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/gabriellcro_",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/gabriellcro",
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    link: "https://x.com/gabriellcro_",
  },
];

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer className="flex items-center justify-center w-full p-5 text-primary">
      {isMobile
        ? data.map((item, idx) => (
            <Button key={idx} variant="ghost" size="icon">
              <a href={item.link} target="_blank">
                {item.icon}
              </a>
            </Button>
          ))
        : data.map((item, idx) => (
            <TooltipProvider key={idx}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <a href={item.link} target="_blank">
                      {item.icon}
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
    </footer>
  );
}
