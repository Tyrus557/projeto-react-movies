import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <Link href='/filmes' className="w-full md:w-1/2 relative">
        <Image 
         src='/img/capa_filmes.webp' 
         width={720} height={730} 
         alt=''
         className="w-full h-screen object-cover hover:brightness-125" 
         quality={90}
         loading="lazy"/>

        <div className="absolute bottom-24 w-full text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Filmes</h2>
        </div>
      </Link>
    
      <Link href='/series' className="w-full md:w-1/2 relative">
        <Image
         src='/img/capa_series.webp'
         width={720}
         height={730}
         alt='' 
         className="w-full h-screen object-cover hover:brightness-125" 
         quality={90}
         loading="lazy"/>
        <div className="absolute bottom-24 w-full text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Séries</h2>
        </div>
      </Link>
    </div>
  );
}
