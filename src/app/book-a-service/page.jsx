import BookService from "@/components/BookService";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import BreadcrumbTwo from "@/components/BreadcrumbTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import ShopInner from "@/components/ShopInner";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Book A Service | Women in Mechanized Agriculture",
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
        <BreadcrumbTwo title='Available Services' />

        {/* Book Service */}
        <BookService />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
