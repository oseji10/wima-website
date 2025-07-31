"use client";
import Link from "next/link";
import NiceSelect from "nice-select2";
import { useEffect, useRef } from "react";

const servicesData = [
  {
    id: 1,
    name: "Grain Drying Service",
    category: "Drying",
    provider: "AgriTech Solutions",
    location: "Kaduna Hub - Soba",
    distance: "5 km", // Added distance field
    rating: 5,
    price: 1000,
    unit: "KG",
    image: "/assets/images/services/drying1.jpg"
  },
  {
    id: 2,
    name: "Rice Threshing Service",
    category: "Threshing",
    provider: "FarmPro Services",
    location: "Kano Hub - Kura",
    distance: "12 km",
    rating: 4,
    price: 1000,
    unit: "KG",
    image: "/assets/images/services/thresher1.jpg"
  },
  {
    id: 3,
    name: "Water Pumping Service",
    category: "Pumping",
    provider: "AquaFarm Co.",
    location: "Gombe Hub - Zambuk",
    distance: "25 km",
    rating: 3,
    price: 1000,
    unit: "Acre",
    image: "/assets/images/services/irrigation1.jpg"
  },
  {
    id: 4,
    name: "Crop Spraying Service",
    category: "Spraying",
    provider: "GreenSpray Ltd.",
    location: "Adamawa Hub - Old Demsa",
    distance: "8 km",
    rating: 5,
    price: 1000,
    unit: "Hectare",
    image: "/assets/images/services/spraying1.jpg"
  },
  {
    id: 5,
    name: "Corn Drying Service",
    category: "Drying",
    provider: "Harvest Helpers",
    location: "Kaduna Hub - Kachia",
    distance: "18 km",
    rating: 4,
    price: 1000,
    unit: "KG",
    image: "/assets/images/services/drying1.jpg"
  },
  {
    id: 6,
    name: "Wheat Threshing Service",
    category: "Threshing",
    provider: "GrainMasters",
    location: "Kano Hub - Bagwai",
    distance: "30 km",
    rating: 5,
    price: 1000,
    unit: "KG",
    image: "/assets/images/services/thresher1.jpg"
  },
  {
    id: 7,
    name: "Irrigation Pumping Service",
    category: "Pumping",
    provider: "WaterWorks",
    location: "Gombe Hub - Malam Sidi",
    distance: "15 km",
    rating: 4,
    price: 1000,
    unit: "Acre",
    image: "/assets/images/services/irrigation1.jpg"
  },
  {
    id: 8,
    name: "Pesticide Spraying Service",
    category: "Spraying",
    provider: "CropCare",
    location: "Adamawa Hub - Numan",
    distance: "22 km",
    rating: 3,
    price: 1000,
    unit: "Hectare",
    image: "/assets/images/services/spraying1.jpg"
  },
  {
    id: 9,
    name: "Soybean Drying Service",
    category: "Drying",
    provider: "AgriDry",
    location: "Kaduna Hub - Zaria",
    distance: "10 km",
    rating: 5,
    price: 1000,
    unit: "KG",
    image: "/assets/images/services/drying1.jpg"
  },
  {
    id: 10,
    name: "Barley Threshing Service",
    category: "Threshing",
    provider: "FarmTech",
    location: "Kano Hub - Gwarzo",
    distance: "28 km",
    rating: 4,
    price: 1000,
    unit: "KG",
    image: "/assets/images/services/thresher1.jpg"
  },
  {
    id: 11,
    name: "Field Pumping Service",
    category: "Pumping",
    provider: "HydroFarm",
    location: "Gombe Hub - Gyalengu",
    distance: "7 km",
    rating: 5,
    price: 1000,
    unit: "Acre",
    image: "assets/images/services/pumping3.png"
  },
  {
    id: 12,
    name: "Herbicide Spraying Service",
    category: "Spraying",
    provider: "SafeSpray",
    location: "Adamawa Hub - Gyawana",
    distance: "14 km",
    rating: 4,
    price: 1000,
    unit: "Hectare",
    image: "assets/images/services/spraying3.png"
  }
];

