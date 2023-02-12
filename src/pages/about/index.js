import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import AboutArea from "../../../components/Home/AboutArea";
import HomeTwoHeader from "../../../components/HomeTwo/HomeTwoHeader";
import HomeCourses from "../../../components/Home/HomeCourses";
import BrandArea from "../../../components/HomeTwo/BrandArea";
import TeamArea from "../../../components/HomeTwo/TeamArea";
import Testimonials from "../../../components/HomeTwo/Testimonials";
import SEO from "../../../components/seo";

const About = () => {
  return (
    <>
      <SEO pageTitle="About" />
      <HomeTwoHeader />
      <BreadCrumb title="About" subtitle="About" />
      <AboutArea about_pt="pt-120" />
      <HomeCourses />
      <TeamArea />
      <Testimonials />
      <BrandArea />
      <Footer />
    </>
  );
};

export default About;
