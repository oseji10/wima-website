"use client";
import { useState } from "react";
import Link from "next/link";

// Hardcoded ROI data for different equipment
const roiData = {
  tractor: {
    1: 10, // 5% ROI for 1 year
    2: 15, // 12% ROI for 2 years
    3: 20, // 20% ROI for 3 years
    5: 35, // 35% ROI for 5 years
  },
  harvester: {
    1: 10, // 6% ROI for 1 year
    2: 16, // 14% ROI for 2 years
    3: 25, // 22% ROI for 3 years
    5: 40, // 40% ROI for 5 years
  },
  plow: {
    1: 7, // 4% ROI for 1 year
    2: 14, // 10% ROI for 2 years
    3: 21, // 18% ROI for 3 years
    5: 30, // 30% ROI for 5 years
  },
};

// Function to format numbers with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState("tractor");

  // Calculate ROI and final amount
  const roiPercentage = roiData[selectedAsset][investmentPeriod] || 0;
  const amount = parseFloat(investmentAmount.replace(/,/g, "")) || 0;
  const returnAmount = amount * (1 + roiPercentage / 100);

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, ""); // Remove commas for processing
    setInvestmentAmount(formatNumber(value)); // Store with commas
  };

  const handlePeriodChange = (e) => {
    setInvestmentPeriod(parseInt(e.target.value));
  };

  const handleAssetChange = (e) => {
    setSelectedAsset(e.target.value);
  };

  return (
    <section className='overview'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div
              className='overview__inner'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='overview__single overview__left'>
                <h4>Mechanized Equipment Investment Calculator</h4>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent={`${roiPercentage}%`}>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: `${roiPercentage}%` }}
                        >
                          <span className='percent-value'>{roiPercentage}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause-progress__goal'>
                  <div className='goal-single'>
                    <span>Investment</span>
                    <h5>
                      <input
                        type="text"
                        value={investmentAmount}
                        onChange={handleAmountChange}
                        placeholder="Enter amount"
                        className="investment-input"
                      />
                    </h5>
                  </div>
                  <div className='goal-single'>
                    <span>Projected Return On Investment</span>
                    <h5>₦{formatNumber(returnAmount.toFixed(2))}</h5>
                  </div>
                </div>
                <div className='investment-options'>
                  <div className='input-group'>
                    <select
                      id="investmentAsset"
                      value={selectedAsset}
                      onChange={handleAssetChange}
                      className="investment-select"
                    >
                      <option value="">Select Equipment</option>
                      <option value="tractor">Tractor</option>
                      <option value="harvester">Harvester</option>
                      <option value="plow">Plow</option>
                    </select>
                  </div>
                  <div className='input-group'>
                    <select
                      id="investmentPeriod"
                      value={investmentPeriod}
                      onChange={handlePeriodChange}
                      className="investment-select"
                    >
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3">3 Years</option>
                      <option value="5">5 Years</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='overview__single overview__right'>
                <span>Opportunity of a Lifetime</span>
                <h4>
                  <Link href='/investment-details'>
                    {selectedAsset.charAt(0).toUpperCase() + selectedAsset.slice(1)} Investment Program
                  </Link>
                </h4>
                <p>
                  Invest in modern agricultural equipment and earn returns through
                  our leasing program. Your investment helps farmers access quality
                  equipment while generating steady returns for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .investment-input {
          width: 100%;
          border: 1px solid #e0e0e0;
          background: linear-gradient(145deg, #ffffff, #f5f5f5);
          font-size: 20px;
          font-weight: 500;
          color: #333;
          padding: 12px 16px;
          border-radius: 8px;
          outline: none;
          transition: all 0.3s ease;
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.05), inset -2px -2px 5px rgba(255, 255, 255, 0.7);
        }
        .investment-input:focus {
          border-color: #28a745;
          box-shadow: 0 0 10px rgba(40, 167, 69, 0.3), inset 2px 2px 5px rgba(0, 0, 0, 0.05);
        }
        .investment-input::placeholder {
          color: #aaa;
          font-weight: 400;
        }
        .investment-options {
          margin-top: 15px;
          display: flex;
          gap: 12px;
        }
        .input-group {
          flex: 1;
          position: relative;
        }
        .investment-select {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          color: #333;
          background: linear-gradient(145deg, #ffffff, #f5f5f5);
          cursor: pointer;
          appearance: none;
          transition: all 0.3s ease;
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.05), inset -2px -2px 5px rgba(255, 255, 255, 0.7);
        }
        .investment-select:focus {
          border-color: #28a745;
          box-shadow: 0 0 10px rgba(40, 167, 69, 0.3);
          outline: none;
        }
        .investment-select:hover {
          border-color: #28a745;
          background: linear-gradient(145deg, #f5f5f5, #ffffff);
        }
        .input-group::after {
          content: "▼";
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          font-size: 12px;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default InvestmentCalculator;