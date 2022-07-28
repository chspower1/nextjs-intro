import { useRouter } from "next/router";
import Link from "next/link";
export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a>
                    <h1 className={router.pathname === "/" ? "active" : null}>popular</h1>
                </a>
            </Link>
            <Link href="/about">
                <a>
                    <h1 className={router.pathname === "/about" ? "active" : null}>about</h1>
                </a>
            </Link>

            <style jsx>{`
                * {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgb(20, 20, 20);
                    color: gray;
                }
                h1 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 10px;
                }
                .active {
                    color: tomato;
                }
            `}</style>
        </nav>
    );
}
