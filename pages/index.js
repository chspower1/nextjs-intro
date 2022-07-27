import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "1a301bdc4abdaca0b146fc986fe4436c";

export default function Home() {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const { results } = await response.json();
        setMovies(results);
        console.log(results);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <Seo title="Home" />
            <div>h111</div>
            {!movies && <h4>Loding</h4>}
            {movies?.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h4>{movie.original_title}</h4>
                    </div>
                );
            })}
        </div>
    );
}
