import BreadcrumbOne from "@/components/BreadcrumbOne";
import BreadcrumbTwo from "@/components/BreadcrumbTwo";
import CtaSectionOne from "@/components/CtaSectionOne";
import FaqOne from "@/components/FaqOne";
import FaqTwo from "@/components/FaqTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Services";
import TeamTwo from "@/components/TeamTwo";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Projects | Women in Mechanized Agriculture",
  description: "Empowering women one community at a time",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        {/* <CustomCursor /> */}

        {/* TopBarOne */}
        <TopBarOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* BreadcrumbOne */}
        <BreadcrumbTwo title='Projects' />

        {/* FaqOne */}
        <Projects />

        {/* CtaSectionOne */}
        {/* <CtaSectionOne /> */}

        {/* TeamTwo */}
        {/* <TeamTwo /> */}

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
