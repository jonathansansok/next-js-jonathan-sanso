import Link from "next/link";

export default function Index(){
    return(
        <div>
            <h1>Store</h1>
            <Link href="/">Ir a Home</Link>
            <br></br>
            <Link href="/faq">Ir a FAQ</Link>
        </div>
    )
}