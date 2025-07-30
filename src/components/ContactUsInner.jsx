const ContactUsInner = () => {
  return (
    <section className='contact-main volunteer'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-6'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                {/* <span className='sub-title'>
                  <i className='icon-donation' /> Get In Touch
                </span> */}
                <h2 className='title-animation_inner'>Contact Us</h2>
                <p>
                  Perhaps you want to reach out for further inquiries. Please say hello to us via any of the channels below:
                </p>
              </div>
              <div className='contact-main__inner cta'>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='content'>
                    <h6>Location</h6>
                    <p style={{textTransform: 'none !important'}}>
                        House 2, Block B, Sani Zangon Daura Estate, Kado, Abuja, Nigeria
                      
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='content'>
                    <h6>Phone</h6>
                    <p>
                      <a href='tel:2305-587-3407'>+234-806-4237-096 </a>
                    </p>
                    {/* <p>
                      <a href='tel:2305-587-3407'>+236 (456) 896 22</a>
                    </p> */}
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-envelope' />
                  </div>
                  <div className='content'>
                    <h6>Email</h6>
                    <p>
                      <a href='mailto:info@wimanigeria.com'>info@wimanigeria.com</a>
                    </p>
                    {/* <p>
                      <a href='mailto:support@example.com'>
                        charifund@email.com
                      </a>
                    </p> */}
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-share-nodes' />
                  </div>
                  <div className='content'>
                    <h6>Social</h6>
                    <div className='social'>
                      <a
                        href='https://web.facebook.com/womeninmechanizedagriculture?_rdc=1&_rdr'
                        target='_blank'
                        aria-label='share us on facebook'
                        title='facebook'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-facebook-f' />
                      </a>
                      <a
                        href='https://x.com/wimanigeria'
                        target='_blank'
                        aria-label='share us on x'
                        title='vimeo'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-x-twitter' />
                      </a>
                      <a
                        href='https://www.instagram.com/wima.nigeria/'
                        target='_blank'
                        aria-label='share us on instagram'
                        title='instagram'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-instagram' />
                      </a>
                      <a
                        href='https://www.linkedin.com/company/106617937/admin/page-posts/published/'
                        target='_blank'
                        aria-label='share us on linkedin'
                        title='linkedin'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-linkedin-in' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact-main__thumb cta'>
                <img src='assets/images/contact-thumb.png' alt='Image_inner' />
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <div
              className='contact__form volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Fill Up The Form</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form action='#' method='post' className='cta'>
                <div className='input-single'>
                  <input
                    type='text'
                    name='full-name'
                    id='fullName'
                    placeholder='Enter Name'
                    required=''
                  />
                  <i className='fa-solid fa-user' />
                </div>
                <div className='input-single'>
                  <input
                    type='email'
                    name='c-email'
                    id='cEmail'
                    placeholder='Enter Email'
                    required=''
                  />
                  <i className='fa-solid fa-envelope' />
                </div>
                <div className='input-single'>
                  <input
                    type='text'
                    name='phone-number'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    required=''
                  />
                  <i className='fa-solid fa-phone' />
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='contact-message'
                    id='contactMessage'
                    placeholder='Your Message...'
                    defaultValue={""}
                  />
                  <i className='fa-solid fa-comments' />
                </div>
                <div className='form-cta'>
                  <button
                    type='submit'
                    aria-label='submit message'
                    title='submit message'
                    className='btn--primary'
                  >
                    Get In Touch <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInner;
