import Head from "next/head";

export const siteTitle = "About me.";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Richard MacCaw" content="Al about Richard" />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="prose min-h-screen mx-auto py-6 sm:py-12">
        {children}
      </main>
    </>
  );
}