const BookService = () => {
  const priceRef = useRef(null);

  useEffect(() => {
    if (priceRef.current) {
      new NiceSelect(priceRef.current);
    }
  }, []);

  const renderStars = (rating) => {
    return Array(5).fill().map((_, i) => (
      <i key={i} className={`icon-star ${i < rating ? 'checked' : ''}`} />
    ));
  };

  return (
    <section className='shop'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-3'>
            <div className='shop__sidebar'>
              <div
                className='shop-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>search here</h5>
                </div>
                <form action='#' method='post'>
                  <input
                    type='text'
                    name='search-service'
                    id='searchService'
                    placeholder='Search Services...'
                    required=''
                  />
                  <button type='submit'>
                    <i className='fa-solid fa-magnifying-glass' />
                  </button>
                </form>
              </div>
              <div
                className='shop-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Service Categories</h5>
                </div>
                <div className='sidebar-list'>
                  <ul>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-angle-right' />
                        Drying
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-angle-right' />
                        Threshing
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-angle-right' />
                        Pumping
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <i className='fa-solid fa-angle-right' />
                        Spraying
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='shop-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Filter By Price</h5>
                </div>
                <div className='filter-wrapper'>
                  <div className='price-slide'>
                    <input
                      className='range__slider'
                      type='range'
                      name='price__range'
                      id='priceRange'
                      max={5000}
                      min={500}
                      defaultValue={1000}
                      step={500}
                    />
                  </div>
                  <div className='filter-cta'>
                    <p>₦500 - ₦5000</p>
                    <button
                      className='btn--primary'
                      aria-label='filter'
                      title='filter'
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              <div
                className='shop-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Filter By Distance</h5>
                </div>
                <div className='size-wrapper'>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='distanceOne'
                      name='distance-filter'
                      defaultChecked=''
                    />
                    <label htmlFor='distanceOne'>Nearby (0-10 km)</label>
                  </div>
                  <div className='radio-single'>
                    <input type='radio' id='distanceTwo' name='distance-filter' />
                    <label htmlFor='distanceTwo'>Medium (11-20 km)</label>
                  </div>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='distanceThree'
                      name='distance-filter'
                    />
                    <label htmlFor='distanceThree'>Far (21-30 km)</label>
                  </div>
                  <div className='radio-single'>
                    <input type='radio' id='distanceFour' name='distance-filter' />
                    <label htmlFor='distanceFour'>Very Far (30+ km)</label>
                  </div>
                </div>
              </div>
              <div
                className='shop-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Filter By Capacity</h5>
                </div>
                <div className='size-wrapper'>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='capacityOne'
                      name='capacity-filter'
                      defaultChecked=''
                    />
                    <label htmlFor='capacityOne'>Small (1-5 acres)</label>
                  </div>
                  <div className='radio-single'>
                    <input type='radio' id='capacityTwo' name='capacity-filter' />
                    <label htmlFor='capacityTwo'>Medium (6-20 acres)</label>
                  </div>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='capacityThree'
                      name='capacity-filter'
                    />
                    <label htmlFor='capacityThree'>Large (21-50 acres)</label>
                  </div>
                  <div className='radio-single'>
                    <input type='radio' id='capacityFour' name='capacity-filter' />
                    <label htmlFor='capacityFour'>Commercial (50+ acres)</label>
                  </div>
                </div>
              </div>
              <div
                className='shop-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Filter By Ratings</h5>
                </div>
                <div className='review-wrapper size-wrapper'>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='reviewOne'
                      name='donation-payment'
                      defaultChecked=''
                    />
                    <label htmlFor='reviewOne'>
                      <span className='review'>
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                      </span>
                      (5 Star)
                    </label>
                  </div>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='reviewTwo'
                      name='donation-payment'
                    />
                    <label htmlFor='reviewTwo'>
                      <span className='review'>
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star' />
                      </span>
                      (4 Star)
                    </label>
                  </div>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='reviewThree'
                      name='donation-payment'
                    />
                    <label htmlFor='reviewThree'>
                      <span className='review'>
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star' />
                        <i className='icon-star' />
                      </span>
                      (3 Star)
                    </label>
                  </div>
                </div>
              </div>
              <div
                className='shop-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Popular Tags</h5>
                </div>
                <div className='tag-wrapper'>
                  <Link href='#'>Drying</Link>
                  <Link href='#'>Threshing</Link>
                  <Link href='#'>Pumping</Link>
                  <Link href='#'>Spraying</Link>
                  <Link href='#'>Farm Equipment</Link>
                  <Link href='#'>Harvest</Link>
                  <Link href='#'>Irrigation</Link>
                  <Link href='#'>Crop Care</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-9'>
            <div className='shop__content'>
              <div className='shop__content-intro'>
                <div className='shop-intro__left'>
                  <p>
                    Showing <strong>{servicesData.length}</strong> of {servicesData.length} Services
                  </p>
                </div>
                <div className='shop-intro__right'>
                  <div className='shop-right-single'>
                    <p>Sort By:</p>
                  </div>
                  <div className='shop-right-single'>
                    <button aria-label='sort by time' title='sort by time'>
                      <i className='fa-solid fa-arrow-right-arrow-left' />
                    </button>
                    <select
                      name='price'
                      ref={priceRef}
                      defaultValue={"high"}
                      className='price-select select'
                    >
                      <option value='high'>Price: High to Low</option>
                      <option value='low'>Price: Low to High</option>
                      <option value='distance'>Distance: Near to Far</option>
                      <option value='rating'>Rating: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='row gutter-30'>
                {servicesData.map((service, index) => (
                  <div key={service.id} className='col-12 col-sm-6 col-lg-4'>
                    <div
                      className='shop__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={index % 3 * 100}
                    >
                      <div className='shop__single-thumb'>
                        <Link href={`#/${service.id}`}>
                          <img
                            src={service.image}
                            alt={`${service.name}_image`}
                          />
                        </Link>
                        <div className='shop-thumb'>
                          <Link href={`#/${service.id}`}>
                            <i className='fa-regular fa-eye' />
                          </Link>
                          <Link href='#'>
                            <i className='icon-heart' />
                          </Link>
                          <Link href='/checkout'>
                            <i className='fa-solid fa-arrow-right-arrow-left' />
                          </Link>
                        </div>
                        <div className="distance-tag">
                          {service.distance} away
                        </div>
                        <Link
                          href={`#/${service.id}`}
                          className='btn--primary'
                          aria-label='book service'
                          title='book service'
                        >
                          Book Service
                        </Link>
                      </div>
                      <div className='shop__single-content'>
                        <div className='review'>
                          {renderStars(service.rating)}
                        </div>
                        <p>
                          <Link href={`#/${service.id}`}>
                            {service.name}
                          </Link>
                        </p>
                        <p>{service.provider} - {service.location}</p>
                        <p>₦{service.price.toFixed(2)} per {service.unit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div
                    className='pagination-wrapper'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                  >
                    <ul className='pagination main-pagination'>
                      <li>
                        <button>
                          <i className='fa-solid fa-angles-left' />
                        </button>
                      </li>
                      <li>
                        <Link href='#'>1</Link>
                      </li>
                      <li>
                        <Link href='#' className='active'>
                          2
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>3</Link>
                      </li>
                      <li>
                        <button>
                          <i className='fa-solid fa-angles-right' />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookService;