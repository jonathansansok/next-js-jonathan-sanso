import Link from "next/link";
import Image from "next/image";
import style from "../src/styles/product.module.css";

export default function Product({ item, showAs }) {
  if (showAs === "Page") {
    return (
      <div>
        
        <h2>{item.title}</h2>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return <div>List Item</div>;
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${item.id}`}>
          <div>
            <Image
              src={item.image}
              alt={item.description}
              width={300}
              height={300}
            />
          </div>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/url-a-mi-componente`}>
            <div>{item.title}</div>
          </Link>
        </h3>
      </div>
      <div>${item.price}</div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
