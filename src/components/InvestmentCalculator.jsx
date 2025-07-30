"use client";
import { useState } from "react";
import Link from "next/link";

// ROI data configuration
const ROI_DATA = {
  tractor: {
    1: 10,
    2: 15,
    3: 20,
    5: 35,
  },
  harvester: {
    1: 10,
    2: 16,
    3: 25,
    5: 40,
  },
  plow: {
    1: 7,
    2: 14,
    3: 21,
    5: 30,
  },
};

const EQUIPMENT_OPTIONS = [
  { value: "tractor", label: "Tractor" },
  { value: "harvester", label: "Harvester" },
  { value: "plow", label: "Plow" },
];

const PERIOD_OPTIONS = [
  { value: 1, label: "1 Year" },
  { value: 2, label: "2 Years" },
  { value: 3, label: "3 Years" },
  { value: 5, label: "5 Years" },
];

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState("tractor");

  const roiPercentage = ROI_DATA[selectedAsset][investmentPeriod] || 0;
  const amount = parseFloat(investmentAmount.replace(/,/g, "")) || 0;
  const returnAmount = amount * (1 + roiPercentage / 100);

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(value) || value === "") {
      setInvestmentAmount(formatNumber(value));
    }
  };

  const handlePeriodChange = (e) => {
    setInvestmentPeriod(parseInt(e.target.value));
  };

  const handleAssetChange = (e) => {
    setSelectedAsset(e.target.value);
  };

  const handleInvestNow = () => {
    window.open('/investment-details', '_blank');
  };

  return (
    <section className="investment-calculator">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="calculator__inner"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className="calculator__form">
                <h2 className="calculator__title">
                  Mechanized Equipment Investment Calculator
                </h2>
                
                <div className="calculator__progress">
                  <div className="progress-bar-wrapper">
                    <div className="progress-bar">
                      <div
                        className="progress-bar-percent"
                        style={{ width: `${roiPercentage}%` }}
                      >
                        <span className="percent-value">{roiPercentage}%</span>
                      </div>
                    </div>
                    <div className="progress-bar-label">
                      <span>0%</span>
                      <span>ROI: {roiPercentage}%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                <div className="calculator__results">
                  <div className="result-item">
                    <label>Investment Amount</label>
                    <div className="input-wrapper">
                      <span className="currency">₦</span>
                      <input
                        type="text"
                        value={investmentAmount}
                        onChange={handleAmountChange}
                        placeholder="0.00"
                        className="investment-input"
                      />
                    </div>
                  </div>

                  <div className="result-item">
                    <label>Projected Return</label>
                    <h3 className="return-amount">
                      ₦{formatNumber(returnAmount.toFixed(2))}
                    </h3>
                  </div>
                </div>

                <div className="calculator__controls">
                  <div className="control-group">
                    <label htmlFor="investmentAsset">Equipment Type</label>
                    <select
                      id="investmentAsset"
                      value={selectedAsset}
                      onChange={handleAssetChange}
                      className="investment-select"
                    >
                      {EQUIPMENT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="control-group">
                    <label htmlFor="investmentPeriod">Investment Period</label>
                    <select
                      id="investmentPeriod"
                      value={investmentPeriod}
                      onChange={handlePeriodChange}
                      className="investment-select"
                    >
                      {PERIOD_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="calculator__info">
                <span className="info-subtitle">Opportunity of a Lifetime</span>
                <h3 className="info-title">
                  <Link href="/investment-details">
                    {selectedAsset.charAt(0).toUpperCase() + selectedAsset.slice(1)} Investment Program
                  </Link>
                </h3>
                <p className="info-description">
                  Invest in modern agricultural equipment and earn returns through
                  our leasing program. Your investment helps farmers access quality
                  equipment while generating steady returns for you.
                </p>
                <button 
                  className="invest-now-btn"
                  onClick={handleInvestNow}
                >
                  Invest Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .investment-calculator {
          padding: 2rem 0;
          background: linear-gradient(135deg, #f9f9f9 0%, #f0f8f0 100%);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .calculator__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .calculator__form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .calculator__title {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .calculator__progress {
          margin: 1rem 0;
        }

        .progress-bar-wrapper {
          margin-bottom: 1.5rem;
        }

        .progress-bar {
          height: 10px;
          background: #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 5px;
          position: relative;
        }

        .progress-bar-percent {
          height: 100%;
          background: linear-gradient(90deg, #28a745, #5cb85c);
          position: relative;
          transition: width 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .progress-bar-percent::after {
          content: '';
          position: absolute;
          right: 0;
          top: -5px;
          width: 15px;
          height: 15px;
          background: white;
          border: 2px solid #28a745;
          border-radius: 50%;
        }

        .percent-value {
          position: absolute;
          right: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
          background: #28a745;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .progress-bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #666;
        }

        .progress-bar-label span:nth-child(2) {
          color: #28a745;
          font-weight: 600;
        }

        .calculator__results {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 1rem 0;
        }

        .result-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .currency {
          position: absolute;
          left: 12px;
          font-weight: 600;
          color: #333;
        }

        .investment-input {
          width: 100%;
          padding: 12px 16px 12px 32px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          transition: all 0.3s ease;
        }

        .investment-input:focus {
          border-color: #28a745;
          box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.2);
        }

        .return-amount {
          color: #28a745;
          font-size: 1.5rem;
          margin: 0;
        }

        .calculator__controls {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .investment-select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          color: #333;
          background-color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
        }

        .investment-select:hover {
          border-color: #28a745;
        }

        .investment-select:focus {
          border-color: #28a745;
          box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.2);
        }

        .calculator__info {
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
        }

        .info-subtitle {
          font-size: 0.9rem;
          color: #28a745;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-title {
          font-size: 1.5rem;
          color: #2c3e50;
          margin: 0;
        }

        .info-title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .info-title a:hover {
          color: #28a745;
        }

        .info-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .invest-now-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(90deg, #28a745, #5cb85c);
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(40, 167, 69, 0.3);
          align-self: flex-start;
          margin-top: auto;
        }

        .invest-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(40, 167, 69, 0.4);
        }

        .invest-now-btn svg {
          transition: transform 0.3s ease;
        }

        .invest-now-btn:hover svg {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .calculator__inner {
            grid-template-columns: 1fr;
          }
          
          .calculator__results,
          .calculator__controls {
            grid-template-columns: 1fr;
          }

          .invest-now-btn {
            align-self: stretch;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default InvestmentCalculator;