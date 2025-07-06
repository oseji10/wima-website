"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {active ? (
        <div className='preloader'>
          <i className='' />
          {/* <i className='icon-donation' /> */}
          <p>WIMA</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Preloader;
