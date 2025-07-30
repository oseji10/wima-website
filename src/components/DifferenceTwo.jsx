"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const DifferenceTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <>
      <section className='difference-two'>
        <div className='container'>
          <div className='row gutter-40 align-items-center'>
            <div className='col-12 col-lg-4 col-xxl-5 d-none d-lg-block'>
              <div className='difference-two__thumb-wrapper'>
                <div className='difference-two__thumb'>
                  <div
                    className='thumb-lg'
                    data-aos='fade-right'
                    data-aos-duration={1000}
                  >
                    <img
                      src='/assets/images/md-wima.png'
                      alt='Image_inner'
                    />
                    <div className='grid-line'>
                      {/* <img
                        src='/assets/images/md-wima.png'
                        alt='Image_inner'
                        className='base-img'
                      /> */}
                    </div>
                    <div className='video-btn-wrapper'>
                      <button
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-8 col-xxl-7' style={{ marginTop: "-150px" }}>
              <div className='difference-two__tab'>
                <div className='difference-two__content'>
                  <h2 className='title-animation_inner'>
                    About <span>WIMA</span> 
                  </h2>
                  <p style={{textTransform: 'none'}}>
                    Women in Mechanized Agriculture (WIMA) is the first and only women-led agricultural mechanization association in Nigeria, dedicated to empowering women farmers through access to modern farming tools, training, and investment opportunities. Since 2019, WIMA has been at the forefront of transforming agriculture through mechanization, providing affordable and sustainable mechanized solutions to enhance productivity and economic growth for women in agriculture. 
                  </p>
                    <p style={{textTransform: 'none'}}>WIMA is West Africa's pioneering and sole Tractor & Equipment Association entirely owned and operated by women. We are dedicated to revolutionizing agriculture in West Africa by empowering women through mechanized farming.

