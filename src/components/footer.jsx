import { Button } from "./ui/button";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    link: "https://github.com/gabriellcro",
    icon: <Github />,
  },
  {
    link: "https://www.instagram.com/gabriellcro_",
    icon: <Instagram />,
  },
  {
    link: "https://www.linkedin.com/in/gabriellcro",
    icon: <Linkedin />,
  },
  {
    link: "https://x.com/gabriellcro_",
    icon: <Twitter />,
  },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full p-5 text-primary">
      {socials.map((item, idx) => (
        <Button key={idx} variant="ghost" size="icon" asChild>
          <a href={item.link} target="_blank">
            {item.icon}
          </a>
        </Button>
      ))}
    </footer>
  );
}
