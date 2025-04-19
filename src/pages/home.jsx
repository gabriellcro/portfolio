import ButtonCommand from "@/components/button-command";
import { TypographyH1 } from "@/components/typography/typography-h1";
import { TypographyMuted } from "@/components/typography/typography-muted";
import { TypographyP } from "@/components/typography/typography-p";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center text-center m-auto p-5">
      <TypographyH1>Gabriel Oliveira</TypographyH1>
      <div className="flex flex-col gap-2 w-full">
        <TypographyP>Desenvolvedor Front-end</TypographyP>
        <TypographyMuted>Obcecado pela experiência do usuário</TypographyMuted>
      </div>
      <div>
        <ButtonCommand />
      </div>
    </section>
  );
}
