"use client";

import { baseImageURL, getDataId } from "@/api/tmdb";
import { dateItem, getImage, voteItem } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

export default function PageDetalhes(){
    
    const params = useParams();

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const imageBaseURL = baseImageURL();
    const itemDate = dateItem(items);
    const itemVote = voteItem(items);

    useEffect(()=> {

        async function loadData() {

            const dados = await getDataId(params.categoria, params.id);
            setItems(dados);
            setLoading(false);
        }

        loadData();

    })

    if(loading){
        return(
            <BarLoader
                color="#00b4eb"
                height={5}
                width={'100%'}
            />
        )
    }

    return(
        <>
        <div>
            <Image
             className="object-cover h-80 lg:h-[500px] w-full"
             src={`${imageBaseURL}/${items.backdrop_path}`}
             width={1440}
             height={500}
             alt={`Poster ${items.title || items.name}`}
             loading="lazy"
            />
        </div>
        
        <div className="bg-transparent lg:bg-brand-dark/50 backdrop-blur-lg max-w-[850px] min-h-[500px] mx-auto mb-12 lg:mb-0 relative lg:top-[-200px] flex items-center justify-between p-7 rounded-[5px]">
            
            <Image
             className="hidden lg:block object-cover w-[300px] h-[450px]"
             src={getImage(imageBaseURL,items.poster_path)}
             width={270}
             height={405}
             alt={`Poster ${items.title || items.name}`}
             loading="lazy"
            />

            <div className="lg:max-w-[460px] text-white">
                <h1 className="text-4xl font-bold">{items.title || items.name}</h1>
                <ul className="list-disc list-inside my-3">
                    <li>Ano: {itemDate}</li>
                    <li>Avaliação: {itemVote} ⭐</li>
                </ul>

                <p>{items.overview}</p>
            
                <Link
                 href={`/${params.categoria}`}
                 className="text-center block lg:inline-block bg-brand-light mt-3 py-1 px-6 text-brand-dark cursor-pointer rounded hover:bg-brand-dark hover:text-white">
                Voltar
                </Link>
                
                {/* <button
                 className="bg-brand-light mt-3 px-6 py-1 text-brand-dark cursor-pointer rounded hover:bg-brand-dark hover:text-white"
                 onClick={()=> history.go(-1)}>
                Voltar
                 </button> */}
            </div>
        </div>
        </>
    )
}