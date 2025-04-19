// app/layout.js
import CommandMenu from "@/components/command-menu";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { CommandMenuProvider } from "@/context/command-menu-context";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <CommandMenuProvider>
      <div className="flex flex-col min-h-screen w-full items-center">
        <Header />
        <Outlet />
        <CommandMenu />
        <Footer />
      </div>
    </CommandMenuProvider>
  );
}
