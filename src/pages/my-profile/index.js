import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import HomeTwoFooter from "../../../components/HomeTwo/HomeTwoFooter";
import HomeTwoHeader from "../../../components/HomeTwo/HomeTwoHeader";
import ProfileArea from "../../../components/MyProfile/ProfileArea";
import ProfileMenuArea from "../../../components/MyProfile/ProfileMenuArea";
import SEO from "../../../components/seo";

const MyProfile = () => {
  return (
    <>
      <SEO pageTitle="My Profile" />
      <HomeTwoHeader />
      {/* <BreadCrumb title="My Profile" subtitle="My Profile" /> */}
      <ProfileArea />
      <ProfileMenuArea />
      <HomeTwoFooter white_bg="white-bg" />
    </>
  );
};

export default MyProfile;
