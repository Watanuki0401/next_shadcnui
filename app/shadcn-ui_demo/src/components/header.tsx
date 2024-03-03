"use client";

import { Boxes } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Header() {
    const pathname = usePathname()

    return(
        <>
            <header className="sticky top-0 border-b border-border/80 backdrop-blur w-full z-50 ">
                <div className="container flex h-14 items-center">
                        <div className="mr-4 flex">
                            <Link
                                href={"/"}
                                className="mr-6 flex items-center space-x-2"
                            >
                                <Boxes className="h-6 w-6"/>
                                <span className="font-bold">Hello world.</span>
                            </Link>
                            <nav className="flex items-center gap-6 text-sm">
                                <Link
                                    href={"/containers"}
                                    className={cn(
                                        "transition-colors hover:text-foreground/80",
                                        pathname === "/containers" ? "text-foreground" : "text-foreground/60"
                                )}>
                                    containers
                                </Link>
                            </nav>
                        </div>
                        <div className="flex flex-1 items-center justify-end ">
                            <ModeToggle />
                        </div>
                </div>
            </header>
        </>
    )
}

export default Header;