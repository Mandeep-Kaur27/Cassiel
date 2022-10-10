import React, { useState } from 'react';
import { Fragment } from "react";
import Popup from "../../components/Popup";
import logo from "../../../src/assets/logo.png";
import { FaBars, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen,] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Fragment>
      <div className="header_top">
        <div className="top-bar">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-sm-6">
                <ul className="header-info mb-0 d-flex list-unstyled">
                  <span>Email: </span><li><a href="mailto:sales@cassielrentals.com" target="blank">sales@cassielrentals.com </a></li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="nav navbar-nav flex-row justify-content-end social-icons">
                  <li className="nav-item me-4 nav-link">
                    <a href="#hh">
                      <FaFacebookF />
                    </a>
                  </li>

                  <li className="nav-item me-4 nav-link">
                    <a href="#hh">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#hh">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="col-sm-2">
              <div className="logo-wrap">
                <a target="blank" href="#home"><img className="img-fluid" alt="logo" src={logo} /></a>
              </div>
            </div>
            <div className="col-md-10">
              <button
                class="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <div class="hamburger-toggle">
                  <FaBars className="hamburger" />
                </div>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbar-content">
                <ul className="nav navbar-nav flex-row align-items-center">
                  <li className="nav-item nav-link">
                    <a href="#home" className="nav-anchor">
                      Home
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#clients" className="nav-anchor">
                      Our Clients
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#features" className="nav-anchor">
                      Lease Features
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#lease" className="nav-anchor">
                      The Lease
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#trailer" className="nav-anchor">
                      Trailer Variety
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#process" className="nav-anchor">
                      Application Process
                    </a>
                  </li>
                  <li className="nav-item nav-link pe-0">
                    <input className="btn block-btn common-btn"
                      type="button"
                      value="Start an Application"
                      onClick={togglePopup}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {isOpen && < Popup
        handleClose={togglePopup}
      />}
      </div>
    </Fragment>
  );
};

export default Header;
