import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";
import Logo from "./Logo"
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1>
        <NavbarButton/>
      </h1>
      <nav>
        <Logo/>
  
      </nav>
    </header>
  );
}
