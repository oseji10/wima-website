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
    rating: 5,
    price: 1000, // 1000 Naira per KG
    unit: "KG",
    image: "/assets/images/services/drying1.jpg"
  },
  {
    id: 2,
    name: "Rice Threshing Service",
    category: "Threshing",
    provider: "FarmPro Services",
    location: "Kano Hub - Kura",
    rating: 4,
    price: 1000, // 1000 Naira per KG
    unit: "KG",
    image: "/assets/images/services/thresher1.jpg"
  },
  {
    id: 3,
    name: "Water Pumping Service",
    category: "Pumping",
    provider: "AquaFarm Co.",
    location: "Gombe Hub - Zambuk",
    rating: 3,
    price: 1000, // 1000 Naira per Acre
    unit: "Acre",
    image: "/assets/images/services/irrigation1.jpg"
  },
  {
    id: 4,
    name: "Crop Spraying Service",
    category: "Spraying",
    provider: "GreenSpray Ltd.",
    location: "Adamawa Hub - Old Demsa",
    rating: 5,
    price: 1000, // 1000 Naira per Hectare
    unit: "Hectare",
    image: "/assets/images/services/spraying1.jpg"
  },
  {
    id: 5,
    name: "Corn Drying Service",
    category: "Drying",
    provider: "Harvest Helpers",
    location: "Kaduna Hub - Kachia",
    rating: 4,
    price: 1000, // 1000 Naira per KG
    unit: "KG",
    image: "/assets/images/services/drying1.jpg"
  },
  {
    id: 6,
    name: "Wheat Threshing Service",
    category: "Threshing",
    provider: "GrainMasters",
    location: "Kano Hub - Bagwai",
    rating: 5,
    price: 1000, // 1000 Naira per KG
    unit: "KG",
    image: "/assets/images/services/thresher1.jpg"
  },
  {
    id: 7,
    name: "Irrigation Pumping Service",
    category: "Pumping",
    provider: "WaterWorks",
    location: "Gombe Hub - Malam Sidi",
    rating: 4,
    price: 1000, // 1000 Naira per Acre
    unit: "Acre",
    image: "/assets/images/services/irrigation1.jpg"
  },
  {
    id: 8,
    name: "Pesticide Spraying Service",
    category: "Spraying",
    provider: "CropCare",
    location: "Adamawa Hub - Numan",
    rating: 3,
    price: 1000, // 1000 Naira per Hectare
    unit: "Hectare",
    image: "/assets/images/services/spraying1.jpg"
  },
  {
    id: 9,
    name: "Soybean Drying Service",
    category: "Drying",
    provider: "AgriDry",
    location: "Kaduna Hub - Zaria",
    rating: 5,
    price: 1000, // 1000 Naira per KG
    unit: "KG",
    image: "/assets/images/services/drying1.jpg"
  },
  {
    id: 10,
    name: "Barley Threshing Service",
    category: "Threshing",
    provider: "FarmTech",
    location: "Kano Hub - Gwarzo",
    rating: 4,
    price: 1000, // 1000 Naira per KG
    unit: "KG",
    image: "/assets/images/services/thresher1.jpg"
  },
  {
    id: 11,
    name: "Field Pumping Service",
    category: "Pumping",
    provider: "HydroFarm",
    location: "Gombe Hub - Gyalengu",
    rating: 5,
    price: 1000, // 1000 Naira per Acre
    unit: "Acre",
    image: "assets/images/services/pumping3.png"
  },
  {
    id: 12,
    name: "Herbicide Spraying Service",
    category: "Spraying",
    provider: "SafeSpray",
    location: "Adamawa Hub - Gyawana",
    rating: 4,
    price: 1000, // 1000 Naira per Hectare
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
                      <Link href='/services'>
                        <i className='fa-solid fa-angle-right' />
                        Drying
                      </Link>
                    </li>
                    <li>
                      <Link href='/services'>
                        <i className='fa-solid fa-angle-right' />
                        Threshing
                      </Link>
                    </li>
                    <li>
                      <Link href='/services'>
                        <i className='fa-solid fa-angle-right' />
                        Pumping
                      </Link>
                    </li>
                    <li>
                      <Link href='/services'>
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
                      max={250}
                      min={100}
                      defaultValue={175}
                    />
                  </div>
                  <div className='filter-cta'>
                    <p>₦100 - ₦250</p>
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
                  <h5>Select By Size</h5>
                </div>
                <div className='size-wrapper'>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='sizeOne'
                      name='donation-payment'
                      defaultChecked=''
                    />
                    <label htmlFor='sizeOne'>Small Scale (8)</label>
                  </div>
                  <div className='radio-single'>
                    <input type='radio' id='sizeTwo' name='donation-payment' />
                    <label htmlFor='sizeTwo'>Medium Scale (10)</label>
                  </div>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='sizeThree'
                      name='donation-payment'
                    />
                    <label htmlFor='sizeThree'>Large Scale (7)</label>
                  </div>
                  <div className='radio-single'>
                    <input type='radio' id='sizeFour' name='donation-payment' />
                    <label htmlFor='sizeFour'>Industrial Scale (5)</label>
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
                        <i className='icon-star ' />
                        <i className='icon-star ' />
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
                        <i className='icon-star ' />
                        <i className='icon-star ' />
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
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='reviewFour'
                      name='donation-payment'
                    />
                    <label htmlFor='reviewFour'>
                      <span limit='2'>
                        <i className='icon-star checked' />
                        <i className='icon-star checked' />
                        <i className='icon-star' />
                        <i className='icon-star' />
                        <i className='icon-star' />
                      </span>
                      (2 Star)
                    </label>
                  </div>
                  <div className='radio-single'>
                    <input
                      type='radio'
                      id='reviewFive'
                      name='donation-payment'
                    />
                    <label htmlFor='reviewFive'>
                      <span className='review'>
                        <i className='icon-star checked' />
                        <i className='icon-star' />
                        <i className='icon-star' />
                        <i className='icon-star' />
                        <i className='icon-star' />
                      </span>
                      (1 Star)
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
                <div class='intro'>
                  <h5>Popular Tags</h5>
                </div>
                <div className='tag-wrapper'>
                  <Link href='/services'>Drying</Link>
                  <Link href='/services'>Threshing</Link>
                  <Link href='/services'>Pumping</Link>
                  <Link href='/services'>Spraying</Link>
                  <Link href='/services'>Agricultural</Link>
                  <Link href='/services'>Farming</Link>
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
                      <option value='high'>High</option>
                      <option value='low'>Low</option>
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
                        <Link href={`/service-details/${service.id}`}>
                          <img
                            src={service.image}
                            alt={`${service.name}_image`}
                          />
                        </Link>
                        <div className='shop-thumb'>
                          <Link href={`/service-details/${service.id}`}>
                            <i className='fa-regular fa-eye' />
                          </Link>
                          <Link href='/cart'>
                            <i className='icon-heart' />
                          </Link>
                          <Link href='/checkout'>
                                                  <i className='fa-solid fa-arrow-right-arrow-left' />

                          </Link>
                        </div>
                        <Link
                          href={`/service-details/${service.id}`}
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
                          <Link href={`/service-details/${service.id}`}>
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
                        <Link href='/services'>1</Link>
                      </li>
                      <li>
                        <Link href='/services' className='active'>
                          2
                        </Link>
                      </li>
                      <li>
                        <Link href='/services'>3</Link>
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