import React from "react";
import collectionGrocery1 from "./images/banner-collection-grocery.jpg";
import collectionGrocery2 from "./images/banner-collection-grocery2.jpg";
import vegetable1 from "./images/vegetable1.jpg";
import vegetable2 from "./images/vegetable2.jpg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <section className="flat-spacing-30 flat-control-sw">
        <div className="container">
          <div className="flat-title flex-row justify-content-between px-0">
            <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
              Featured Categories
            </span>
            <div className="box-sw-navigation">
              <div className="sw-dots style-2 medium sw-pagination-recent justify-content-center"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="flat-spacing-13 pt_0">
        <div className="container">
          <div
            className="swiper tf-sw-collection"
            data-preview="2"
            data-tablet="2"
            data-mobile="1.2"
            data-space-lg="30"
            data-space-md="30"
            data-space="15"
            data-loop="false"
            data-auto-play="false"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="collection-item-v4 hover-img">
                  <Link href="product-detail.html" className="collection-inner">
                    <div className="collection-image radius-10 img-style">
                      <img
                        className="lazyload"
                        src={collectionGrocery2}
                        alt="collection-img"
                      />
                    </div>
                    <div className="collection-content text-start">
                      <div className="bottom wow fadeInUp" data-wow-delay="0s">
                        <p className="subheading fs-14 fw-7">
                          SALE UP TO 30% OFF
                        </p>
                        <h5 className="heading fw-6">
                          For Juice Lovers <br />
                          Everywhere
                        </h5>
                        <button className="tf-btn style-3 btn-color-6 radius-60 animate-hover-btn">
                          Shop now
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="collection-item-v4 hover-img">
                  <Link href="product-detail.html" className="collection-inner">
                    <div className="collection-image radius-10 img-style">
                      <img
                        className="lazyload"
                        src={collectionGrocery1}
                        alt="collection-img"
                      />
                    </div>
                    <div className="collection-content text-start">
                      <div className="bottom wow fadeInUp" data-wow-delay="0s">
                        <p className="subheading fs-14 fw-7 text-white">
                          FREE DELIVERY
                        </p>
                        <h5 className="heading text-white fw-6">
                          Organic Ingredients <br />
                          Made Easy
                        </h5>
                        <button className="tf-btn style-3 btn-color-5 radius-60 animate-hover-btn">
                          Shop now
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flat-spacing-5 pt_0">
        <div className="container">
          <div className="flat-animate-tab">
            <div className="flat-title flat-title-tab flex-row justify-content-between px-0">
              <span
                className="title text-nowrap fw-6 wow fadeInUp"
                data-wow-delay="0s"
              >
                Popular products
              </span>
            </div>
            <div className="tab-content">
              <div className="tab-pane active show" id="meat" role="tabpanel">
                <div className="tf-grid-layout tf-col-2 lg-col-4">
                  <div className="card-product style-9">
                    <div className="card-product-wrapper">
                      <Link href="product-detail.html" className="product-img">
                        <img
                          className="lazyload img-product"
                          src={vegetable1}
                          alt="image-product"
                        />
                        <img
                          className="lazyload img-hover"
                          src={vegetable2}
                          alt="image-product"
                        />
                      </Link>
                    </div>
                    <div className="card-product-info">
                      <div className="inner-info">
                        <Link
                          href="product-detail.html"
                          className="title link fw-6"
                        >
                          Ocado Little Gem Lettuce
                        </Link>
                        <span className="price fw-6">$85.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-product style-9">
                    <div className="card-product-wrapper">
                      <Link href="product-detail.html" className="product-img">
                        <img
                          className="lazyload img-product"
                          src={vegetable1}
                          alt="image-product"
                        />
                        <img
                          className="lazyload img-hover"
                          src={vegetable2}
                          alt="image-product"
                        />
                      </Link>
                    </div>
                    <div className="card-product-info">
                      <div className="inner-info">
                        <Link
                          href="product-detail.html"
                          className="title link fw-6"
                        >
                          Ocado Little Gem Lettuce
                        </Link>
                        <span className="price fw-6">$85.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-product style-9">
                    <div className="card-product-wrapper">
                      <Link href="product-detail.html" className="product-img">
                        <img
                          className="lazyload img-product"
                          src={vegetable1}
                          alt="image-product"
                        />
                        <img
                          className="lazyload img-hover"
                          src={vegetable2}
                          alt="image-product"
                        />
                      </Link>
                    </div>
                    <div className="card-product-info">
                      <div className="inner-info">
                        <Link
                          href="product-detail.html"
                          className="title link fw-6"
                        >
                          Ocado Little Gem Lettuce
                        </Link>
                        <span className="price fw-6">$85.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-product style-9">
                    <div className="card-product-wrapper">
                      <Link href="product-detail.html" className="product-img">
                        <img
                          className="lazyload img-product"
                          src={vegetable1}
                          alt="image-product"
                        />
                        <img
                          className="lazyload img-hover"
                          src={vegetable2}
                          alt="image-product"
                        />
                      </Link>
                    </div>
                    <div className="card-product-info">
                      <div className="inner-info">
                        <Link
                          href="product-detail.html"
                          className="title link fw-6"
                        >
                          Ocado Little Gem Lettuce
                        </Link>
                        <span className="price fw-6">$85.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
