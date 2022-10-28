import React from "react";

export default function Footer() {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row g-sm-4">
          <div className="col-lg-3 col-md-4 col-6">
            <h6 className="text-uppercase fw-semibold">About</h6>
            <ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
              <li>
                <a href="javascript:void(0)">About</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-10">
            <h6 className="text-uppercase fw-semibold">
              Social medial
              {/* <span className="text-primary text-uppercase fs-18">Tydek</span> */}
            </h6>
            <p className="mt-md-3 pt-3 pt-md-2 fs-14">
              Semper nibh a dignissim Integer cursus tempsed.
            </p>
            <div className="footer-subcribe text-end shadow-sm d-inline-block">
              <form action="javascript:void(0)">
                <input placeholder="Your Email Address" type="email" />
                <button type="submit" className="btn btn-primary">
                  <i className="mdi mdi-bell-ring"></i>
                </button>
              </form>
            </div>
            <div className="mt-md-4 mt-3">
              <ul className="list-unstyled mb-0 mt-3 social-icon">
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="800">
                    <div className="icon-text">
                      <div className="icon facebook">
                        <span>
                          <i className="mdi mdi-facebook"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="1200">
                    <div className="icon-text">
                      <div className="icon twitter">
                        <span>
                          <i className="mdi mdi-twitter"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="1600">
                    <div className="icon-text">
                      <div className="icon instagram">
                        <span>
                          <i className="mdi mdi-instagram"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="2000">
                    <div className="icon-text">
                      <div className="icon github">
                        <span>
                          <i className="mdi mdi-github"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="2400">
                    <div className="icon-text">
                      <div className="icon youtube">
                        <span>
                          <i className="mdi mdi-youtube"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