By empowering women with the tools and knowledge they need to succeed, WIMA is driving a transformative shift in agriculture within West Africa, increasing productivity, and creating a more prosperous and sustainable future for all.</p>
                  <div className='difference-two__inner cta'>
                    <div className='difference-two__inner-content'>
                      <div className='difference-two__tab'>
                        <div className='difference-two__tab-btns'>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "mission" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("mission")}
                            aria-label='mission'
                            title='mission'
                          >
                            Our Mission
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "vision" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("vision")}
                            aria-label='vision'
                            title='vision'
                          >
                            Our Vision
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "excellence" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("excellence")}
                            aria-label='excellence'
                            title='excellence'
                          >
                            Core Values
                          </button>
                        </div>

                        <div className='difference-two__tab-content'>
                          {activeTab === "mission" && (
                            <div
                              className='difference-two__content-single'
                              id='mission'
                            >
                              <p style={{textTransform: 'none'}}>We are a team inspired to empower women in West Africa to lead the agricultural revolution through accessible and women-owned mechanised farming services. We enhance farming efficiency, increase productivity, and uplift rural communities by providing training, support, and access to technology through which we foster sustainable agricultural practices and driving economic prosperity across West Africa.</p>
                            </div>
                          )}
                          {activeTab === "vision" && (
                            <div
                              className='difference-two__content-single'
                              id='vision'
                            >
                              <p style={{textTransform: 'none'}}>WIMA envisions a West Africa where women lead the transformation of agriculture through innovative mechanised farming to create a prosperous and sustainable future for all</p>
                            </div>
                          )}
                          {activeTab === "excellence" && (
                            <div
                              className='difference-two__content-single'
                              id='excellence'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> Empowerment
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Sustainability
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Inclusivity
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Resilience
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Excellence
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced What We Do Section */}
      <section className="what-we-do-section pt-120 pb-90 bg-light">
        <div className="container" >
          <div className="section-header text-center mb-60">
            <h2 className="section-title">What We Do</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="service-card h-100">
                    <div className="card-icon">
                      <i className="fas fa-tractor text-primary"></i>
                    </div>
                    <h4>Equip women farmers with mechanized tools and technology</h4>
                    <ul className="service-list">
                      <li><i className='fa-solid fa-check text-primary' /> Providing time/labor-saving equipment (tillers, planters, harvesters)</li>
                      <li><i className='fa-solid fa-check text-primary' /> Reducing physical burden of manual farming</li>
                      <li><i className='fa-solid fa-check text-primary' /> Increasing productivity and farm yields</li>
                      <li><i className='fa-solid fa-check text-primary' /> Bridging gender gap in access to farm technology</li>
                    </ul>
                  </div>
                </div>
               
                <div className="col-md-6 mb-4">
                  <div className="service-card h-100">
                    <div className="card-icon">
                      <i className="fas fa-seedling text-success"></i>
                    </div>
                    <h4>Facilitate investments in sustainable agriculture</h4>
                    <ul className="service-list">
                      <li><i className='fa-solid fa-check text-success' />Connecting women farmers to financing for eco-friendly practices</li>
                      <li><i className='fa-solid fa-check text-success' /> Promoteing climate-smart techniques (conservation agriculture, irrigation)</li>
                      <li><i className='fa-solid fa-check text-success' /> Supporting transition to renewable energy solutions</li>
                      <li><i className='fa-solid fa-check text-success' /> Creating business cases for green technologies</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card h-100">
                    <div className="card-icon">
                      <i className="fas fa-business-time text-info"></i>
                    </div>
                    <h4>Train and support women-led agribusinesses</h4>
                    <ul className="service-list">
                      <li><i className='fa-solid fa-check text-info' />Ensuring business skills development (financial literacy, value addition)</li>
                      <li><i className='fa-solid fa-check text-info' /> Providing market access through cooperatives and linkages</li>
                      <li><i className='fa-solid fa-check text-info' /> Organizing mentorship programs for female agripreneurs</li>
                      <li><i className='fa-solid fa-check text-info' /> Strengthening entire agricultural value chains</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card h-100">
                    <div className="card-icon">
                      <i className="fas fa-people-arrows text-warning"></i>
                    </div>
                    <h4>Advocate for gender inclusion in agricultural mechanization</h4>
                    <ul className="service-list">
                      <li><i className='fa-solid fa-check text-warning' />Providing policy engagement for equitable equipment access</li>
                      <li><i className='fa-solid fa-check text-warning' /> Challenging cultural barriers to women's tech adoption</li>
                      <li><i className='fa-solid fa-check text-warning' /> Promoting women's leadership in farm mechanization</li>
                      <li><i className='fa-solid fa-check text-warning' /> Collecting/disaggregating data to demonstrate impact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="what-we-do-image" data-aos="fade-left">
                <img 
                  src="/assets/images/woman2.png" 
                  alt="Women in Mechanized Agriculture" 
                  className="img-fluid rounded shadow-lg"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Where We Work Section */}
      <section className="where-we-work-section pb-120 pt-90">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h2 className="section-title">Where We Work</h2>
            <div className="divider mx-auto"></div>
            <p style={{textTransform: "none"}} className="section-subtitle mt-3">We currently operate in 4 states in Nigeria and we are expanding rapidly to other states</p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="map-container position-relative">
                <img 
                  src="/assets/images/NigeriaMap2.svg" 
                  alt="Our Presence in West Africa" 
                  className="img-fluid rounded shadow" 
                />
                <div className="location-pin" style={{top: '20%', left: '48%'}}>
                  <div className="pulse"></div>
                  <div className="pin">Kano</div>
                </div>
                <div className="location-pin" style={{top: '38%', left: '45%'}}>
                  <div className="pulse"></div>
                  <div className="pin">Kaduna</div>
                </div>
                <div className="location-pin" style={{top: '40%', left: '70%'}}>
                  <div className="pulse"></div>
                  <div className="pin">Gombe</div>
                </div>

                <div className="location-pin" style={{top: '50%', left: '78%'}}>
                  <div className="pulse"></div>
                  <div className="pin">Adamawa</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="regions-list">
                <h3 className="mb-4">Our Active Hubs</h3>
                <div className="country-card mb-4">
                  <div className="country-flag">
                    <img src="/assets/images/adamawa.svg" alt="Nigeria Flag" />
                  </div>
                  <div className="country-info">
                    <h5>Adamawa</h5>
                    
                   <i className='fa fa-bullseye text-success' /> Demsa &nbsp;
                    <i className='fa fa-bullseye text-success' /> Numan &nbsp;
                    <i className='fa-solid fa-bullseye text-success' /> Gyawana
                  </div>
                </div>
                <div className="country-card mb-4">
                  <div className="country-flag">
                    <img src="/assets/images/gombe.svg" alt="Gombe Map" />
                  </div>
                  <div className="country-info">
                    <h5>Gombe</h5>
                   <i className='fa fa-bullseye text-success' /> Zambuk &nbsp;
                    <i className='fa fa-bullseye text-success' /> Mallam Sidi &nbsp;
                    <i className='fa-solid fa-bullseye text-success' /> Gyalengu
                  </div>
                </div>
                <div className="country-card mb-4">
                  <div className="country-flag">
                    <img src="/assets/images/kaduna.svg" alt="Kaduna Map" />
                  </div>
                  <div className="country-info">
                    <h5>Kaduna</h5>
                    <i className='fa fa-bullseye text-success' /> Soba &nbsp;
                    <i className='fa fa-bullseye text-success' /> Kachia &nbsp;
                    <i className='fa-solid fa-bullseye text-success' /> Zaria
                  </div>
                </div>


                <div className="country-card mb-4">
                  <div className="country-flag">
                    <img src="/assets/images/kano.svg" alt="Kaduna Map" />
                  </div>
                  <div className="country-info">
                    <h5>Kano</h5>
                    <i className='fa fa-bullseye text-success' /> Kura &nbsp;
                    <i className='fa fa-bullseye text-success' /> Bagwai &nbsp;
                    <i className='fa-solid fa-bullseye text-success' /> Gwarzo
                  </div>
                </div>

                
                {/* <div className="impact-stats row mt-5">
                  <div className="col-4 text-center">
                    <div className="stat-circle">
                      <h3 className="counter">8</h3>
                      <p>Countries</p>
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <div className="stat-circle">
                      <h3 className="counter">120+</h3>
                      <p>Communities</p>
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <div className="stat-circle">
                      <h3 className="counter">50K+</h3>
                      <p>Women Empowered</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel='custom'
        url='/assets/images/about-us.mp4'
        autoplay
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />

      <style jsx>{`
        /* What We Do Section Styles */
        .what-we-do-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ee 100%);
          position: relative;
          overflow: hidden;
        }
        
        .section-header .divider {
          width: 80px;
          height: 3px;
          background: linear-gradient(to right, #28a745, #80c683);
          margin: 15px auto;
        }
        
        .service-card {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .card-icon {
          width: 60px;
          height: 60px;
          background: rgba(40, 167, 69, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 24px;
        }
        
        .service-card h4 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        .service-list {
          padding-left: 0;
          list-style: none;
        }
        
        .service-list li {
          margin-bottom: 10px;
          position: relative;
          padding-left: 25px;
        }
        
        .service-list i {
          position: absolute;
          left: 0;
          top: 5px;
        }
        
        .what-we-do-image {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .what-we-do-image img {
          transition: transform 0.5s ease;
        }
        
        .what-we-do-image:hover img {
          transform: scale(1.03);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
        }
        
        /* Where We Work Section Styles */
        .map-container {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .location-pin {
          position: absolute;
          transform: translate(-50%, -50%);
        }
        
        .pin {
          width: 20px;
          height: 20px;
          background: #28a745;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: relative;
        }
        
        .pulse {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(40, 167, 69, 0.3);
          border-radius: 50%;
          top: -10px;
          left: -10px;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {transform: scale(0.8); opacity: 1;}
          70% {transform: scale(1.3); opacity: 0;}
          100% {opacity: 0;}
        }
        
        .country-card {
          display: flex;
          align-items: center;
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .country-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .country-flag {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
        
        .country-flag img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .country-info h5 {
          color: #2c3e50;
          margin-bottom: 5px;
        }
        
        .country-info p {
          color: #7f8c8d;
          font-size: 14px;
          margin-bottom: 0;
        }
        
        .stat-circle {
          background: white;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 2px solid rgba(40, 167, 69, 0.2);
        }
        
        .stat-circle h3 {
          color: #28a745;
          font-weight: 700;
          margin-bottom: 0;
        }
        
        .stat-circle p {
          font-size: 12px;
          color: #7f8c8d;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default DifferenceTwo;