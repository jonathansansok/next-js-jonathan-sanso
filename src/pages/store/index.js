import Link from "next/link";
import Layout from "../../../components/layout";
import { getItems } from "../../../services/itemService";
export default function Index({items}) {
  return (
    <Layout>
      <h1>Store</h1>
      {
        items && items.map(item => <div key={item.div}>{item.title}</div>)
      }
    </Layout>
  );


}
export async function getStaticProps(){
 const res = await getItems() ;
 return {
    props: {
        items: res,
    }
 }
}