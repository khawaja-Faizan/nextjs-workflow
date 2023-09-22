import React from "react";
import styles from "./style.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is about page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
