import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Qraft Academy" : "Qraft Academy"}</title>
        <meta name="description" content="Qraft Academy Dashboard Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="">
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href="/">
              <a className="text-lg font-bold">Qraft Academy</a>
            </Link>
            <div>
              <Link href="/apply">
                <a className="p-2">Apply</a>
              </Link>
              <Link href="/hire">
                <a className="p-2">Hire Now</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          Copyright &copy; 2022 Qraft Academy
        </footer>
      </div>
    </>
  );
}
