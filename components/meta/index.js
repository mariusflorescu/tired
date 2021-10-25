import Head from "next/head";
import { NextSeo } from "next-seo";

const Meta = ({ title = "Tired", description = "Thoughts" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:url" content="https://tired.vercel.app" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_mariusflorescu" />
        <meta name="apple-mobile-web-app-title" content="Marius" />
        <meta name="author" content="Marius Florescu" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: "https//tired.vercel.app",
          title,
          description,
          site_name: "tired",
        }}
      />
    </>
  );
};

export default Meta;
