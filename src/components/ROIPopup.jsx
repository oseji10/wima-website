"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const ROIPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [featuredEquipment, setFeaturedEquipment] = useState([
    { 
      name: "Tractor", 
      roi: 35, 
      trend: [25, 28, 30, 32, 29, 34, 35],
      description: "High-demand equipment with consistent returns",
      image: "/assets/images/tractor-icon.png"
    },
    { 
      name: "Harvester", 
      roi: 40, 
      trend: [30, 29, 35, 37, 38, 39, 40],
      description: "Peak season performer with excellent yields",
      image: "/assets/images/harvester-icon.png"
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="roi-popup-overlay">
      <div className="roi-popup-container landscape">
        <button className="close-btn" onClick={closePopup}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="popup-content">
          <div className="popup-header">
            <div className="icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12M12 16H12.01" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Top Performing Equipment</h3>
            <p>This {featuredEquipment.length > 1 ? 'equipment are' : 'equipment is'} currently delivering excellent returns.</p>
          </div>

          <div className="equipment-cards">
            {featuredEquipment.map((item, index) => (
              <div key={index} className="equipment-card">
                {/* <div className="equipment-image">
                  <img src={item.image} alt={item.name} />
                </div> */}
                <div className="equipment-details">
                  <h4>{item.name}</h4>
                  <p className="description">{item.description}</p>
                  <div className="roi-display">
                    <span className="roi-value">{item.roi}% ROI</span>
                    <span className={`trend ${item.trend[item.trend.length - 1] > item.trend[0] ? 'up' : 'down'}`}>
                      {item.trend[item.trend.length - 1] > item.trend[0] ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          +{item.trend[item.trend.length - 1] - item.trend[0]}%
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5V19M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {item.trend[item.trend.length - 1] - item.trend[0]}%
                        </>
                      )}
                    </span>
                  </div>
                  <div className="trend-bar">
                    {item.trend.map((value, i) => (
                      <div 
                        key={i}
                        className="trend-segment"
                        style={{
                          height: `${(value / 50) * 100}%`,
                          backgroundColor: item.name === "Tractor" ? '#28a745' : '#5cb85c'
                        }}
                        title={`Day ${6-i}: ${value}% ROI`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/invest" className="invest-cta">
            Invest Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .roi-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .roi-popup-container {
          position: relative;
          background: white;
          border-radius: 16px;
          width: 90%;
          max-width: 500px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          animation: slideUp 0.4s ease;
        }

        .roi-popup-container.landscape {
          max-width: 700px;
          padding: 1.5rem;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.5rem;
        }

        .close-btn:hover {
          color: #333;
          transform: rotate(90deg);
        }

        .popup-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .popup-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(40, 167, 69, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .popup-header h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .popup-header p {
          color: #666;
          line-height: 1.5;
        }

        .equipment-cards {
          display: flex;
          gap: 1.5rem;
          margin: 1rem 0;
        }

        .equipment-card {
          flex: 1;
          display: flex;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          background: #f8f9fa;
          transition: all 0.3s ease;
        }

        .equipment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .equipment-image {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }

        .equipment-image img {
          max-width: 100%;
          max-height: 100%;
        }

        .equipment-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .equipment-details h4 {
          font-size: 1.2rem;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
        }

        .equipment-details .description {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .roi-display {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .roi-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #28a745;
        }

        .trend {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .trend.up {
          color: #28a745;
        }

        .trend.down {
          color: #dc3545;
        }

        .trend-bar {
          display: flex;
          align-items: flex-end;
          height: 50px;
          gap: 4px;
          margin-top: 0.5rem;
        }

        .trend-segment {
          flex: 1;
          border-radius: 4px 4px 0 0;
          transition: all 0.3s ease;
          position: relative;
        }

        .trend-segment:hover {
          opacity: 0.8;
          transform: scaleY(1.05);
        }

        .invest-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(90deg, #28a745, #5cb85c);
          color: white;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 1.5rem;
        }

        .invest-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
        }

        .invest-cta svg {
          transition: transform 0.3s ease;
        }

        .invest-cta:hover svg {
          transform: translateX(5px);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .roi-popup-container.landscape {
            max-width: 90%;
            padding: 1rem;
          }
          
          .equipment-cards {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .equipment-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .roi-display {
            justify-content: center;
          }
          
          .trend-bar {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ROIPopup;