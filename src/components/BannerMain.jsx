"use client";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

const BannerMain = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <section className='banner-three'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8'>
            <div className='banner-three__slider swiper'>
              <Slider {...settings} ref={sliderRef} className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='banner-three__content'>
                    {/* <span className='sub-title'>
                      <i className='icon-donation' />
                      Start donating poor people
                    </span> */}
                    {/* <h1 className='title-animation_inner'>
                      We Are non <br />
                      profit charity <span className='bottom-line'>World</span>
                      Organization
                    </h1> */}
                    <h1 className='title-animation_inner'>uplifting 
                    <span className='bottom-line'>women&nbsp;</span>
                           one community at a time...
                           </h1>
                    <p>
                      WIMA is dedicated to empowering women, fostering growth, and transforming lives through meaningful initiatives. 
                      By uplifting one community at a time, we create lasting, positive change.
                    </p>
                    <div className='banner__content-cta cta'>
                      <Link
                        href='#'
                        aria-label='about us'
                        title='about us'
                        className='btn--tertiary'
                      >
                        Discover More <i className='fa-solid fa-arrow-right' />
                      </Link>
                      <Link
                        href='/book-a-service'
                        aria-label='contact us'
                        title='contact us'
                        className='btn--primary'
                      >
                        Book a Service <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='banner-three__content'>
                     <h1 className='title-animation_inner'>WIMA is 
                    <span className='bottom-line'>transforming&nbsp;</span>
                           agriculture in Africa
                           </h1>
                    <p>
                      We're revolutionizing Nigerian agriculture with innovative mechanization, 
                      empowering women farmers, and fostering sustainable growth through community-driven solutions.
                    </p>
                    <div className='banner__content-cta cta'>
                      <Link
                        href='#'
                        aria-label='about us'
                        title='about us'
                        className='btn--tertiary'
                      >
                        Find Out How <i className='fa-solid fa-arrow-right' />
                      </Link>
                      <Link
                        href='#'
                        aria-label='contact us'
                        title='contact us'
                        className='btn--primary'
                      >
                        Book A Service<i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='banner-three__content'>
                    {/* <span className='sub-title'>
                      <i className='icon-donation' />
                      Start donating poor people
                    </span> */}
                    {/* <h1 className='title-animation_inner'>
                      We Are non <br />
                      profit charity <span className='bottom-line'>World</span>
                      Organization
                    </h1> */}
                    {/* <h1>We're <br />
                    <span className='bottom-line'>amplifying</span>
                           women voices in agriculture
                           </h1> */}
                           <h1 className='title-animation_inner'>We're
                    <span className='bottom-line'>amplifying&nbsp;</span>
                           women voices in agriculture
                           </h1>
                    <p>
                      At WIMA, we're empowering women in agriculture by amplifying their voices, 
                      promoting mechanization, and driving inclusive, sustainable change.
                    </p>
                    <div className='banner__content-cta cta'>
                      <Link
                        href='#'
                        aria-label='about us'
                        title='about us'
                        className='btn--tertiary'
                      >
                        Discover More <i className='fa-solid fa-arrow-right' />
                      </Link>
                      <Link
                        href='/book-a-service'
                        aria-label='contact us'
                        title='contact us'
                        className='btn--primary'
                      >
                        Book A Service <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className='col-12 col-lg-4 d-none d-lg-block'>
            <div className='banner-three__thumb'>
              <div className='banner-three__thumb-inner'>
                <div className='group'>
                  <div className='m-one move-image'>
                    <img
                      src='/assets/images/banner/2.jpg'
                      alt='Image_inner'
                      data-aos='fade-right'
                      data-aos-duration={1000}
                    />
                  </div>
                  <div className='m-three move-image'>
                    <img
                      src='/assets/images/banner/3.jpg'
                      alt='Image_inner'
                      data-aos='fade-right'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    />
                  </div>
                </div>
                <div className='group'>
                  <div className='m-two move-image'>
                    <img
                      src='/assets/images/banner/11.jpg'
                      alt='Image_inner'
                      data-aos='zoom-in'
                      data-aos-duration={1000}
                    />
                  </div>
                  <div className='m-four move-image'>
                    <img
                      src='/assets/images/banner/4.jpg'
                      alt='Image_inner'
                      data-aos='zoom-in'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    />
                  </div>
                </div>
                <div className='group'>
                  <div className='m-five move-image'>
                    <img
                      src='/assets/images/banner/m-five.png'
                      alt='Image_inner'
                      data-aos='fade-left'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='shape-lg'>
        <img
          src='/assets/images/banner/banner-three-bg.png'
          alt='Image_inner'
          data-aos='zoom-in'
          data-aos-duration={1000}
        />
      </div> */}
      {/* <div className='sprade-shape'>
        <img
          src='/assets/images/sprade-base.png'
          alt='Image_inner'
          className='base-img'
          data-aos='zoom-in'
          data-aos-duration={1000}
        />
      </div>
      <div className='parasuit'>
        <img src='/assets/images/parasuit.png' alt='Image_inner' />
      </div> */}
    </section>
  );
};

export default BannerMain;
