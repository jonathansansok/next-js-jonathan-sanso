import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";
import Link from "next/link";
import Layout from "../../components/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Bienvenido">
      <div>
        Estas en index
      </div>
    </Layout>
  );
}
