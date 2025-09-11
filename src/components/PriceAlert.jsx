"use client";

import { useEffect, useState } from 'react';

export default function PriceMarquee() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch prices from API
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/price-alert`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform API data to match your component's expected format
        const transformedData = data.map(item => ({
          service: item.serviceName,
          price: `₦${item.cost}`,
          unit: `per ${item.measuringUnit}`,
          location: item.hub?.lga_info?.lgaName || 'Unknown',
        }));
        
        setPrices(transformedData);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch prices:', err);
        setError('Failed to load prices');
        // You could set fallback static data here if desired
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  // Show loading state or error message
  if (loading) {
    return (
      <div className="price-ticker">
        <div className="price-marquee">
          <div className="marquee-content">
            <span className="price-item">Loading prices...</span>
          </div>
        </div>
        <style jsx>{`
          /* Your existing styles here */
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
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
          }

          @media (max-width: 768px) {
            .price-item {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="price-ticker">
        <div className="price-marquee">
          <div className="marquee-content">
            <span className="price-item">{error}</span>
          </div>
        </div>
        <style jsx>{`
          /* Your existing styles here */
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
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
          }

          @media (max-width: 768px) {
            .price-item {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="price-ticker">
      <div className="price-marquee">
        <div className="marquee-content">
          {/* {prices.map((item, index) => (
            <span key={`${item.service}-${index}`} className="price-item">
              {item.service}: <span className="price-value">{item.price}</span> {item.unit}
              {index < prices.length - 1 && <span className="price-divider">  </span>}
            </span>
          ))} */}
           {prices.map((item, index) => (
            <span key={`${item.service}-${index}`} className="price-item">
              {item.service} in {item.location}: <span className="price-value">{item.price}</span> {item.unit}
              {index < prices.length - 1 && <span className="price-divider"> • </span>}
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
          animation: marquee 400s linear infinite;
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