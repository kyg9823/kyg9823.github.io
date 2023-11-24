import Link from "next/link";
import navlinks from "../data/navlinks";
import ThemeSwitch from "./ThemeSwitch";

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title} className="p-4">
          {nav.title}
        </Link>
      ))}
    <ThemeSwitch />
    </nav>
  );
};

export default Nav;