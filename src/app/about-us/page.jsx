import BreadcrumbOne from "@/components/BreadcrumbOne";
import BreadcrumbTwo from "@/components/BreadcrumbTwo";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import DifferenceTwo from "@/components/DifferenceTwo";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TestimonialOne from "@/components/TestimonialOne";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "About Us | Women in Mechanized Agriculture",
  description: "Empowering women one community at a time",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        {/* <Preloader /> */}

        {/* CustomCursor  */}
        {/* <CustomCursor /> */}

        {/* TopBarOne */}
        <TopBarOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* BreadcrumbOne */}
        <BreadcrumbTwo title='About Us' />

        {/* HelpOne */}
        {/* <HelpOne /> */}

        {/* CtaSectionTwo */}
        {/* <CtaSectionTwo /> */}

        {/* TeamTwo */}
        {/* <TeamTwo /> */}

        {/* FaqOne */}
        {/* <FaqOne /> */}

        {/* TestimonialOne */}
        {/* <TestimonialOne /> */}

        {/* ContactOne */}
        {/* <ContactOne /> */}

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* GalleryOne */}
        {/* <GalleryOne /> */}

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
