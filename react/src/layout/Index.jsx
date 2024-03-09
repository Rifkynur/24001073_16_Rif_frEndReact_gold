import React from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutService from "./LayoutService";
import LayoutWhyUs from "./LayoutWhyUs";
import LayoutSewaMobil from "./LayoutSewaMobil";
import LayoutTestimonial from "./LayoutTestimonial";
import LayoutFaq from "./LayoutFaq";
import Footer from "./Footer";

const Index = () => {
  return (
    <div>
      <LayoutHeader />
      <LayoutService />
      <LayoutWhyUs />
      <LayoutTestimonial />
      <LayoutSewaMobil />
      <LayoutFaq />
      <Footer />
    </div>
  );
};

export default Index;
