import PropTypes from "prop-types";

import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function NavbarMobile({ tabs }) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="ghost" size="icon">
          <AlignLeft />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <nav className="flex flex-col text-center gap-3">
            {tabs.map((tab, idx) => (
              <a
                key={idx}
                href={tab.link}
                className="py-1.5 px-3 capitalize text-nowrap rounded-md transition hover:bg-muted/50"
              >
                {tab.title}
              </a>
            ))}
          </nav>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

NavbarMobile.proptypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};
