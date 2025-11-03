"use client";

import { getData } from "@/api/tmdb"
import { useEffect,useState } from "react"
import { Card } from "./Card";
import { BarLoader } from "react-spinners";

export function List({categoria}){
    
    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);

    const [order, setOrder] = useState('popular');

    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadData(){
            const dados = await getData(categoria, page, order);
            setItems(dados);
            setLoading(false);
        }

        loadData();
    },[page,order,loading])

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

        <div className="max-w-container-list mx-auto pb-24">

            <div className="flex justify-between my-3">
                <div>
                    <select 
                        onChange={(e)=>setOrder(e.target.value)}
                        value={order} 
                        className="bg-brand text-brand-light border px-2">
                         <option value="popular">Populares</option>
                         <option value="top_rated">Melhores Avaliações</option>
                         {categoria == "filmes" ? 
                            <>
                                <option value="now_playing">Em Cartaz</option>
                                <option value="upcoming">Em Breve</option> 
                            </> : 
                            <>
                                <option value="on_the_air">No Ar</option> 
                                <option value="airing_today">Lançamento</option>
                            </>
                            }
                    </select>
                </div>
                
                <div className="flex gap-1 text-white">
                    <button 
                        disabled={page == 1}
                        onClick={()=>setPage(page-1)}
                        className="border border-brand-light px-3 cursor-pointer rounded hover:bg-brand-light disabled:opacity-25">
                         &#8592; 
                    </button>
                    
                    <span>{`Página ${page}`}</span>
                    
                    <button 
                        onClick={()=>setPage(page+1)}
                        className="border border-brand-light px-3 cursor-pointer rounded hover:bg-brand-light">
                         &#8594; 
                    </button>
                </div>
            </div>

            <div className="flex gap-5 flex-wrap justify-center">          

                {
                    
                    items.map(item =>( 
                        <Card item={item} categoria={categoria} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}