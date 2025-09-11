"use client";
import { useEffect, useRef } from "react";
import NiceSelect from "nice-select2";
import { color } from "framer-motion";
import Link from "next/link";

const TopBarOne = () => {
  const currencyRef_one = useRef(null);
  const countryRef_one = useRef(null);

  useEffect(() => {
    if (currencyRef_one.current) {
      new NiceSelect(currencyRef_one.current);
    }
    if (countryRef_one.current) {
      new NiceSelect(countryRef_one.current);
    }
  }, []);

  return (
    <div className="topbar topbar--secondary d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topbar__inner">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__list-wrapper">
                    <ul className="topbar__list">
                      <li>
                        <a href="mailto:info@wimanigeria.com">
                          <i className="fa-regular fa-envelope"></i>
                          info@wimanigeria.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+2349048750029">
                          <i className="fa-solid fa-phone"></i>
                          +234-904-8750-029
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 d-none d-xxl-block">
                  <div className="topbar__extra text-center">
                    {/* <p>
                      <i className="icon-heart-hand"></i> Are you ready to help
                      them? Let's become a volunteer!
                    </p> */}
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__items justify-content-end">
                    {/* <div className="select-currency ">
                      <select
                        ref={currencyRef_one}
                        name="currency"
                        defaultValue={"usd"}
                        className="currency-select select one"
                      >
                        <option value="usd">USD</option>
                        <option value="gbp">GBP</option>
                        <option value="aud">AUD</option>
                        <option value="euro">Euro</option>
                      </select>
                    </div> */}
                    <div>
                      {/* <select
                        ref={countryRef_one}
                        name="country"
                        defaultValue={"English"}
                        className="country-select select one"
                      >
                        <option data-display='<i class="fi-gb-eng"></i> English'>
                          English
                        </option>
                        <option data-display='<i class="fi-us"></i> Spanish'>
                          Spanish
                        </option>
                        <option data-display='<i class="fi-cn"></i> Chinese'>
                          Chinese
                        </option>
                        <option data-display='<i class="fi-it"></i> Italian'>
                          Italian
                        </option>
                      </select> */}
                      &nbsp;
                      <Link
                        href="https://mamatrak.wimanigeria.com"
                        style={{ color: "#fff" }}
                      > &nbsp; 
                        MamaTrak<sup>TM</sup> &nbsp;
                      </Link> 
                      | &nbsp;
                      <Link
                        href="https://dashboard.wimanigeria.com/cdel"
                        style={{ color: "#fff" }}
                      >
                        Dashboards
                      </Link> &nbsp;
                      | &nbsp;
                      <Link
                        href="/become-a-member"
                        style={{ color: "#fff" }}
                      >
                        Join
                      </Link>
                    </div>
                    <div className="social">
                      <a
                        href="https://web.facebook.com/womeninmechanizedagriculture?_rdc=1&_rdr"
                        target="_blank"
                        rel="noreferrer"
                        title="facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/wima.nigeria/"
                        target="_blank"
                        rel="noreferrer"
                        title="instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a
                        href="https://x.com/wimanigeria"
                        target="_blank"
                        rel="noreferrer"
                        title="X"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/106617937/admin/page-posts/published/"
                        target="_blank"
                        rel="noreferrer"
                        title="linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarOne;
