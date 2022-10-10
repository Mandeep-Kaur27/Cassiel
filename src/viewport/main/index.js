import React, { useState } from 'react';
import Popup from "../../components/Popup";
import Banner from "../../../src/assets/banner-img.png";
import clientImg from "../../../src/assets/our-clients-img.png";
import featureImg from "../../../src/assets/features-img.png";
import ltoIocn from "../../../src/assets/lease-to-own-icon.png";
import buyOut from "../../../src/assets/buy-out.png";
import  tradeIn from "../../../src/assets/trade-in.png";
import smallToLarge from "../../../src/assets/small-to-large.jpg";
import electric from "../../../src/assets/electric-to-gas.jpg";
import virginiaToColorado from "../../../src/assets/Virginia-to-Colorado.jpg";
import vegan from "../../../src/assets/Vegan.jpg";
import approvedIcon from "../../../src/assets/approved-icon.png";
import { FaArrowCircleUp } from 'react-icons/fa';

const Main = () => {
  const [isOpen, setIsOpen,] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="inner-wrap">
      <div className="banner" id="home">
        <div className="container d-flex align-items-center">
          <div className="row">
            <div className="col-lg-6 col-md-12 wow pulse animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="text-wrap">
                <h1 className="heading"><span className="text-orange">Financing</span> Your Kitchen on <span className="text-orange">Wheels</span></h1>
                <p className="tagline mb-4">Join over 100 food entrepreneurs in 12 states that have leased our food trailers</p>
                <input className="btn block-btn common-btn"
                  type="button"
                  value="Start an Application"
                  onClick={togglePopup}
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-wow-duration="1000ms"
              data-wow-delay="600ms">
              <div className="img-wrap">
                <img className="img-fluid" alt="banner" src={Banner} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clients p-80" id="clients">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated heading text-orange" data-wow-duration="1000ms" data-wow-delay="600ms">Our Clients</h1>
            </div>
          </div>
          <div className="row d-flex align-items-center">

            <div className="col-lg-6 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="client-left">
                <img alt="blank" className="img-fluid img-shadow" src={clientImg} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-lg-0">
              <div className="client-wrapper">
                <ul className="list-unstyled">
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                    <h2 className="listing-style">The Chef Entrepreneur</h2>
                    <p className="mb-0">
                      Taking your menu to the next level
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <h2 className="listing-style">Restaurants Going Mobile</h2>
                    <p className="mb-0">
                      Mobilizing your restaurant
                    </p>
                  </li>
                </ul>
                <div className="d-flex align-items-center justify-content-between wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
                  <input className="btn block-btn common-btn"
                    type="button"
                    value="Start an Application"
                    onClick={togglePopup}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features p-80" id="features">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5 col-md-6 mb-lg-0">
              <div className="col-md-12 wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <h1 className="heading text-orange">Lease Features</h1>
              </div>
              <div className="feature-wrapper">
                <ul className="list-unstyled">
                  <li className="listing wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                    <p className="listing-style">
                      Entrepreneur friendly
                    </p>
                  </li>
                  <li className="listing wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="listing-style">
                      Low upfront capital required
                    </p>
                  </li>
                  <li className="listing wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
                    <p className="listing-style">
                      Everyone considered
                    </p>
                  </li>
                  <li className="listing wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="1400ms">
                    <p className="listing-style">
                      Dedicated to mobile kitchens
                    </p>
                  </li>
                  <li className="listing wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="1600ms">
                    <p className="listing-style">
                      Lease to own
                    </p>
                  </li>
                </ul>
                <div className="d-flex align-items-center justify-content-between wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="1800ms">
                  <input className="btn block-btn common-btn"
                    type="button"
                    value="Start an Application"
                    onClick={togglePopup}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 mb-lg-0 wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="featues-right">
                <img alt="blank" className="img-fluid" src={featureImg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lease p-80" id="lease">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated heading text-orange" data-wow-duration="1000ms" data-wow-delay="600ms">The Lease</h1>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-4 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="common-wrap">
                <img alt="blank" className="img-fluid" src={ltoIocn} />
                <h4 className="mb-0 mt-4">Lease to Own</h4>
              </div>
            </div>
            <div className="col-md-4 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="common-wrap">
                <img alt="blank" className="img-fluid" src={buyOut} />
                <h4 className="mb-0 mt-4">Early Buyout</h4>
              </div>
            </div>
            <div className="col-md-4 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
              <div className="common-wrap">
                <img alt="blank" className="img-fluid" src={tradeIn} />
                <h4 className="mb-0 mt-4">Trade In & Trade Up</h4>
              </div>
            </div>
          </div>
          <div className="row text-center mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
            <div className="col-md-12">
              <input className="btn block-btn common-btn"
                type="button"
                value="Start an Application"
                onClick={togglePopup}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="trailer p-80" id="trailer">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated heading text-orange" data-wow-duration="1000ms" data-wow-delay="600ms">Trailer Variety</h1>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-3 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="common-wrap">
                <div className="lease-img-wrapper">
                  <img alt="blank" className="img-fluid" src={smallToLarge} />
                </div>
                <h5 className="mb-0 mt-3">Small to Large</h5>
                <p>From 6x12 to 20’ porch trailers</p>
              </div>
            </div>
            <div className="col-md-3 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
              <div className="common-wrap">
                <div className="lease-img-wrapper">
                  <img alt="blank" className="img-fluid" src={electric} />
                </div>
                <h5 className="mb-0 mt-3">Electric to Gas</h5>
                <p>Electric or gas powered</p>
              </div>
            </div>
            <div className="col-md-3 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
              <div className="common-wrap">
                <div className="lease-img-wrapper">
                  <img alt="blank" className="img-fluid" src={virginiaToColorado} />
                </div>
                <h5 className="mb-0 mt-3">Virginia to Colorado</h5>
                <p>Trailers in 12 states</p>
              </div>
            </div>
            <div className="col-md-3 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms">
              <div className="common-wrap">
                <div className="lease-img-wrapper">
                  <img alt="blank" className="img-fluid" src={vegan} />
                </div>
                <h5 className="mb-0 mt-3">Philly Cheese to Vegan</h5>
                <p>Equipment for many menus</p>
              </div>
            </div>
          </div>
          <div className="row text-center mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1600ms">
            <div className="col-md-12">
              <input className="btn block-btn common-btn"
                type="button"
                value="Start an Application"
                onClick={togglePopup}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="process p-80" id="process">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated heading text-orange" data-wow-duration="1000ms" data-wow-delay="600ms">Application process</h1>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="process-left text-center">
                <img alt="blank" className="img-fluid" src={approvedIcon} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="feature-wrapper">
                <ul className="list-unstyled">
                  <li className="listing">
                    <span>1</span><h5 className="listing-style">Fill out “Start an Application”</h5>
                  </li>
                  <li className="listing">
                    <span>2</span><h5 className="listing-style">Confirm size, equipment and pricing with builder</h5>
                  </li>
                  <li className="listing">
                    <span>3</span><h5 className="listing-style">Finalize lease terms and get approved</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-12">
              <input className="btn block-btn common-btn"
                type="button"
                value="Start an Application"
                onClick={togglePopup}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="scroll" type="submit">
        <FaArrowCircleUp onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }} />
      </button>
      {isOpen && < Popup
        handleClose={togglePopup}
      />}
    </div>
  );
};

export default Main;
