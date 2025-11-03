import axios from "axios";

const API_KEY = 'e71d41617a4a32b6d2d1665b38a1f571';
const BASE_URL = 'https://api.themoviedb.org/3';

export function baseImageURL (){
    return 'https://image.tmdb.org/t/p/original';
}

export async function getData(categoria, pageNumber, order){

    let tipoCategoria = categoria == 'filmes' ? "movie" : "tv";

    const response = await axios.get(`${BASE_URL}/${tipoCategoria}/${order}`, {
        
        params:{
            api_key: API_KEY,
            language: 'pt-br',
            page : pageNumber
        }

    })

    return response.data.results;

}

export async function getDataId(categoria, id){

    let tipoCategoria = categoria == 'filmes' ? "movie" : "tv";

    const response = await axios.get(`${BASE_URL}/${tipoCategoria}/${id}`, {
        
        params:{
            api_key: API_KEY,
            language: 'pt-br',
        }

    })

    return response.data;

}