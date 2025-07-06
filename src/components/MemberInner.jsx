const MemberInner = () => {
  return (
    <section className="volunteer">
      <div className="container">
        <div className="row gutter-40">
          <div className="col-12 col-xl-6">
            {/* <div className='volunteer__content'>
              <div className='section__content'>
                <span className='sub-title'>
                  
                  Become A Member
                </span>
                <h2 className='title-animation_inner'>
                  Membership Requirements
                </h2>
                <p>
                  Membership categories for Women In Mechanized Agriculture (WIMA). WIMA provides a structured framework to accommodate various
                  stakeholders in the agricultural sector, including individuals, organizations, and institutions. Each category has specific requirements and benefits to ensure inclusivity and effective participation.
                </p>
              </div>
              
              <h3>1. Full Membership</h3>
              <u><h5>Who Can Join?</h5></u>
              <ul>
                <li>🚜Women who own, operate or manage tractors and mechanized farming equipment.</li>
                <li>🚜Women-led agribusinesses engaged in mechanized farming service</li>
                <li>🚜Women working in agricultural mechanization, including engineers, farm managers and agronomists</li>
              </ul>
              <br/>
              <u><h5>Benefits</h5></u>
              <div className='details__list' style={{color: "green"}}>
                <ul >
                  <li>
                    <i className='icon-circle-check' />
                    Access to equipment leasing and financing opportunities
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Technical training and capacity-building programs
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Business promotion and networking opportunities
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Inclusion in WIMA's contract farming and service database
                  </li>
                </ul>
              </div>

               <u><h5>How To Join?</h5></u>
              <ul>
                <li>◼️Submit an application with proof of ownership or operation of mechanized agrigultural equipment.</li>
                <li>◼️Pay an annual membership fee</li>
              </ul>
              <br/>

                
              <h3>2. Associate Membership</h3>
              <u><h5>Who Can Join?</h5></u>
              <ul>
                <li>🚜Women who own, operate or manage tractors and mechanized farming equipment.</li>
                <li>🚜Women-led agribusinesses engaged in mechanized farming service</li>
                <li>🚜Women working in agricultural mechanization, including engineers, farm managers and agronomists</li>
              </ul>
              <br/>
              <u><h5>Benefits</h5></u>
              <div className='details__list' style={{color: "green"}}>
                <ul >
                  <li>
                    <i className='icon-circle-check' />
                    Access to equipment leasing and financing opportunities
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Technical training and capacity-building programs
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Business promotion and networking opportunities
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Inclusion in WIMA's contract farming and service database
                  </li>
                </ul>
              </div>

               <u><h5>How To Join?</h5></u>
              <ul>
                <li>◼️Submit an application with proof of ownership or operation of mechanized agrigultural equipment.</li>
                <li>◼️Pay an annual membership fee</li>
              </ul>
              <br/>
              
            </div> */}

            <div className="faq__content">
              <div
                className="section__content"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span className="sub-title">
                  {/* <i className='icon-donation' /> */}
                  Join a Community
                </span>
                <h2 className="title-animation_inner">
                  Membership <span>Plans</span>
                </h2>
              </div>
              <div
                className="faq__content-inner cta"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className="accordion" id="accordion">
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <h5>1. Full Membership</h5>
                      </button>
                    </h6>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <u>
                          <h5>Who Can Join?</h5>
                        </u>
                        <ul>
                          <li>
                            🚜Women who own, operate or manage tractors and
                            mechanized farming equipment.
                          </li>
                          <li>
                            🚜Women-led agribusinesses engaged in mechanized
                            farming service
                          </li>
                          <li>
                            🚜Women working in agricultural mechanization,
                            including engineers, farm managers and agronomists
                          </li>
                        </ul>
                        <br />
                        <u>
                          <h5>Benefits</h5>
                        </u>
                        <div
                          className="details__list"
                          style={{ color: "green" }}
                        >
                          <ul>
                            <li>
                              <i className="icon-circle-check" />
                              Access to equipment leasing and financing
                              opportunities
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Technical training and capacity-building programs
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Business promotion and networking opportunities
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Inclusion in WIMA's contract farming and service
                              database
                            </li>
                          </ul>
                        </div>
                        <u>
                          <h5>How To Join?</h5>
                        </u>
                        <ul>
                          <li>
                            ◼️Submit an application with proof of ownership or
                            operation of mechanized agrigultural equipment.
                          </li>
                          <li>◼️Pay an annual membership fee</li>
                          <li>◼️Fill the form to get started</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <h5>2. Associate Membership</h5>
                      </button>
                    </h6>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <u>
                          <h5>Who Can Join?</h5>
                        </u>
                        <ul>
                          <li>
                            🚜Women who own, operate or manage tractors and
                            mechanized farming equipment.
                          </li>
                          <li>
                            🚜Women-led agribusinesses engaged in mechanized
                            farming service
                          </li>
                          <li>
                            🚜Women working in agricultural mechanization,
                            including engineers, farm managers and agronomists
                          </li>
                        </ul>
                        <br />
                        <u>
                          <h5>Benefits</h5>
                        </u>
                        <div
                          className="details__list"
                          style={{ color: "green" }}
                        >
                          <ul>
                            <li>
                              <i className="icon-circle-check" />
                              Access to equipment leasing and financing
                              opportunities
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Technical training and capacity-building programs
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Business promotion and networking opportunities
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Inclusion in WIMA's contract farming and service
                              database
                            </li>
                          </ul>
                        </div>

                        <u>
                          <h5>How To Join?</h5>
                        </u>
                        <ul>
                          <li>
                            ◼️Submit an application with proof of ownership or
                            operation of mechanized agrigultural equipment.
                          </li>
                          <li>◼️Pay an annual membership fee</li>
                          <li>◼️Fill the form to get started</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                      <h5>3. Youth & Student Membership</h5>

                      </button>
                    </h6>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <u>
                          <h5>Who Can Join?</h5>
                        </u>
                        <ul>
                          <li>
                            🚜Female students and young professionals in agriculture, agribusiness or engineering fields.
                          </li>
                          
                        </ul>
                        <br />
                        <u>
                          <h5>Benefits</h5>
                        </u>
                        <div
                          className="details__list"
                          style={{ color: "green" }}
                        >
                          <ul>
                            <li>
                              <i className="icon-circle-check" />
                              Internship and mentorship programs
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Skill-building workshops on mechanized farming
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Scholarships and funding opportunities for agricultural innovation
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                             Participating in WIMA networking events and conferences.
                            </li>
                          </ul>
                        </div>

                        <u>
                          <h5>How To Join?</h5>
                        </u>
                        <ul>
                          <li>
                            ◼️Submit an application with proof of ownership or
                            operation of mechanized agricultural equipment.
                          </li>
                          <li>◼️Pay a subsidized membership fee</li>
                          <li>◼️Fill the form to get started</li>
                        </ul>

                        
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <h5>4. Operator Membership</h5>
                      </button>
                    </h6>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <u>
                          <h5>Who Can Join?</h5>
                        </u>
                        <ul>
                          <li>
                            🚜Women who operate tractors, harvesters, planters and other mechanized farming equipment
                          </li>
                          <li>
                            🚜Women-led or women-employed agricultural service providers
                          </li>
                          <li>
                            🚜Mechanized farming cooperatives and contractor groups
                          </li>
                        </ul>
                        <br />
                        <u>
                          <h5>Benefits</h5>
                        </u>
<div
                          className="details__list"
                          style={{ color: "green" }}
                        >
                          <ul>
                            <li>
                              <i className="icon-circle-check" />
                              Certification programs for professional mechanization operators
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Access to leasing and lending for equipment
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Scholarships and funding opportunities for agricultural innovation
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                             Inclusion in WIMA's database for service contracting and matchmaking
                            </li>
                             <li>
                              <i className="icon-circle-check" />
                             Networking with farmers, investors and policy-makers
                            </li>
                          </ul>
                        </div>

                        <u>
                          <h5>How To Join?</h5>
                        </u>
                        <ul>
                          <li>
                            ◼️Provide proof of experience as an operator or mechanization service provider.
                          </li>
                          <li>◼️Complete a skills assessment or certification process (if applicable)</li>
                          <li>◼️Pay an operator-tier membership fee</li>
                          <li>◼️Fill the form to get started</li>
                        </ul>

                      </div>
                    </div>
                  </div>


                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <h5>5. Corporate/Insititution Membership</h5>
                      </button>
                    </h6>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <u>
                          <h5>Who Can Join?</h5>
                        </u>
                        <ul>
                          <li>
                            🚜Women-led agribusinesses, cooperatives or organizations supporting mechanized agriculture
                          </li>
                          <li>
                            🚜Equipment manufacturers, suppliers, or leasing firms supporting WIMA's mission
                          </li>
                          <li>
                            🚜Government agencies, NGOs, and international organizations working in agricultural mechanization
                          </li>
                        </ul>
                        <br />
                        <u>
                          <h5>Benefits</h5>
                        </u>
<div
                          className="details__list"
                          style={{ color: "green" }}
                        >
                          <ul>
                            <li>
                              <i className="icon-circle-check" />
                              Business-to-business networking with industry leaders
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Policy engagement and collaboration with stakeholders
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                              Exclusive sponsorship and branding opportunities at WIMA events
                            </li>
                            <li>
                              <i className="icon-circle-check" />
                             Eligibility for WIMA-led procurement and partnership programs
                            </li>
                            
                          </ul>
                        </div>

                        <u>
                          <h5>How To Join?</h5>
                        </u>
                        <ul>
                          <li>
                            ◼️Submit company registration details
                          </li>
                          <li>◼️Provide a statement on how the company aligns with WIMA's mission</li>
                          <li>◼️Pay an annual corporate membership fee</li>
                          <li>◼️Fill the form to get started</li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <div
              className="volunteer__form checkout__form"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className="volunteer__form-content">
                <h4 className="title-animation_inner">Fill Up The Form</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form action="#" method="post" className="cta">
                <div className="input-group">
                  <div className="input-single">
                    <input
                      type="text"
                      name="c-name"
                      id="cName"
                      placeholder="First Name"
                      required=""
                    />
                    <i className="fa-solid fa-user" />
                  </div>
                  <div className="input-single">
                    <input
                      type="text"
                      name="c-lastname"
                      id="clastName"
                      placeholder="Last Name"
                      required=""
                    />
                    <i className="fa-solid fa-user" />
                  </div>
                </div>
                <div className="input-single">
                  <input
                    type="email"
                    name="c-email"
                    id="cEmail"
                    placeholder="Enter Email"
                    required=""
                  />
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="input-group">
                  <div className="input-single">
                    <input
                      type="text"
                      name="phone-number"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      required=""
                    />
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className="input-single">
                    <input
                      type="text"
                      name="profession"
                      id="profession"
                      placeholder="Occupation"
                      required=""
                    />
                    <i className="fa-solid fa-user-tie" />
                  </div>
                </div>
                <div className="input-single alter-input">
                  <textarea
                    name="contact-message"
                    id="contactMessage"
                    placeholder="your message..."
                    defaultValue={""}
                  />
                  <i className="fa-solid fa-comments" />
                </div>
                <div className="form-cta">
                  <button
                    type="submit"
                    aria-label="submit message"
                    title="submit message"
                    className="btn--primary"
                  >
                    Submit Now <i className="fa-solid fa-arrow-right" />
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

export default MemberInner;
