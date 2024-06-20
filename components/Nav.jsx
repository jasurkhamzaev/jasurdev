"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "My Resume",
        path: "/resume"
    },
    {
        name: "Work",
        path: "/work"
    }, {
        name: "Blog",
        path: "https://blog.jasurdev.com"
    },
    {
        name: "Channel",
        path: "https://t.me/jasurtechno"
    }
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
