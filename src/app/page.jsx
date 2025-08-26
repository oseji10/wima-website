import BannerMain from "@/components/BannerMain";
import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";
import CauseOne from "@/components/CauseOne";
import CauseSliderTwo from "@/components/CauseSliderTwo";
import CommunityOne from "@/components/CommunityOne";
import CounterTwo from "@/components/CounterTwo";
import CtaSectionOne from "@/components/CtaSectionOne";
import DifferenceOne from "@/components/DifferenceOne";
import DifferenceTwo from "@/components/DifferenceTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import MainCounter from "@/components/MainCounter";
import OverviewOne from "@/components/OverviewOne";
import PartnerOne from "@/components/PartnerOne";
import Preloader from "@/components/Preloader";
import PriceAlert from "@/components/PriceAlert";
import ROIPopup from "@/components/ROIPopup";
import TeamOne from "@/components/TeamOne";
import TestimonialOne from "@/components/TestimonialOne";
import TopBarOne from "@/components/TopBarOne";
import WelcomeModal from "@/components/WelcomeModal";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "WIMA | Women in Mechanized Agriculture",
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

{/* <ROIPopup/> */}
        {/* TopBarOne */}
        <TopBarOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* BannerOne */}
        {/* <BannerOne /> */}
    {/* <WelcomeModal /> */}
        <BannerMain />

        <InvestmentCalculator />

        {/* Counter Two */}
        {/* <CounterTwo /> */}
        <MainCounter /><br/>
        {/* PartnerOne */}
        {/* <PartnerOne /> */}

        {/* DifferenceOne */}
        <DifferenceOne />

        

        {/* HelpOne */}
        {/* <HelpOne /> */}

        {/* CauseOne */}
        {/* <CauseOne /> */}

        {/* CtaSectionOne */}
        {/* <CtaSectionOne /> */}

        {/* TeamOne */}
        {/* <TeamOne /> */}

        {/* CommunityOne */}
        {/* <CommunityOne /> */}

        {/* TestimonialOne */}
        {/* <TestimonialOne /> */}

        {/* CauseSliderTwo */}
        {/* <CauseSliderTwo /> */}

        {/* DifferenceTwo */}
        {/* <DifferenceTwo /> */}

        {/* BlogOne */}
        {/* <BlogOne /> */}

<PriceAlert/>
        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
