import React from "react";

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <h3 className="heading mb-3">
                Our <span className="text-primary">Pricing </span>Plans
              </h3>
              <p className="text-muted mb-0">
                Our Pricing Package is structured in such a way that you get the
                best service at the least price
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="pricing-box card text-center border-0">
              <div className="mb-3">
                <h6 className="text-uppercase mb-0">Starter Plan</h6>
                <h1 className="text-primary mb-0 display-4 fw-bold">
                  <sup>NGN</sup>
                  35K
                  <sub className="text-dark">/event</sub>
                </h1>
              </div>
              <ul className="pricing-list list-unstyled mt-2 mb-0">
                <li className="pricing-item">
                  <span className="text-success">2</span> Cameras
                </li>
                <li className="pricing-item">
                  <span className="text-success">1</span> Video
                </li>
                <li className="pricing-item">
                  <span className="text-success">2</span> Banners
                </li>
                <li className="pricing-item">
                  <span className="text-success">10</span> Jotter's
                </li>
                <li className="pricing-item">
                  <del className="text-muted">Updates</del>
                </li>
                <li className="pricing-item">
                  <del className="text-muted">Premium support</del>
                </li>
              </ul>
              <div className="mt-4 pt-3">
                <a href="#" className="btn btn-pricing w-100">
                  Request Service
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <div className="pricing-box pricing-active card text-center overflow-hidden">
              <div className="ribbon">Selling</div>
              <div className="mb-3">
                <h6 className="text-uppercase mb-0">Advanced Plan</h6>
                <h1 className="text-primary mb-0 display-4 fw-bold">
                  <sup className="fw-normal">NGN</sup>65k
                  <sub className="text-dark">/event</sub>
                </h1>
              </div>
              <ul className="pricing-list list-unstyled mt-2 mb-0">
                <li className="pricing-item">
                  <span className="text-success">2</span> Cameras
                </li>
                <li className="pricing-item">
                  <span className="text-success">2</span> Video Camera
                </li>
                <li className="pricing-item">
                  <span className="text-success">7</span> Banners
                </li>
                <li className="pricing-item">
                  <span className="text-success">24</span> Brochures
                </li>
                <li className="pricing-item">Updates</li>
                <li className="pricing-item">
                  <del className="text-muted">Premium support</del>
                </li>
              </ul>
              <div className="mt-4 pt-3">
                <a href="#" className="btn btn-pricing w-100">
                  Request Service
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <div className="pricing-box card text-center border-0">
              <div className="mb-3">
                <h6 className="text-uppercase mb-0">Professional Plan</h6>
                <h1 className="text-primary mb-0 display-4 fw-bold">
                  <sup className="fw-normal">NGN</sup>135k
                  <sub className="text-dark">/event</sub>
                </h1>
              </div>
              <ul className="pricing-list list-unstyled mt-2 mb-0">
                <li className="pricing-item">
                  <span className="text-success">1</span> Drone
                </li>
                <li className="pricing-item">
                  <span className="text-success">4</span> Camera's with speed
                  light
                </li>
                <li className="pricing-item">
                  <span className="text-success">10</span> Banners
                </li>
                <li className="pricing-item">
                  <span className="text-success">3</span> Video Camera
                </li>
                <li className="pricing-item">
                  <span className="text-success">30</span> Brochures
                </li>
                <li className="pricing-item">Updates</li>
                <li className="pricing-item text-success">Premium support</li>
              </ul>
              <div className="mt-4 pt-3">
                <a href="#" className="btn btn-pricing w-100">
                  Request Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
