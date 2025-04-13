import { TypographyH1 } from "@/components/typography-h1";
import { TypographyMuted } from "@/components/typography-muted";
import { TypographyP } from "@/components/typography-p";

export default function HomePage() {
  return (
    <section className="flex flex-col text-center px-3 gap-3 max-w-3xl">
      <TypographyH1 textContent="Gabriel Oliveira" />
      <TypographyP textContent="Desenvolvedor Front-end" />
      <TypographyMuted textContent="Formado em ADS e estudando programação desde 2021. Foco em front-end, criando interfaces escaláveis, com código limpo, design minimalista e ênfase total na experiência do usuário." />
    </section>
  );
}
