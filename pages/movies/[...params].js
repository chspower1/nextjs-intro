import { useRouter } from "next/router";
export default function Detail({ ...params }) {
    const router = useRouter();
    const movie = router.query;

    return (
        <div>
            <img src={movie.imgUrl} />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    );
}
