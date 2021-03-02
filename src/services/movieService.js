import http from './httpService';
import {apiUrl} from '../config.json';

const apiEndpoint = apiUrl + '/movies';

function MovieUrl(id){
    return `${apiEndpoint}/${id}`
}

export function getMovies(){
    return http.get(apiEndpoint)
}

export function getMovie(movieId){
    return http.get(MovieUrl(movieId))
}

export function saveMovie(movie){
    if(movie._id){
        const body = {...movie};
        delete body._id;
       return http.put(MovieUrl(movie._id), body)
    }

    http.post(apiEndpoint, movie)
}

export function deleteMovie(movieId){
    return http.delete(MovieUrl(movieId))
}