import ButtonCommand from "@/components/button-command";
import { TypographyH1 } from "@/components/typography/typography-h1";
import { TypographyMuted } from "@/components/typography/typography-muted";
import { TypographyP } from "@/components/typography/typography-p";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
      className="flex flex-col gap-8 items-center justify-center text-center m-auto p-5"
    >
      <TypographyH1>Gabriel Oliveira</TypographyH1>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-2 w-full"
      >
        <TypographyP>Desenvolvedor Front-end</TypographyP>
        <TypographyMuted>Obcecado pela experiência do usuário</TypographyMuted>
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
      >
        <ButtonCommand />
      </motion.div>
    </motion.div>
  );
}
