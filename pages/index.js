import Head from "next/head";
import Image from "next/image";
import EndHome from "../app/components/EndHome";
import Navbar from "../app/components/Navbar";
import Welcome from "../app/components/Welcome";
import styles from "../styles/Home.module.css";
import Services from "../app/components/Services";
import Team from "../app/components/Team";
import About from "../app/components/About";
import Contact from "../app/components/Contact";
import Features from "../app/components/Features";
import Pricing from "../app/components/Pricing";
import Testimonials from "../app/components/Testimonials";
import Footer from "../app/components/Footer";
import FooterAlt from "../app/components/Pricing";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Welcome />
        <EndHome />
        <Services />
        <About />
        <Features />
        <Pricing />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
        {/* <FooterAlt /> */}
      </main>
    </div>
  );
}
