import { Banner } from "@/components/Banner";
import { List } from "@/components/List";

export default function pageFilmes(){

    return(
        <>
            <Banner titulo="Filmes" descricao="Confira as maiores produções do cinema mundial" categoria="filmes"/>
            <List categoria="filmes"/>
        </>
    )
}