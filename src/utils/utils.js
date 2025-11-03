
export function dateItem(item){
    if (item.release_date != null && item.release_date != ""){
        return (item.release_date).substr(0,4);
    }
    
    if (item.first_air_date != null && item.first_air_date != ""){
        return (item.first_air_date).substr(0,4);
    }
}

export function getImage(imageBaseURL,poster_path){
    if (poster_path != null){
        return `${imageBaseURL}/${poster_path}`
    }

    else{
        return '/img/placeholder.jpeg'
    }
}

export function voteItem(item){
    if (item.vote_average != null){
        return (item.vote_average).toFixed(1);
    }
}