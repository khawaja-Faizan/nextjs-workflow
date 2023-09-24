import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <h1>Home Page</h1>
      <div className={styles.nav}>
        <Link href="/about">Link to about</Link>
        <br />
        <Link href="/users">Link to users</Link>
      </div>
    </main>
  );
}
