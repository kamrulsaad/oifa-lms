import Head from "next/head";
import AboutArea from "../../components/Home/AboutArea";
import HomeBlog from "../../components/Home/HomeBlog";
import Campus from "../../components/Home/Campus";
import CounterArea from "../../components/Home/CounterArea";
import Features from "../../components/Home/Features";
import HomeTwoHeader from "../../components/HomeTwo/HomeTwoHeader";
import HeroArea from "../../components/HomeTwo/HeroArea";
import HomeCourses from "../../components/Home/HomeCourses";
import ResearchArea from "../../components/Home/ResearchArea";
import Cta from "../../components/Home/Cta";
import Footer from "../../components/common/Footer";
import SEO from "../../components/seo";

export default function Home() {
  return (
    <>
      <SEO pageTitle="Home Default" />
      <HomeTwoHeader />
      <HeroArea />
      <Features />
      <AboutArea />
      <CounterArea />
      <HomeCourses />
      <Campus />
      <ResearchArea />
      <HomeBlog />
      <Cta />
      <Footer />
    </>
  );
}
