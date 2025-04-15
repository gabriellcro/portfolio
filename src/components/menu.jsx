import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { TypographyMuted } from "./typography/typography-muted";

const data = [
  { title: "projetos", link: "/projects" },
  { title: "sobre mim", link: "/about" },
  { title: "formação", link: "/graduation" },
  { title: "contato", link: "/contact" },
];

export default function Menu() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <TypographyMuted textContent="Menu" />
      {data.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="flex justify-between capitalize font-mono group"
          asChild
        >
          <a href={item.link} rel="noopener noreferrer">
            {item.title}
            <ChevronRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </Button>
      ))}
    </div>
  );
}
