'use client';
import { useState } from "react";
import Link from "next/link";

const PhotoGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "/assets/images/slide/1.jpg",
    "/assets/images/slide/2.jpg",
    "/assets/images/slide/3.jpg",
    "/assets/images/slide/4.jpg",
    "/assets/images/slide/5.jpg",
    "/assets/images/slide/6.jpg",
    "/assets/images/slide/7.jpg",
    "/assets/images/slide/8.jpg",
    "/assets/images/slide/9.jpg",
    "/assets/images/slide/10.jpg",
    "/assets/images/slide/11.jpg",
    "/assets/images/slide/12.jpg"
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {/* Row 1 */}
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/1.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(0)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/2.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(1)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/3.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(2)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/4.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(3)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>

        {/* Row 2 */}
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/5.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(4)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/6.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(5)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/7.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(6)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/8.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(7)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>

        {/* Row 3 */}
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/9.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(8)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/10.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(9)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/11.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(10)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className="gallery-item">
          <img 
            src="/assets/images/slide/12.jpg" 
            alt="Gallery image" 
            onClick={() => openModal(11)}
          />
          <Link href="/" className="instagram-link">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
      </div>

      {/* Preview Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img 
              src={images[currentImageIndex]} 
              alt="Full size preview" 
              className="modal-image"
            />
            <div className="image-nav">
              <button className="nav-button prev-button" onClick={goToPrev}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="nav-button next-button" onClick={goToNext}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        
        .gallery-item {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 1/1;
          transition: all 0.3s ease;
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        
        .gallery-item:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        
        .instagram-link {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 2rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
          background: rgba(0,0,0,0.5);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .gallery-item:hover .instagram-link {
          opacity: 1;
        }
        
        .gallery-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .gallery-item:hover::before {
          opacity: 1;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
        }

        .modal-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .close-button {
          position: absolute;
          top: -40px;
          right: -10px;
          background: none;
          border: none;
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
        }

        .image-nav {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
          padding: 0 20px;
        }

        .nav-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }
        }
        
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .gallery-item {
            aspect-ratio: 4/3;
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;