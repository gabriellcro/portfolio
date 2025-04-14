import ButtonGroup from "@/components/button-group";
import Menu from "@/components/menu";
import { ModeToggle } from "@/components/mode-toggle";
import { TypographyH3 } from "@/components/typography/typography-h3";
import { TypographyLead } from "@/components/typography/typography-lead";
import { TypographyMuted } from "@/components/typography/typography-muted";
import { Building2 } from "lucide-react";

export default function HomePage() {
  return (
    <section className="flex flex-col text-start items-center justify-center gap-12 max-w-md w-full m-auto p-8">
      <header className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Building2 size={16} />
          <TypographyMuted textContent="curitiba, pr" />
        </div>
        <ModeToggle />
      </header>
      <div className="flex flex-col gap-2 w-full">
        <TypographyH3 textContent="Gabriel Cavalcante" />
        <TypographyLead textContent="Desenvolvedor Front-end" />
      </div>
      <Menu />
      <ButtonGroup />
    </section>
  );
}
