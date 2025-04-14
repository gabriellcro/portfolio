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
    <header className="flex justify-between max-w-[1920px] fixed backdrop-blur-sm w-full p-5">
      {isMobile ? <NavbarMobile tabs={data} /> : <NavbarDesktop tabs={data} />}

      <ModeToggle />
    </header>
  );
}
