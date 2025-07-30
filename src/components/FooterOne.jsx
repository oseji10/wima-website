import Link from "next/link";

const FooterOne = () => {
  return (
    <>
      <footer className='footer-two'>
        <div className='container'>
          <div className='row align-items-center gutter-30'>
            <div className='col-12 col-lg-7 col-xxl-6'>
              <div className='footer-two__newsletter-content'>
                <h3 className='title-animation_inner'>
                  Subscribe to Our Newsletter
                </h3>
                <p>Want regular news about what's happening? Subscribe to our newsletter</p>
              </div>
            </div>
            <div className='col-12 col-lg-5 col-xxl-5 offset-xxl-1'>
              <div className='footer-two__newsletter-form'>
                <form action='#' method='post'>
                  <input
                    type='email'
                    required=''
                    name='subscribe-email'
                    id='subscribeEmail'
                    placeholder='Enter Email'
                  />
                  <button
                    type='submit'
                    aria-label='subscribe to our newsletter'
                    title='subscribe to our newsletter'
                    className='btn--primary'
                  >
                    {" "}
                    <i className='fa-solid fa-paper-plane' />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <hr className='divider' />
            </div>
          </div>
          <div className='row gutter-60'>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='footer-two__widget-logo'>
                  <Link href='/'>
                    <img src='/assets/images/wima-base.png'width="40%" alt='Image_inner' />
                  </Link>
                </div>
                <div className='footer-two__widget-content'>
                  <p style={{textTransform: 'none'}}>
                    At WIMA, we're revolutionizing mechanized agriculture. We do this by encouraging more women inclusion in mechanized agriculture. Our mission is to empower as many women as possible
                  </p>
                  <div className='social'>
                    <Link
                      href='https://web.facebook.com/womeninmechanizedagriculture?_rdc=1&_rdr'
                      target='_blank'
                      aria-label='share us on facebook'
                      title='facebook'
                    >
                      <i className='fa-brands fa-facebook-f' />
                    </Link>
                    <Link
                      href='https://www.instagram.com/wima.nigeria/'
                      target='_blank'
                      aria-label='share us on instagram'
                      title='instagram'
                    >
                      <i className='fa-brands fa-instagram' />
                    </Link>
                    <Link
                      href='https://x.com/wimanigeria'
                      target='_blank'
                      aria-label='share us on x'
                      title='X'
                    >
                      <i className='fa-brands fa-x-twitter' />
                    </Link>
                    <Link
                      href='https://www.linkedin.com/company/106617937/admin/page-posts/published/'
                      target='_blank'
                      aria-label='share us on linkedin'
                      title='linkedin'
                    >
                      <i className='fa-brands fa-linkedin-in' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-2 offset-xl-1'>
              <div
                className='footer-two__widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Quick Links</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content'>
                  <ul>
                    <li>
                      <Link href='/about-us'>
                        <i className='fa-solid fa-arrow-right' />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-team'>
                        <i className='fa-solid fa-arrow-right' />
                        The Team
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-arrow-right' />
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href='/faq'>
                        <i className='fa-solid fa-arrow-right' />
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-arrow-right' />
                        Book A Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget footer-two__widget--alternate'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={400}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Our Services</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content'>
                  <ul>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-arrow-right' />
                        Threshing
                      </Link>
                    </li>
                    <li>
                      <Link href='/events'>
                        <i className='fa-solid fa-arrow-right' />
                        Pumping
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-arrow-right' />
                        Spraying
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-arrow-right' />
                        Drying
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-arrow-right' />
                        More...
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget footer-two__widget--alternate'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Get In Touch</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content footer-two__widget-content--contact'>
                  <ul>
                    <li>
                      <Link
                        href='/https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8'
                        target='_blank'
                        style={{textTransform: 'none'}}
                      >
                        <i className='fa-solid fa-location-dot' />
                        House 2, Block B, Sani Zangon Daura Estate, Kado, Abuja, Nigeria
                      </Link>
                    </li>
                    <li>
                      <Link href='/tel:2305-587-3407'>
                        <i className='fa-solid fa-phone' />
                        +234-806-4237-096
                      </Link>
                    </li>
                    <li>
                      <Link style={{textTransform: 'none'}}  className="footer-two__widget-content--contact2" href='/mailto:info@wimanigeria.com'>
                        <i className='fa-regular fa-envelope'  />
                        info@wimanigeria.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-two__copyright'>
          <div className='container'>
            <div className='row align-items-center gutter-12'>
              <div className='col-12 col-lg-6'>
                <div className='footer-two__copyright-inner text-center text-lg-start'>
                  <p>
                    Copyright © <span id='copyrightYear' />{" "}
                    <Link href='/'>WIMA - Women in Mechanized Agriculture</Link>. All rights reserved. Powered by Resilience Nigeria
                  </p>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='footer__bottom-left'>
                  <ul className='footer__bottom-list justify-content-center justify-content-lg-end'>
                    <li>
                      <Link href='/terms-conditions'>
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href='/privacy-policy'>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href='/privacy-policy'>Cookie Settings</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='sprade' data-aos='zoom-in' data-aos-duration={1000}>
          <img
            src='assets/images/sprade.png'
            alt='Image_inner'
            className='base-img'
          />
        </div>
        <div
          className='sprade-light'
          data-aos='zoom-in'
          data-aos-duration={1000}
        >
          <img src='assets/images/sprade-light.png' alt='Image_inner' />
        </div> */}
      </footer>
    </>
  );
};

export default FooterOne;
