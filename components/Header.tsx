import Link from "next/link";
import NextImage from 'next/image'
import navlinks from "../data/navlinks";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({navShow, onToggleNav}: { onToggleNav: () => void; navShow: boolean}) => {

  const router = useRouter();
  return (
    <nav className="supports-backdrop-blur:bg-white/95 sticky top-0 z-50 overflow-hidden bg-white/75 py-3 backdrop-blur dark:bg-dark/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <Link href="/" aria-label="Kyle's Blog">
          <div className="flex items-center justify-between">
            <div className="mr-3 flex items-center justify-center">
              <NextImage
                src="/images/logo.png"
                alt="Kyle's Blog Logo"
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden space-x-1.5 sm:block">
            {navlinks.map(({ title, link }) => (
              <Link key={link} href={link}>
                <span className={clsx(
                  'inline-block rounded px-3 py-1 font-medium',
                  router.pathname.startsWith(link)
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                )}>
                  {title}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;