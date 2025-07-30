"use client";
import { useState } from 'react';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('equipment');

  const services = {
    equipment: [
      {
        title: "Tractor Services",
        description: "Comprehensive tractor services including plowing, harrowing, and hauling for small and large-scale farms.",
        icon: "🚜",
        features: [
          "Precision plowing for optimal soil preparation",
          "Customizable service packages",
          "Modern, well-maintained equipment",
          "Experienced female operators"
        ],
        image: "/images/tractor-service.jpg"
      },
      {
        title: "Harvester Services",
        description: "Efficient harvesting solutions for various crops to maximize yield and minimize post-harvest losses.",
        icon: "🌾",
        features: [
          "Timely harvesting to ensure crop quality",
          "Grain and crop-specific harvesting",
          "Post-harvest handling support",
          "Yield measurement and reporting"
        ],
        image: "/images/harvester-service.jpg"
      },
      {
        title: "Planter Services",
        description: "Precision planting services using modern mechanized planters for optimal seed placement.",
        icon: "🌱",
        features: [
          "Uniform seed spacing and depth",
          "Reduced seed wastage",
          "Time-efficient planting",
          "Custom configurations for different crops"
        ],
        image: "/images/planter-service.jpg"
      }
    ],
    training: [
      {
        title: "Equipment Operation Training",
        description: "Hands-on training programs for women to become certified operators of agricultural machinery.",
        icon: "👩‍🏫",
        features: [
          "Beginner to advanced courses",
          "Safety certification programs",
          "Practical field training",
          "Job placement assistance"
        ],
        image: "/images/training-service.jpg"
      },
      {
        title: "Maintenance Workshops",
        description: "Technical training on equipment maintenance and basic repairs to ensure operational efficiency.",
        icon: "🔧",
        features: [
          "Preventive maintenance techniques",
          "Troubleshooting common issues",
          "Spare parts management",
          "Cost-effective maintenance strategies"
        ],
        image: "/images/maintenance-service.jpg"
      }
    ],
    consulting: [
      {
        title: "Farm Mechanization Planning",
        description: "Expert advice on transitioning from manual to mechanized farming operations.",
        icon: "📊",
        features: [
          "Customized mechanization plans",
          "Cost-benefit analysis",
          "Equipment selection guidance",
          "Implementation roadmaps"
        ],
        image: "/images/consulting-service.jpg"
      },
      {
        title: "Precision Agriculture Consulting",
        description: "Advisory services on implementing precision agriculture technologies for optimal resource use.",
        icon: "🎯",
        features: [
          "Soil mapping and analysis",
          "Variable rate technology",
          "Data-driven decision making",
          "Technology integration support"
        ],
        image: "/images/precision-ag-service.jpg"
      }
    ]
  };

  return (
    <div className="wima-services">
      {/* Hero Section */}
      {/* <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="badge">Our Services</span>
            <h1>Empowering Women Through Agricultural Mechanization</h1>
            <p className="lead">
              WIMA provides comprehensive mechanized farming solutions, training programs, and expert consulting services tailored for women in agriculture
            </p>
          </div>
        </div>
      </section> */}

      {/* Services Navigation */}
      <section className="services-nav">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'equipment' ? 'active' : ''}`}
              onClick={() => setActiveTab('equipment')}
            >
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M5 7H19M5 7C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7M5 7V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V7M9 12H15"/>
                </svg>
              </div>
              <span>Equipment Services</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'training' ? 'active' : ''}`}
              onClick={() => setActiveTab('training')}
            >
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M12 6.25278V19.2528M12 6.25278C10.8324 5.47686 9.24649 5 7.5 5C5.75351 5 4.16756 5.47686 3 6.25278V19.2528C4.16756 18.4769 5.75351 18 7.5 18C9.24649 18 10.8324 18.4769 12 19.2528M12 6.25278C13.1676 5.47686 14.7535 5 16.5 5C18.2465 5 19.8324 5.47686 21 6.25278V19.2528C19.8324 18.4769 18.2465 18 16.5 18C14.7535 18 13.1676 18.4769 12 19.2528"/>
                </svg>
              </div>
              <span>Training Programs</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'consulting' ? 'active' : ''}`}
              onClick={() => setActiveTab('consulting')}
            >
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                  <path d="M12 16V12M12 8H12.01"/>
                </svg>
              </div>
              <span>Consulting Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services[activeTab].map((service, index) => (
              <div className="service-card" key={index}>
                <div className="card-image" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="icon-badge">{service.icon}</div>
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i}>
                          <svg viewBox="0 0 24 24">
                            <path d="M20 6L9 17L4 12"/>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="cta-button">
                    Learn More
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Impact</span>
            <h2>Transforming Agriculture Across West Africa</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">500+</div>
              <div className="stat-label">Women Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">1,200+</div>
              <div className="stat-label">Acres Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">85%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Elevate Your Farming Operations?</h2>
            <p>Join hundreds of women who have transformed their agricultural businesses with WIMA's services</p>
            <div className="cta-buttons">
              <button className="primary-btn">
                Get Started
                <svg viewBox="0 0 24 24">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                </svg>
              </button>
              <button className="secondary-btn">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <style jsx>{`
        .wima-services {
          font-family: 'Inter', sans-serif;
          color: #2C3E50;
        }

        /* Hero Section */
        .hero {
          position: relative;
          height: 80vh;
          min-height: 600px;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/images/wima-hero.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.2) 0%, rgba(92, 184, 92, 0.1) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(5px);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .lead {
          font-size: 1.25rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 30px;
          max-width: 600px;
        }

        /* Services Navigation */
        .services-nav {
          background: white;
          padding: 20px 0;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .tab-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .tab-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 25px;
          background: transparent;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #6B7280;
        }

        .tab-btn:hover {
          background: #F3F4F6;
          color: #28A745;
        }

        .tab-btn.active {
          background: #28A745;
          color: white;
          box-shadow: 0 4px 6px rgba(40, 167, 69, 0.2);
        }

        .icon-wrapper {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .tab-btn svg {
          width: 24px;
          height: 24px;
          stroke-width: 2;
        }

        .tab-btn.active svg {
          stroke: white;
        }

        /* Services Grid */
        .services-grid-section {
          padding: 80px 0;
          background: #F9FAFB;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .service-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        }

        .card-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .icon-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .card-content {
          padding: 25px;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #1F2937;
        }

        .card-content p {
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .features h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #1F2937;
        }

        .features ul {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
        }

        .features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 10px;
        }

        .features li svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          margin-top: 3px;
          stroke: #28A745;
          stroke-width: 3;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #28A745;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #218838;
          transform: translateY(-2px);
        }

        .cta-button svg {
          width: 16px;
          height: 16px;
          stroke: white;
          stroke-width: 2;
          transition: transform 0.3s ease;
        }

        .cta-button:hover svg {
          transform: translateX(3px);
        }

        /* Stats Section */
        .stats-section {
          padding: 80px 0;
          background: white;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px auto;
        }

        .subtitle {
          display: inline-block;
          color: #28A745;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 15px;
          text-transform: uppercase;
          font-size: 14px;
        }

        h2 {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-card {
          background: #F9FAFB;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 700;
          color: #28A745;
          margin-bottom: 10px;
          line-height: 1;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #6B7280;
          font-weight: 500;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #28A745 0%, #5CB85C 100%);
          color: white;
        }

        .cta-content {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-content h2 {
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 30px;
          background: white;
          color: #28A745;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);
        }

        .primary-btn svg {
          width: 18px;
          height: 18px;
          stroke: #28A745;
          stroke-width: 2;
          transition: transform 0.3s ease;
        }

        .primary-btn:hover svg {
          transform: translateX(3px);
        }

        .secondary-btn {
          padding: 15px 30px;
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          h1 {
            font-size: 3rem;
          }
          
          .tab-buttons {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: auto;
            padding: 100px 0;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          .lead {
            font-size: 1.1rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.75rem;
          }
          
          .tab-btn {
            padding: 12px 15px;
            font-size: 14px;
          }
          
          .stat-card {
            padding: 20px;
          }
          
          .stat-value {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;