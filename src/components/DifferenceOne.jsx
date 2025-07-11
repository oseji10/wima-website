"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const DifferenceOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className='difference'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-8'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                {/* <span className='sub-title'>
                  <i className='icon-donation' />
                  Start donating poor people
                </span> */}
                <h2 className='title-animation_inner'>
Why Choose WIMA?                </h2>
                <p>
                  At Women in Mechanized Agriculture Association of West Africa (WIMA), we are redefining the agricultural landscape by empowering women to lead in mechanized farming. Our innovative approach, industry expertise, and commitment to sustainability set us apart. Here’s why you should choose WIMA:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='difference__inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='difference__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-first'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-one.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-women' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/become-a-member'>Women-owned, Women-led</Link>
                            </h5>
                            <p>
                             We are the first women-led mechanization service providers dedicated to equipping
                             female farmers with modern agricultural tools and expertise. Our programs uplift women,
                             ensuring they own, manage and benefit from mechanized farming.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-farm' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Sustainable & Efficient Farming</Link>
                            </h5>
                            <p>
                              WIMA promotes environmentally friendly mechanization that reduces manual labour, increases farm yields,
                              and ensures long-term sustainability. By utilizing modern technology, we help farmers maximize productivity with minimal effort.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-third '
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-three.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-health' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Medical Care</Link>
                            </h5>
                            <p>
                              Set up a secure and user-friendly online donation
                              platform that accepts multiple
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-first'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-one.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-education' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Child Education</Link>
                            </h5>
                            <p>
                              Set up a secure and user-friendly online donation
                              platform that accepts multiple
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-food' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Healthy Food</Link>
                            </h5>
                            <p>
                              Set up a secure and user-friendly online donation
                              platform that accepts multiple
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-third '
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-three.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-road' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Bridging the Mechanization Gap</Link>
                            </h5>
                            <p>
                              Access to tractors and mechanized tools has been a barrier for many rural farmers especially women.
                              WIMA provides affordable equipment rentals, taining and support services to empower smallholder farmers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='slider-navigation'>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              type='button'
              aria-label='prev slide'
              title='prev slide'
              className='prev-difference slider-btn'
            >
              <i className='fa-solid fa-arrow-left' />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type='button'
              aria-label='next slide'
              title='next slide'
              className='next-difference slider-btn slider-btn-next'
            >
              <i className='fa-solid fa-arrow-right' />
            </button>
          </div> */}
        </div>
        {/* <div
          className='shape-hand'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src='/assets/images/difference/shape-hand.png'
            alt='Image_inner'
          />
        </div> */}
      </section>
    </>
  );
};

export default DifferenceOne;
