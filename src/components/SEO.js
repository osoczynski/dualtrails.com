import Head from "next/head";

const SEO = ({ pageTitle, pageDescription }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export default SEO;
