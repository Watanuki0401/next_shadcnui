import { Boxes } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

function Header() {
    return(
        <>
            <header className="sticky top-0 border-b border-border/80 backdrop-blur w-full z-50 ">
                <div className="flex h-16">
                    <div className="container flex items-center">
                        <div>
                            <Link href={"/"} className="mr-6 flex items-center space-x-2">
                                <Boxes className="h-6 w-6"/>
                                <span className="font-bold">Hello world.</span>
                            </Link>
                        </div>
                        <div className="flex flex-1 items-center justify-end ">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;