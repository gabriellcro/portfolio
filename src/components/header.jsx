import { useIsMobile } from "@/hooks/useMobile";
import { ModeToggle } from "./mode-toggle";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

const data = [
  { title: "home", link: "/" },
  { title: "sobre mim", link: "/about" },
  { title: "projetos", link: "/projects" },
  { title: "formação", link: "/graduation" },
  { title: "contato", link: "/contact" },
];

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <section className="flex items-center justify-center border-b-[2px] px-5 border-dotted fixed w-full backdrop-blur-sm z-10">
      <header className="flex justify-between max-w-[1920px] w-full border-dotted border-x-[2px] h-full items-center p-3 sm:p-5">
        {isMobile ? (
          <NavbarMobile tabs={data} />
        ) : (
          <NavbarDesktop tabs={data} />
        )}

        <ModeToggle />
      </header>
    </section>
  );
}
