import Link from "next/link";
import style from '../src/styles/menu.module.css'
export default function Menu() {
  return (
    <nav className={style.menu}>
      <div>
        <Link href="/">
          <div>Home</div>
        </Link>
      </div>
      <div>
        <Link href="/store">
          <div>store</div>
        </Link>
        <Link href="/faq">
          <div>faq</div>
        </Link>
      </div>
      <div href="#"> Cart (0)

      </div>
    </nav>
  );
}
