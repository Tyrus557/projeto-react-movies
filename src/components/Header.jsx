import Image from "next/image";
import Link from "next/link";

export function Header(){
    return(
        <header className="bg-brand-dark/60 backdrop-blur-md flex flex-col gap-y-3 justify-between items-center p-6 fixed top-0 w-full z-20 sm:flex-row">

            <Link href='/'>
                <Image src='/img/logo.svg' width={130} height={50} alt='logo' />
            </Link>

            <nav className="flex gap-14">            
                <Link href='/' className="text-white hover:text-brand-light hover:underline">Início</Link>
                <Link href='/filmes' className="text-white hover:text-brand-light hover:underline">Filmes</Link>
                <Link href='/series' className="text-white hover:text-brand-light hover:underline">Séries</Link>
            </nav>

        </header>
    )

}