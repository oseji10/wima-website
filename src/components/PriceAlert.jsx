"use client";

import { useEffect, useState } from 'react';

export default function PriceMarquee() {
  const [prices, setPrices] = useState([
    { service: 'Threshing', price: '₦1000', unit: 'per acre' },
    { service: 'Drying', price: '₦1000', unit: 'per kg' },
    { service: 'Irrigation', price: '₦1500', unit: 'per hour' },
    { service: 'Plowing', price: '₦2000', unit: 'per acre' },
    { service: 'Spraying', price: '₦900', unit: 'per acre' }
  ]);

  // Optional: Fetch prices from API if they change frequently
  useEffect(() => {
    // fetch('/api/prices')
    //   .then(res => res.json())
    //   .then(data => setPrices(data))
    //   .catch(console.error);
  }, []);

  return (
    <div className="price-ticker">
      <div className="price-marquee">
        <div className="marquee-content">
          {prices.map((item, index) => (
            <span key={item.service} className="price-item">
              {item.service}: <span className="price-value">{item.price}</span> {item.unit}
              {index < prices.length - 1 && <span className="price-divider">  </span>}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .price-ticker {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: linear-gradient(135deg, #122f2a, #1a473f);
          border-top: 2px solid #ffc107;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
        }

        .price-marquee {
          padding: 12px 0;
          color: white;
          font-family: 'Segoe UI', Arial, sans-serif;
          font-weight: 700; /* Bold */
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-block;
          animation: marquee 40s linear infinite;
          padding-left: 100%;
        }

        .price-item {
          font-size: 16px;
          margin: 0 15px;
          text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
          font-weight: 700; /* Bold */
          color: white;
        }

        .price-value {
          color: #ffc107; /* Yellow accent for prices */
          font-weight: 700;
        }

        .price-divider {
          color: rgba(255, 255, 255, 0.6);
          font-weight: bold;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @media (max-width: 768px) {
          .price-item {
            font-size: 14px;
            margin: 0 10px;
          }
          .marquee-content {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
}