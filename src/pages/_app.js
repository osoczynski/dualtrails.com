import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/Store/Store";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </main>
  );
}
