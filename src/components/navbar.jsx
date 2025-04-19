import { useIsMobile } from "@/hooks/useMobile";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const tabs = [
  { title: "Home", link: "/" },
  { title: "Sobre mim", link: "/about" },
  { title: "Projetos", link: "/projects" },
  { title: "Contato", link: "/contact" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (path) => {
    setIsOpen((open) => !open);
    navigate(path);
  };

  return isMobile ? (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <PanelLeft />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <nav className="flex flex-col justify-center items-center gap-5 mt-5">
              {tabs.map((tab, idx) => {
                const isActive = location.pathname === tab.link;
                return (
                  <Button
                    key={idx}
                    onClick={() => handleClick(tab.link)}
                    variant="ghost"
                    className={`
                      py-1.5 px-3 capitalize cursor-pointer text-nowrap rounded-md transition hover:bg-muted/50
                      relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                      after:h-0.5 after:transition-all after:duration-300
                      ${
                        isActive
                          ? "after:w-[50%] after:bg-primary text-primary"
                          : "after:w-0 after:bg-transparent"
                      }
                    `}
                  >
                    {tab.title}
                  </Button>
                );
              })}
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ) : (
    <nav className="flex gap-2">
      {tabs.map((tab, idx) => {
        const isActive = location.pathname === tab.link;
        return (
          <Link
            key={idx}
            to={tab.link}
            className={`
              py-1.5 px-3 text-muted-foreground capitalize cursor-pointer text-nowrap rounded-md transition hover:bg-muted/70 hover:text-primary
              relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2
              after:h-0.5 after:transition-all after:duration-300
              ${
                isActive
                  ? "after:w-[30%] after:bg-primary text-primary"
                  : "after:w-0 after:bg-transparent"
              }
            `}
          >
            {tab.title}
          </Link>
        );
      })}
    </nav>
  );
}
