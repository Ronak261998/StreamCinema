import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTdlYWRmNzJmZWFmM2I2MjE2YWEyNzFjOWI2NzY0ZSIsInN1YiI6IjY0NzVhMjkwZGQyNTg5MDBlMjBjYWFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kmJTnhKG9mmeiiHNHSGLRm07wZBALHMuLWZ_zsrFdO4"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};


export const fetchDataFromApi = async (url , params)=>{
    try{
        const {data} = await axios.get(BASE_URL + url , {
            headers,
            params,
        })
        return data;
    }

    catch(err){
        console.log(err);
        return err;
    }
}