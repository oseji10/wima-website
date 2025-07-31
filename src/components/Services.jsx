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
          <div className="section-header">
            <h2>Our <span className="highlight">Services</span></h2>
            <p className="subtitle">Tailored agricultural solutions designed for women farmers</p>
          </div>
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
            <h2>Transforming <span className="highlight">Agriculture</span> Across West Africa</h2>
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

      <style jsx>{`
        .wima-services {
          font-family: 'Inter', sans-serif;
          color: #2D3748;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .highlight {
          color: #2F855A;
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(47, 133, 90, 0.2);
          z-index: -1;
        }

        /* Services Navigation */
        .services-nav {
          background: white;
          padding: 20px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
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
          align-items: center;
          gap: 10px;
          padding: 12px 25px;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #718096;
          font-weight: 500;
          border: 1px solid #E2E8F0;
        }

        .tab-btn:hover {
          background: #F7FAFC;
          color: #2F855A;
          border-color: #C6F6D5;
        }

        .tab-btn.active {
          background: #2F855A;
          color: white;
          box-shadow: 0 4px 6px rgba(47, 133, 90, 0.2);
          border-color: #2F855A;
        }

        .icon-wrapper {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tab-btn svg {
          width: 20px;
          height: 20px;
          stroke-width: 2;
        }

        .tab-btn.active svg {
          stroke: white;
        }

        /* Services Grid */
        .services-grid-section {
          padding: 60px 0;
          background: #F8F9FA;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 15px;
          color: #1A202C;
        }

        .section-header .subtitle {
          color: #718096;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #EDF2F7;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          border-color: #C6F6D5;
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
          color: #2D3748;
        }

        .card-content p {
          color: #718096;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .features h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #2D3748;
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
          color: #4A5568;
        }

        .features li svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          margin-top: 3px;
          stroke: #2F855A;
          stroke-width: 3;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #2F855A;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #276749;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(47, 133, 90, 0.2);
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

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-card {
          background: #F8F9FA;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #E2E8F0;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
          border-color: #C6F6D5;
          background: white;
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 700;
          color: #2F855A;
          margin-bottom: 10px;
          line-height: 1;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #718096;
          font-weight: 500;
          margin-top: 50px;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .tab-buttons {
            flex-wrap: wrap;
          }
          
          .tab-btn {
            padding: 10px 15px;
            font-size: 14px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .section-header h2 {
            font-size: 1.75rem;
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