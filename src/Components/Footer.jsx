import React from "react";
import { Link } from "react-router-dom";
import logoBlue2 from "../images/logo/logo-blue2.svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer md-pb-70">
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <Link href="index.html">
                      <img src={logoBlue2} alt="" />
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Address: 1234 Fashion Street, Suite 567, <br />
                        New York, NY 10001
                      </p>
                    </li>
                    <li>
                      <p>
                        Email: <Link href="#">info@fashionshop.com</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        Phone: <Link href="#">(212) 555-1234</Link>
                      </p>
                    </li>
                  </ul>
                  <Link href="contact-1.html" className="tf-btn btn-line">
                    Get direction<i className="icon icon-arrow1-top-left"></i>
                  </Link>
                  <ul className="tf-social-icon d-flex gap-10">
                    <li>
                      <Link
                        href="#"
                        className="box-icon w_34 round social-facebook social-line"
                      >
                        <i className="icon fs-14 icon-fb"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="box-icon w_34 round social-twiter social-line"
                      >
                        <i className="icon fs-12 icon-Icon-x"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="box-icon w_34 round social-instagram social-line"
                      >
                        <i className="icon fs-14 icon-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="box-icon w_34 round social-tiktok social-line"
                      >
                        <i className="icon fs-14 icon-tiktok"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="box-icon w_34 round social-pinterest social-line"
                      >
                        <i className="icon fs-14 icon-pinterest-1"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>About us</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>About us</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  <li>
                    <Link href="about-us.html" className="footer-menu_item">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href="our-store.html" className="footer-menu_item">
                      Visit Our Store
                    </Link>
                  </li>
                  <li>
                    <Link href="contact-1.html" className="footer-menu_item">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="login.html" className="footer-menu_item">
                      Account
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-newsletter footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6>Sign Up for Email</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6>Sign Up for Email</h6>
                  </div>
                  <div className="tf-collapse-content">
                    <div className="footer-menu_item">
                      Sign up to get first dibs on new arrivals, sales,
                      exclusive content, events and more!
                    </div>
                    <form
                      className="form-newsletter"
                      id="subscribe-form"
                      action="#"
                      method="post"
                      accept-charset="utf-8"
                      data-mailchimp="true"
                    >
                      <div id="subscribe-content">
                        <fieldset className="email">
                          <input
                            type="email"
                            className="radius-60"
                            name="email-form"
                            id="subscribe-email"
                            placeholder="Enter your email...."
                            tabindex="0"
                            aria-required="true"
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            id="subscribe-button"
                            className="tf-btn btn-sm radius-60 btn-fill btn-icon animate-hover-btn"
                            type="button"
                          >
                            Subscribe
                            <i className="icon icon-arrow1-top-left"></i>
                          </button>
                        </div>
                      </div>
                      <div id="subscribe-msg"></div>
                    </form>
                    <div className="tf-cur">
                      <div className="tf-currencies">
                        <select className="image-select center style-default type-currencies">
                          <option data-thumbnail="images/country/fr.svg">
                            EUR <span>€ | France</span>
                          </option>
                          <option data-thumbnail="images/country/de.svg">
                            EUR <span>€ | Germany</span>
                          </option>
                          <option
                            selected
                            data-thumbnail="images/country/us.svg"
                          >
                            USD <span>$ | United States</span>
                          </option>
                          <option data-thumbnail="images/country/vn.svg">
                            VND <span>₫ | Vietnam</span>
                          </option>
                        </select>
                      </div>
                      <div className="tf-languages">
                        <select className="image-select center style-default type-languages">
                          <option>English</option>
                          <option>العربية</option>
                          <option>简体中文</option>
                          <option>اردو</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                {/* <div class="w-100"> */}
                <iframe
                  title="PAls WorkPlace"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262.82414695989587!2d72.54787834437944!3d23.097798107304826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e831824190719%3A0x73f901e0e996377c!2sVandemataram%20Icon!5e1!3m2!1sen!2sin!4v1727081110260!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  // style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">
                    © 2024 Ecomus Store. All Rights Reserved
                  </div>
                  <div className="tf-payment">
                    <img src="images/payments/visa.png" alt="" />
                    <img src="images/payments/img-1.png" alt="" />
                    <img src="images/payments/img-2.png" alt="" />
                    <img src="images/payments/img-3.png" alt="" />
                    <img src="images/payments/img-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
