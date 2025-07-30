"use client";
import { useState } from 'react';

const MemberInner = () => {
  const [membershipType, setMembershipType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    profession: '',
    message: '',
    equipmentProof: null,
    studentProof: null,
    companyDetails: '',
    companyMission: '',
    operatorExperience: '',
    skillsAssessment: null,
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleMembershipChange = (e) => {
    setMembershipType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    
    // Add text fields
    const textFields = [
        'firstName',
        'lastName',
        'email',
        'phoneNumber',
        'profession',
        'message',
        'companyDetails',
        'companyMission',
        'operatorExperience'
    ];
    
    textFields.forEach(key => {
        if (formData[key]) {
            formDataToSend.append(key, formData[key]);
        }
    });

    // Add membership type
    formDataToSend.append('membershipType', membershipType);

    // Add file fields only if they exist and are valid files
    if (formData.equipmentProof instanceof File) {
        formDataToSend.append('equipmentProof', formData.equipmentProof);
    }
    if (formData.studentProof instanceof File) {
        formDataToSend.append('studentProof', formData.studentProof);
    }
    if (formData.skillsAssessment instanceof File) {
        formDataToSend.append('skillsAssessment', formData.skillsAssessment);
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/membership-application`, {
            method: 'POST',
            body: formDataToSend,
        });

        const data = await response.json();
        
        if (response.ok) {
            setSubmissionStatus('success');
            setSubmissionMessage('Application submitted successfully! Our team will review your application and get back to you soon.');
            
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                profession: '',
                message: '',
                equipmentProof: null,
                studentProof: null,
                companyDetails: '',
                companyMission: '',
                operatorExperience: '',
                skillsAssessment: null,
            });
            setMembershipType('');
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmissionStatus(null);
                setSubmissionMessage('');
            }, 5000);
        } else {
            setSubmissionStatus('error');
            if (data.errors) {
                setSubmissionMessage('Error submitting application: ' + Object.values(data.errors).join(', '));
            } else {
                setSubmissionMessage('Error submitting application. Please try again.');
            }
        }
    } catch (error) {
        setSubmissionStatus('error');
        setSubmissionMessage('Network error: ' + error.message);
    }
  };
// const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//     });
//     formDataToSend.append('membershipType', membershipType);

//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/membership-application`, {
//             method: 'POST',
//             body: formDataToSend,
//         });

//         const data = await response.json();
        
//         if (response.ok) {
//             alert('Application submitted successfully!');
//             // Reset form
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 phoneNumber: '',
//                 profession: '',
//                 message: '',
//                 equipmentProof: null,
//                 studentProof: null,
//                 companyDetails: '',
//                 companyMission: '',
//                 operatorExperience: '',
//                 skillsAssessment: null,
//             });
//             setMembershipType('');
//         } else {
//             alert('Error submitting application: ' + data.errors);
//         }
//     } catch (error) {
//         alert('Error submitting application: ' + error.message);
//     }
// };

  const renderAdditionalFields = () => {
    switch (membershipType) {
      case 'Full Membership':
      case 'Associate Membership':
        return (
          <div className="form-group">
            <label htmlFor="equipmentProof" className="file-label">
              <span>Proof of Equipment Ownership/Operation</span>
              <input
                type="file"
                name="equipmentProof"
                id="equipmentProof"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleInputChange}
                required
              />
              <div className="file-cta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Upload File
              </div>
            </label>
          </div>
        );
      case 'Youth & Student Membership':
        return (
          <div className="form-group">
            <label htmlFor="studentProof" className="file-label">
              <span>Proof of Student/Young Professional Status</span>
              <input
                type="file"
                name="studentProof"
                id="studentProof"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleInputChange}
                required
              />
              <div className="file-cta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Upload File
              </div>
            </label>
          </div>
        );
      case 'Operator Membership':
        return (
          <>
            <div className="form-group">
              <label htmlFor="equipmentProof" className="file-label">
                <span>Proof of Equipment Operation</span>
                <input
                  type="file"
                  name="equipmentProof"
                  id="equipmentProof"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleInputChange}
                  required
                />
                <div className="file-cta">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Upload File
                </div>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="operatorExperience">Operator Experience</label>
              <input
                type="text"
                name="operatorExperience"
                id="operatorExperience"
                placeholder="Describe your experience as an operator"
                value={formData.operatorExperience}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="skillsAssessment" className="file-label">
                <span>Skills Assessment/Certification (Optional)</span>
                <input
                  type="file"
                  name="skillsAssessment"
                  id="skillsAssessment"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleInputChange}
                />
                <div className="file-cta">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Upload File
                </div>
              </label>
            </div>
          </>
        );
      case 'Corporate/Institution Membership':
        return (
          <>
            <div className="form-group">
              <label htmlFor="companyDetails">Company Registration Details</label>
              <input
                type="text"
                name="companyDetails"
                id="companyDetails"
                placeholder="Enter company registration details"
                value={formData.companyDetails}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyMission">Alignment with WIMA's Mission</label>
              <textarea
                name="companyMission"
                id="companyMission"
                placeholder="How does your company align with WIMA's mission?"
                value={formData.companyMission}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="membership-section">
      <div className="container">
        {/* Success/Error Message Display */}
        {submissionStatus && (
          <div className={`submission-message ${submissionStatus}`}>
            <div className="message-content">
              {submissionStatus === 'success' ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8V12V8ZM12 16H12.01H12ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <p>{submissionMessage}</p>
              <button onClick={() => {
                setSubmissionStatus(null);
                setSubmissionMessage('');
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="membership-header">
          <span className="subtitle">Join a Community</span>
          <h1 className="title">Membership <span>Plans</span></h1>
          <p className="description">Choose the membership that fits your needs and join our growing community</p>
        </div>

        <div className="membership-container">
          <div className="membership-options">
            <div className="accordion">
              {[
                {
                  id: "full",
                  title: "1. Full Membership",
                  who: [
                    "Women who own, operate or manage tractors and mechanized farming equipment",
                    "Women-led agribusinesses engaged in mechanized farming service",
                    "Women working in agricultural mechanization, including engineers, farm managers and agronomists"
                  ],
                  benefits: [
                    "Access to equipment leasing and financing opportunities",
                    "Technical training and capacity-building programs",
                    "Business promotion and networking opportunities",
                    "Inclusion in WIMA's contract farming and service database"
                  ],
                  how: [
                    "Submit an application with proof of ownership or operation of mechanized agricultural equipment",
                    "Pay an annual membership fee",
                    "Fill the form to get started"
                  ]
                },
                {
                  id: "associate",
                  title: "2. Associate Membership",
                  who: [
                    "Women interested in agricultural mechanization but not directly operating equipment",
                    "Supporters of WIMA's mission, including educators and advocates",
                    "Non-profit organizations and community groups aligned with WIMA's goals"
                  ],
                  benefits: [
                    "Access to WIMA's training and workshops",
                    "Networking with industry professionals",
                    "Invitations to WIMA events and conferences",
                    "Opportunity to contribute to advocacy efforts"
                  ],
                  how: [
                    "Submit an application form",
                    "Pay a reduced membership fee",
                    "Fill the form to get started"
                  ]
                },
                {
                  id: "youth",
                  title: "3. Youth & Student Membership",
                  who: [
                    "Female students and young professionals in agriculture, agribusiness, or engineering fields"
                  ],
                  benefits: [
                    "Internship and mentorship programs",
                    "Skill-building workshops on mechanized farming",
                    "Scholarships and funding opportunities for agricultural innovation",
                    "Participating in WIMA networking events and conferences"
                  ],
                  how: [
                    "Submit proof of enrollment or professional status",
                    "Pay a subsidized membership fee",
                    "Fill the form to get started"
                  ]
                },
                {
                  id: "operator",
                  title: "4. Operator Membership",
                  who: [
                    "Women who operate tractors, harvesters, planters, and other mechanized farming equipment",
                    "Women-led or women-employed agricultural service providers",
                    "Mechanized farming cooperatives and contractor groups"
                  ],
                  benefits: [
                    "Certification programs for professional mechanization operators",
                    "Access to leasing and lending for equipment",
                    "Scholarships and funding opportunities for agricultural innovation",
                    "Inclusion in WIMA's database for service contracting and matchmaking",
                    "Networking with farmers, investors, and policymakers"
                  ],
                  how: [
                    "Provide proof of experience as an operator or mechanization service provider",
                    "Complete a skills assessment or certification process (if applicable)",
                    "Pay an operator-tier membership fee",
                    "Fill the form to get started"
                  ]
                },
                {
                  id: "corporate",
                  title: "5. Corporate/Institution Membership",
                  who: [
                    "Women-led agribusinesses, cooperatives, or organizations supporting mechanized agriculture",
                    "Equipment manufacturers, suppliers, or leasing firms supporting WIMA's mission",
                    "Government agencies, NGOs, and international organizations working in agricultural mechanization"
                  ],
                  benefits: [
                    "Business-to-business networking with industry leaders",
                    "Policy engagement and collaboration with stakeholders",
                    "Exclusive sponsorship and branding opportunities at WIMA events",
                    "Eligibility for WIMA-led procurement and partnership programs"
                  ],
                  how: [
                    "Submit company registration details",
                    "Provide a statement on how the company aligns with WIMA's mission",
                    "Pay an annual corporate membership fee",
                    "Fill the form to get started"
                  ]
                }
              ].map((item, index) => (
                <div className="accordion-item" key={item.id}>
                  <input type="checkbox" id={`accordion-${item.id}`} />
                  <label htmlFor={`accordion-${item.id}`} className="accordion-header">
                    <h3>{item.title}</h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </label>
                  <div className="accordion-content">
                    <div className="who-can-join">
                      <h4>Who Can Join?</h4>
                      <ul>
                        {item.who.map((point, i) => (
                          <li key={i}><span className="icon">🚜</span>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="benefits">
                      <h4>Benefits</h4>
                      <ul>
                        {item.benefits.map((benefit, i) => (
                          <li key={i}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M22 4L12 14.01L9 11.01" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="how-to-join">
                      <h4>How To Join?</h4>
                      <ul>
                        {item.how.map((step, i) => (
                          <li key={i}><span className="bullet">◼️</span>{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="membership-form">
            <div className="form-header">
              <h2>Application Form</h2>
              <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="membershipType">Membership Type *</label>
                <select
                  name="membershipType"
                  id="membershipType"
                  value={membershipType}
                  onChange={handleMembershipChange}
                  required
                >
                  <option value="">Select Membership Type</option>
                  <option value="Full Membership">Full Membership</option>
                  <option value="Associate Membership">Associate Membership</option>
                  <option value="Youth & Student Membership">Youth & Student Membership</option>
                  <option value="Operator Membership">Operator Membership</option>
                  <option value="Corporate/Institution Membership">Corporate/Institution Membership</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="profession">Occupation *</label>
                  <input
                    type="text"
                    name="profession"
                    id="profession"
                    placeholder="Enter your occupation"
                    value={formData.profession}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {renderAdditionalFields()}

              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter any additional information"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Application
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`

       /* New styles for submission message */
        .submission-message {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: 90%;
          max-width: 600px;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            top: -100px;
            opacity: 0;
          }
          to {
            top: 20px;
            opacity: 1;
          }
        }

        .submission-message.success {
          background-color: #f0fff4;
          border: 1px solid #c6f6d5;
          color: #2f855a;
        }

        .submission-message.error {
          background-color: #fff5f5;
          border: 1px solid #fed7d7;
          color: #c53030;
        }

        .message-content {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .message-content svg {
          flex-shrink: 0;
          margin-right: 1rem;
        }

        .message-content p {
          margin: 0;
          flex-grow: 1;
          font-weight: 500;
        }

        .submission-message button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          margin-left: 1rem;
          color: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submission-message button:hover {
          opacity: 0.8;
        }
          
        .membership-section {
          padding: 4rem 0;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .membership-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .subtitle {
          display: inline-block;
          font-size: 1rem;
          color: #28a745;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .title span {
          color: #28a745;
        }

        .description {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .membership-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .membership-options {
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          padding: 1.5rem;
          height: fit-content;
        }

        .membership-form {
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          padding: 2rem;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-header h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: #666;
        }

        .accordion-item {
          margin-bottom: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
        }

        .accordion-item input[type="checkbox"] {
          display: none;
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: #f8f9fa;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .accordion-header:hover {
          background: #f0f8f0;
        }

        .accordion-header h3 {
          font-size: 1.1rem;
          color: #2c3e50;
          margin: 0;
        }

        .accordion-header svg {
          transition: transform 0.3s ease;
        }

        .accordion-item input[type="checkbox"]:checked + .accordion-header svg {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 1.5rem;
        }

        .accordion-item input[type="checkbox"]:checked ~ .accordion-content {
          max-height: 1000px;
          padding: 1.5rem;
        }

        .who-can-join,
        .benefits,
        .how-to-join {
          margin-bottom: 1.5rem;
        }

        .who-can-join h4,
        .benefits h4,
        .how-to-join h4 {
          font-size: 1rem;
          color: #2c3e50;
          margin-bottom: 0.8rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
        }

        .who-can-join ul,
        .benefits ul,
        .how-to-join ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .who-can-join li,
        .benefits li,
        .how-to-join li {
          padding: 0.3rem 0;
          display: flex;
          align-items: flex-start;
        }

        .who-can-join .icon {
          margin-right: 0.5rem;
        }

        .benefits li svg {
          margin-right: 0.5rem;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .how-to-join .bullet {
          margin-right: 0.5rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #2c3e50;
        }

        input,
        select,
        textarea {
          padding: 0.8rem 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #28a745;
          box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.2);
        }

        textarea {
          min-height: 100px;
          resize: vertical;
        }

        .file-label {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .file-label input[type="file"] {
          display: none;
        }

        .file-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1rem;
          background: #f8f9fa;
          border: 1px dashed #e0e0e0;
          border-radius: 6px;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          justify-content: center;
        }

        .file-cta:hover {
          background: #f0f8f0;
          border-color: #28a745;
          color: #28a745;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2rem;
          background: linear-gradient(90deg, #28a745, #5cb85c);
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          justify-content: center;
          margin-top: 1rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
        }

        .submit-btn svg {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover svg {
          transform: translateX(5px);
        }

        @media (max-width: 992px) {
          .membership-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .membership-section {
            padding: 2rem 0;
          }

          .title {
            font-size: 1.8rem;
          }

          .membership-options,
          .membership-form {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MemberInner;