"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Work",
        path: "/work"
    }, {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "Channel",
        path: "/channel"
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div>
            <nav className="flex gap-8">
                {links.map((link, index) => {
                    return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                        } capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                })}
            </nav>
        </div>
    )
}

export default Nav
