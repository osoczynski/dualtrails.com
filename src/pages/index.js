import Head from "next/head";
import Slider from "@/components/Slider";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Dual Trails Webpage</title>
        <meta name="description" content="Dual Trails Webpage!" />
      </Head>
      <Slider />
    </>
  );
}
