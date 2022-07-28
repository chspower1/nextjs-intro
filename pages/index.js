import Seo from "./../components/Seo";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ results }) {
    const router = useRouter();
    console.log(router);
    const imgClick = (id, title, imgUrl, overview) => {
        router.push(
            {
                pathname: `/movies/${id}`,
                query: {
                    id,
                    title,
                    imgUrl,
                    overview,
                },
            },
            `/movies/${id}`
        );
    };
    return (
        <div>
            <Seo />
            {results?.map((movie) => (
                <div key={movie.id}>
                    <img
                        onClick={() =>
                            imgClick(
                                movie.id,
                                movie.title,
                                `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                                movie.overview
                            )
                        }
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <Link href={`/movies/${movie.id}`}>
                        <a>
                            <h1>{movie.title}</h1>
                        </a>
                    </Link>
                </div>
            ))}
            <style jsx>
                {`
                    h1 {
                        margin-top: 0px;
                        margin-bottom: 50px;
                    }
                `}
            </style>
        </div>
    );
}
export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movie`)).json();
    // console.log(results);
    return {
        props: { results },
    };
}
