import Head from "next/head";
import Image from "next/image";

import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="">
          <div className="text-center">
            <h1 className="text-6xl">Richard MacCaw</h1>
            <h3>
              I'm a full stack product engineer working at{" "}
              <a target="_blank" href="https://www.generationhome.com">
                Generation Home.
              </a>
            </h3>
            <p className="text-3xl">⛷️ 🫖 📷</p>
          </div>

          <Image
            className="rounded-md pb-5 shadow-md"
            src="/images/me.jpg"
            height={960}
            width={1280}
            alt="Picture of Richard MacCaw"
          />
        </section>
      </Layout>
    </>
  );
}
