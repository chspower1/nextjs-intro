import Link from "next/link";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Home({ results }) {
    const router = useRouter();

    const onClick = (movie) => {
        router.push(`/movies/${movie.title}/${movie.id}`);
    };
    return (
        <div>
            <Seo title="Home" />
            {results?.map((movie) => {
                return (
                    <div>
                        <img
                            onClick={() => onClick(movie)}
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        />
                        <h4>
                            <Link href={`/movies/${movie.id}`}>
                                <a>{movie.original_title}</a>
                            </Link>
                        </h4>
                    </div>
                );
            })}
        </div>
    );
}

export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        },
    };
}
