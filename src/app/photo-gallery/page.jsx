import BreadcrumbOne from "@/components/BreadcrumbOne";
import BreadcrumbTwo from "@/components/BreadcrumbTwo";
import CauseSliderOne from "@/components/CauseSliderOne";
import CauseSliderTwo from "@/components/CauseSliderTwo";
import CtaSectionOne from "@/components/CtaSectionOne";
import FaqOne from "@/components/FaqOne";
import FaqTwo from "@/components/FaqTwo";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
import GalleryTwo from "@/components/GalleryTwo";
import HeaderOne from "@/components/HeaderOne";
import PhotoGallery from "@/components/ImageGallery";
import ImageGallery from "@/components/ImageGallery";
import Preloader from "@/components/Preloader";
import ServicesPage from "@/components/Services";
import Projects from "@/components/Services";
import TeamTwo from "@/components/TeamTwo";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Photo Gallery | Women in Mechanized Agriculture",
  description: "Empowering women one community at a time",
};
const images = [
  {
    id: '1',
    src: '/assets/images/slide/1.jpg',
    alt: 'Beautiful mountain landscape at sunset',
    width: 1200,
    height: 800,
    category: 'nature'
  },
  {
    id: '2',
    src: '/assets/images/slide/2.jpg',
    alt: 'Beautiful mountain landscape at sunset',
    width: 1200,
    height: 800,
    category: 'nature'
  },
  {
    id: '3',
    src: '/assets/images/slide/3.jpg',
    alt: 'Beautiful mountain landscape at sunset',
    width: 1200,
    height: 800,
    category: 'nature'
  },
  {
    id: '4',
    src: '/assets/images/slide/4.jpg',
    alt: 'Beautiful mountain landscape at sunset',
    width: 1200,
    height: 800,
    category: 'nature'
  },
  // Add more images...
];
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
        <BreadcrumbTwo title='Photo Gallery' />

        {/* FaqOne */}
        {/* <ImageGallery /> */}
         {/* <ImageGallery 
        images={images} 
        galleryTitle="Our Photo Collection" 
      /> */}
      <PhotoGallery/>

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
