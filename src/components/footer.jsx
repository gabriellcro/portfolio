import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const data = [
  {
    icon: <Github />,
    link: "https://github.com/gabriellcro",
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/gabriellcro/",
  },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full p-5">
      {data.map((item, idx) => (
        <Button key={idx} variant="ghost" size="icon" asChild>
          <a href={item.link} target="_blank">
            {item.icon}
          </a>
        </Button>
      ))}
    </footer>
  );
}
