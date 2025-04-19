import Wrapper from "@/components/wrapper";

import { TypographyH2 } from "@/components/typography/typography-h2";
import { TypographyP } from "@/components/typography/typography-p";
import { MapPin, GraduationCap } from "lucide-react";
import { TypographyMuted } from "@/components/typography/typography-muted";
import { TypographyBlockquote } from "@/components/typography/typography-blockquote";

export default function AboutPage() {
  return (
    <Wrapper>
      <TypographyH2>Sobre mim</TypographyH2>
      <section className="flex flex-col gap-5 items-start sm:grid grid-cols-2">
        <div>
          <img
            src="./src/assets/image-profile.jpg"
            alt="Image"
            className="rounded-md object-cover"
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-5 mt-1">
            <div className="flex gap-2">
              <MapPin size={16} />
              <TypographyMuted>Curitiba, PR</TypographyMuted>
            </div>
            <div className="flex gap-2">
              <GraduationCap size={16} />
              <TypographyMuted>
                Análise e Desenvolvimento de Sistemas
              </TypographyMuted>
            </div>
            <div className="space-y-4">
              <TypographyP>
                Sou Gabriel, Desenvolvedor Full Stack em transição de carreira,
                apaixonado por tecnologia e soluções criativas. Desde 2021,
                quando mergulhei no universo da programação, venho me dedicando
                para me tornar um profissional completo, capaz de construir
                aplicações robustas e intuitivas.
              </TypographyP>
              <TypographyP>
                Minha stack atual inclui <strong>JavaScript/TypeScript</strong>,{" "}
                <strong>React</strong>, <strong>Node.js</strong> e ecossistemas
                como <strong>Tailwind CSS</strong>, <strong>Zod</strong> e{" "}
                <strong>Shadcn</strong>, sempre aplicando boas práticas e
                princípios de código limpo.
              </TypographyP>
              <TypographyP>
                Atualmente me aprofundo em{" "}
                <strong>Desenvolvimento Web Full Stack</strong>, com ênfase em:
              </TypographyP>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Versionamento</strong>: Git e fluxos colaborativos
                </li>
                <li>
                  <strong>Banco de dados</strong>: PostgreSQL e explorando NoSQL
                </li>
                <li>
                  <strong>Design</strong>: Figma para prototipagem eficiente
                </li>
                <li>
                  <strong>Frameworks</strong>: Next.js (frontend) e
                  NestJS/Express (backend)
                </li>
                <li>
                  <strong>Tecnologias emergentes</strong>: WebSocket e
                  ferramentas como SQLGraphic
                </li>
              </ul>
              <TypographyBlockquote>
                Estou constantemente expandindo meu conhecimento para dominar
                todo o ecossistema de desenvolvimento moderno e criar soluções
                completas e performáticas.
              </TypographyBlockquote>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
