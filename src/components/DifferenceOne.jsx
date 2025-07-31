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
    arrows: false,
    dots: true,
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
    <section className="wima-difference">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Our Value Proposition</span>
          </div>
          <h2>Why Choose <span className="highlight">WIMA</span>?</h2>
          <p className="section-description">
            At Women in Mechanized Agriculture Association of West Africa, we're transforming agriculture through female empowerment and modern technology.
          </p>
        </div>

        <div className="features-slider">
          <Slider {...settings} ref={sliderRef}>
            <div className="feature-card">
              <div className="card-inner">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Women-Owned, Women-Led</h3>
                <p>
                  Pioneering the first women-led mechanization service in West Africa, we equip female farmers with modern tools and expertise to own and manage agricultural technology.
                </p>
                <Link href="/become-a-member" className="learn-more">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-inner">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Sustainable & Efficient</h3>
                <p>
                  Our eco-friendly mechanization solutions reduce labor by 60% while increasing yields. We combine modern technology with sustainable practices for maximum productivity.
                </p>
                <Link href="/sustainable-farming" className="learn-more">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-inner">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9H15.01" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H9.01" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Bridging the Gap</h3>
                <p>
                  We remove barriers to mechanization with affordable equipment rentals and comprehensive training programs tailored for smallholder women farmers.
                </p>
                <Link href="/mechanization-programs" className="learn-more">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .wima-difference {
          padding: 100px 0;
          background: linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%);
          position: relative;
          overflow: hidden;
        }

        .wima-difference::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: linear-gradient(90deg, #ffc107, #122f2a);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }

        .section-tag {
          display: inline-block;
          margin-bottom: 15px;
        }

        .section-tag span {
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          color: #122f2a;
          margin-bottom: 20px;
          font-weight: 700;
          line-height: 1.2;
        }

        .highlight {
          color: #ffc107;
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(255, 193, 7, 0.3);
          z-index: -1;
        }

        .section-description {
          color: #555;
          font-size: 1.2rem;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        .features-slider {
          position: relative;
          padding: 0 20px;
        }

        .feature-card {
          padding: 0 15px;
          outline: none;
        }

        .card-inner {
          background: white;
          border-radius: 16px;
          padding: 40px 30px;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(18, 47, 42, 0.1);
          position: relative;
          overflow: hidden;
        }

        .feature-card:hover .card-inner {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border-color: rgba(255, 193, 7, 0.5);
        }

        .card-inner::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #ffc107, #122f2a);
        }

        .card-icon {
          width: 70px;
          height: 70px;
          background: rgba(18, 47, 42, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        .card-icon svg {
          width: 32px;
          height: 32px;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          color: #122f2a;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .feature-card p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 25px;
          font-size: 1rem;
        }

        .learn-more {
          display: inline-flex;
          align-items: center;
          color: #122f2a;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .learn-more span {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .learn-more:hover {
          color: #ffc107;
        }

        .learn-more:hover span {
          transform: translateX(5px);
        }

        /* Slider dots customization */
        :global(.slick-dots) {
          bottom: -50px !important;
        }

        :global(.slick-dots li button:before) {
          color: #122f2a;
          opacity: 0.3;
          font-size: 12px;
        }

        :global(.slick-dots li.slick-active button:before) {
          color: #ffc107;
          opacity: 1;
        }

        @media (max-width: 992px) {
          .wima-difference {
            padding: 80px 0;
          }
          
          .section-header h2 {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 768px) {
          .wima-difference {
            padding: 60px 0;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .section-description {
            font-size: 1.1rem;
          }
          
          .card-inner {
            padding: 30px 25px;
          }
        }

        @media (max-width: 576px) {
          .section-header h2 {
            font-size: 1.8rem;
          }
          
          .section-tag span {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default DifferenceOne;