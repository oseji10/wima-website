const FaqTwo = () => {
  return (
    <section className='faq'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8 col-xl-6'>
            <div className='faq__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                {/* <span className='sub-title'>
                  <i className='icon-donation' />
                  Start donating poor people
                </span> */}
                <h2 className='title-animation_inner'>
                  Frequently <span>Asked</span>
                  Questions
                </h2>
              </div>
              <div
                className='faq__content-inner cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='accordion' id='accordion'>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        What is WIMA Nigeria?
                      </button>
                    </h6>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                         WIMA Nigeria (Women in Mechanized Agriculture) is the first women-led tractor and equipment association in West Africa. Our mission is to empower women farmers through access to mechanized agricultural services, affordable financing, capacity-building programs, and gender-inclusive agrarian policies. We drive rural development and sustainable farming practices across Nigeria.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        What services does WIMA Nigeria provide to farmers?
                      </button>
                    </h6>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                         WIMA Nigeria provides women access to tractor and farm equipment leasing, credit and financial support, agricultural training workshops, market linkage programs, and advocacy for inclusive agricultural policies. We enable women farmers to scale their farming operations and participate fully in Nigeria’s agricultural economy.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        How does WIMA Nigerai make mechanized farming accessible to women?
                      </button>
                    </h6>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Through a leasing system, WIMA Nigeria rents out tractors, seed planters, harvesters, and post-harvest equipment at affordable rates. This lowers barriers for women farmers who traditionally lacked access to modern farming tools, helping them increase their farm yields and income sustainably.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingFour'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseFour'
                      >
                        What financing options are available for women farmers at WIMA Nigeria?
                      </button>
                    </h6>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFour'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          WIMA partners with financial institutions to provide affordable loans, credit schemes, and equipment leasing options tailored specifically for women smallholder farmers and agricultural service providers. These financing solutions help women access inputs and machinery critical for expanding their farms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingFive'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFive'
                        aria-expanded='false'
                        aria-controls='collapseFive'
                      >
                        How does WIMA build capacity among women farmers?
                      </button>
                    </h6>
                    <div
                      id='collapseFive'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFive'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          WIMA Nigeria offers hands-on training programs that cover mechanized farming techniques, agribusiness management, climate-smart agriculture, and leadership skills. These programs equip women with practical knowledge to manage farms successfully and lead agricultural cooperatives or businesses.
                        </p>
                      </div>
                    </div>
                  </div>



                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingSix'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseSix'
                        aria-expanded='false'
                        aria-controls='collapseSix'
                      >
                        What is the WIMA model (or mentorship program)?
                      </button>
                    </h6>
                    <div
                      id='collapseSix'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingSix'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          WIMA’s membership is open to women farmers, youth in agriculture, agro-service providers, investors, and institutional partners. Benefits include priority access to equipment leasing, discounted training, funding opportunities, business mentorship, and joining a strong network of women agricultural entrepreneurs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingSeven'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseSeven'
                        aria-expanded='false'
                        aria-controls='collapseSeven'
                      >
                        How can urban women and investors partner with WIMA Nigeria?
                      </button>
                    </h6>
                    <div
                      id='collapseSeven'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingSeven'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Urban women and investors can partner by investing in WIMA’s equipment leasing programs, funding training initiatives, or sponsoring community farming hubs. Through WIMA, investors help rural women farmers access the tools and financing needed for growth, contributing to sustainable food systems in Nigeria.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingEight'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseEight'
                        aria-expanded='false'
                        aria-controls='collapseEight'
                      >
                        How does WIMA Nigeria advocate for women in agriculture?
                      </button>
                    </h6>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingSeven'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          WIMA Nigeria actively champions gender-inclusive agricultural policies at local, state, and national levels. We lobby for women’s participation in government programs, fair access to land, grants, mechanization support, and agricultural decision-making spaces across Nigeria.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingNine'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseNine'
                        aria-expanded='false'
                        aria-controls='collapseNine'
                      >
                        What projects has WIMA successfully executed?
                      </button>
                    </h6>
                    <div
                      id='collapseNine'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingNine'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          WIMA Nigeria has deployed tractors and mechanization services in several states, launched capacity-building projects funded by international organizations like the Mastercard Foundation, and expanded rural women’s access to financing and agricultural inputs across Northern and Southern Nigeria.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingTen'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTen'
                        aria-expanded='false'
                        aria-controls='collapseTen'
                      >
                        How can I contact WIMA Nigeria for membership or partnership opportunities?
                      </button>
                    </h6>
                    <div
                      id='collapseTen'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTen'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          To join or partner with WIMA Nigeria, click here and fill out the membership or contact form. You can also reach out via their official email and social media channels to start your journey supporting women-led agricultural growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-5 offset-xl-1'>
            <div className='faq__thumb d-none d-lg-block'>
              <div className='faq__thumb-inner'>
                <div
                  className='thumb-lg'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src='/assets/images/woman1.png' alt='Image_inner' />
                </div>
                {/* <div
                  className='thumb-sm'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img src='/assets/images/faq/thumb-sm.png' alt='Image_inner' />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape d-none d-lg-block'>
        <img src='assets/images/faq/shape.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default FaqTwo;
