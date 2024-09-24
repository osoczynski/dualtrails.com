import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { StoreProvider } from "@/Store/Store";
import { appWithTranslation } from "next-i18next";

// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// function MyApp({ Component, pageProps }) {
//   return (
//     <main>
//       <StoreProvider>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </StoreProvider>
//     </main>
//   );
// }

export default appWithTranslation(MyApp);
