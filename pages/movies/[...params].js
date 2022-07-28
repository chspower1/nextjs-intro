import { useRouter } from "next/router";
import Seo from "./../../components/Seo";
export default function Detail({ params }) {
    const [title, id] = params || [];
    return (
        <div>
            <Seo title={title} />
            <div>{`${title},${id}`}</div>
        </div>
    );
}
export async function getServerSideProps({ params: { params } }) {
    return {
        props: { params },
    };
}
