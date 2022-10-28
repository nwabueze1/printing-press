import React from "react";

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <h3 className="heading">
                Our <span className="text-primary">Services</span>
              </h3>
              <p>
                Nam egestas mi sit amet orci dignissim tempor Integer tincidunt
                nunc mauris in egestas nibh.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="box">
                  <div className="flex-shrink-0 my-3">
                    <div className="avatar-sm align-items-center">
                      <div className="avatar-title">
                        <i className="mdi mdi-biohazard"></i>
                      </div>
                    </div>
                  </div>
                  <h4>Digital Studio</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, quae?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="box">
                  <div className="flex-shrink-0 my-3">
                    <div className="avatar-sm align-items-center">
                      <div className="avatar-title">
                        <i className="mdi mdi-desktop-mac"></i>
                      </div>
                    </div>
                  </div>
                  <h4>Printing Press</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, quae?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="box">
                  <div className="flex-shrink-0 my-3">
                    <div className="avatar-sm align-items-center">
                      <div className="avatar-title">
                        <i className="mdi mdi-shield-account-outline"></i>
                      </div>
                    </div>
                  </div>
                  <h4>Event Coverage </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, quae?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="box">
                  <div className="flex-shrink-0 my-3">
                    <div className="avatar-sm align-items-center">
                      <div className="avatar-title">
                        <i className="mdi mdi-email-open-multiple-outline"></i>
                      </div>
                    </div>
                  </div>
                  <h4>Media</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, quae?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
