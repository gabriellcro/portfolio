import { ModeToggle } from "./mode-toggle";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="flex justify-between max-w-7xl fixed backdrop-blur-sm w-full p-5">
      <Navbar />
      <ModeToggle />
    </header>
  );
}
