import { baseImageURL } from "@/api/tmdb";
import { dateItem, getImage } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export function Card({item,categoria}){

    const imageBaseURL = baseImageURL();
    const itemDate = dateItem(item);
    const cardImage = getImage(imageBaseURL,item.poster_path);

    return(
        <Link href={`/detalhes/${categoria}/${item.id}`} className="relative rounded overflow-hidden bg-loading bg-no-repeat bg-center" key={item.id}>
                            
            <Image
             className="object-cover w-[270] h-[405] brightness-50 hover:brightness-100"
             src={cardImage}
             width={270}
             height={405}
             alt={`Poster ${item.title || item.name}`}
             loading="lazy"
            />
                            
            <div className="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-b to-black p-2.5">
                <h2 className="text-white font-bold text-[18px]">{item.title || item.name}</h2>
                <h3 className="text-white font-bold">Ano: {itemDate}</h3>
                <h4 className="text-brand-accent font-bold">⭐{item.vote_average.toFixed(1)}</h4>
            </div>
        </Link>
    )
}