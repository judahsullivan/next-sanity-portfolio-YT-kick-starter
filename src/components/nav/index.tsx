import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";
import { LayoutGroup, motion } from "framer-motion";
import { useRouter } from "next/router";
import Search from "./search";

const navLinks: { href: string; name: string }[] = [
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/posts",
    name: "Blog",
  },
];

const isActiveLink = (href: string, currentPathname: string): boolean => {
  if (href === "/") {
    return href === currentPathname;
  }

  return currentPathname.startsWith(href);
};

export default function Navbar() {
  const router = useRouter();
  return (
    <LayoutGroup>
      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="w-full h-16 fixed top-0 backdrop-blur-lg backdrop-filter"
      >
        <div className="flex mx-auto max-w-6xl items-center h-full justify-between px-5">
          <Link passHref href="/">
            <h1>Next+Sanity Blog</h1>
          </Link>
          <nav className="flex gap-5 items-center">
            <div className="flex items-center gap-5">
              {navLinks.map((link, index) => (
                <Link
                  passHref
                  className=" flex flex-col relative"
                  key={index}
                  href={link.href}
                >
                  {link.name}
                  {isActiveLink(link.href, router.pathname) && (
                    <motion.div
                      layoutId="navigation-underline"
                      className="border border-black dark:border-white w-full"
                      animate
                    />
                  )}
                </Link>
              ))}
            </div>
            <DarkModeToggle />
            <Search />
          </nav>
        </div>
      </motion.header>
    </LayoutGroup>
  );
}
