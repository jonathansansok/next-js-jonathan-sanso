import Link from "next/link";
import style from "../src/styles/menu.module.css";
export default function Menu() {
  return (
    <nav className={style.menu}>
      <div>
        <Link href="/">
          <div className={style.link}>Home</div>
        </Link>
      </div>
      <div>
        <Link href="/store">
          <div className={style.link}>store</div>
        </Link>
        <Link href="/faq">
          <div className={style.link}>faq</div>
        </Link>
      </div>
      <div href="#" className={style.link}> Cart (0)</div>
    </nav>
  );
}
