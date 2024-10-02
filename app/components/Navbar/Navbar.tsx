import Link from "next/link";

const Navbar = () => {
    return (
        <header className="w-full bg-indigo-200 backdrop-filter backdrop-blur-md bg-opacity-20 sticky top-0 flex justify-between p-6 ">
            <h1>Niq Web</h1>
            <nav className="flex gap-10">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
            </nav>
        </header>
    )
}

export default Navbar