import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Gyre">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
