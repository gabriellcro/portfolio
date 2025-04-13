import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";

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
    <footer className="flex items-center justify-center w-full border-t-2 border-dotted px-5">
      <div className="border-x-2 border-dotted w-full items-center justify-center flex h-full max-w-[1920px] py-3 gap-3 sm:py-5">
        {data.map((item, idx) => (
          <Button key={idx} variant="ghost" size="icon" asChild>
            <a href={item.link} target="_blank">
              {item.icon}
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
}
