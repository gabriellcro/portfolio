import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { TypographyMuted } from "./typography/typography-muted";

const data = [
  {
    title: "github",
    icon: Github,
    link: "https://github.com/gabriellcro",
  },
  {
    title: "linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/gabriellcro/",
  },
];

export default function ButtonGroup() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <TypographyMuted textContent="Redes Sociais" />
      <div className="grid grid-cols-2 items-center text-base gap-3">
        {data.map((item, idx) => {
          const Icon = item.icon;

          return (
            <Button
              key={idx}
              size="sm"
              variant="outline"
              className="flex items-center justify-center gap-2 capitalize font-mono"
              asChild
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Icon />
                <span>{item.title}</span>
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
