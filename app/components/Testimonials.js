import React from "react";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <h3 className="heading">
                <span className="text-primary">Testimonials</span>
              </h3>
              <p>
                Hear what our happy clients has to say about our top notch
                services.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="swiper mySwiper1 my-5">
              <div className="swiper-wrapper">
                <div className="swiper-slide client-box card">
                  <div className="client-content card-body p-0">
                    <div className="quote-img">
                      <img
                        src="/images/quote.png"
                        alt="quote"
                        className="img-fluid"
                      />
                    </div>
                    <p className="text-dark mb-0 fs-5 lh-base">
                      Praesent tincidunt suscipit lacus vel dictum. Praesent
                      nisl viverra sit amet sem sed porta. Quisque ac purus
                      ipsum. Sed facilisis sed egestas dolor.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4 pt-3">
                    <img
                      src="/images/img-1.jpg"
                      alt=""
                      height="55"
                      width="55"
                      className="rounded-circle"
                    />
                    <div className="ms-2">
                      <h5 className="mb-0">James Odenyaba</h5>
                      <p className="text-muted mb-0">Creative Designer</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide client-box card">
                  <div className="client-content card-body p-0">
                    <div className="quote-img">
                      <img
                        src="/images/quote.png"
                        alt="quote"
                        className="img-fluid"
                      />
                    </div>
                    <p className="text-dark mb-0 fs-5 lh-base">
                      Praesent tincidunt suscipit lacus vel dictum. Praesent
                      nisl viverra sit amet sem sed porta. Quisque ac purus
                      ipsum. Sed facilisis sed egestas dolor.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4 pt-3">
                    <img
                      src="/images/img-2.jpg"
                      alt=""
                      height="55"
                      width="55"
                      className="rounded-circle"
                    />
                    <div className="ms-2">
                      <h5 className="mb-0">Elizabeth Hobbs</h5>
                      <p className="text-muted mb-0">Web Designer</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide client-box card">
                  <div className="client-content card-body p-0">
                    <div className="quote-img">
                      <img
                        src="/images/quote.png"
                        alt="quote"
                        className="img-fluid"
                      />
                    </div>
                    <p className="text-dark mb-0 fs-5 lh-base">
                      Praesent tincidunt suscipit lacus vel dictum. Praesent
                      nisl viverra sit amet sem sed porta. Quisque ac purus
                      ipsum. Sed facilisis sed egestas dolor.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4 pt-3">
                    <img
                      src="/images/img-3.jpg"
                      alt=""
                      height="55"
                      width="55"
                      className="rounded-circle"
                    />
                    <div className="ms-2">
                      <h5 className="mb-0">Robert O'Neill</h5>
                      <p className="text-muted mb-0">CEO & Founder</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide client-box card">
                  <div className="client-content card-body p-0">
                    <div className="quote-img">
                      <img
                        src="/images/quote.png"
                        alt="quote"
                        className="img-fluid"
                      />
                    </div>
                    <p className="text-dark mb-0 fs-5 lh-base">
                      Praesent tincidunt suscipit lacus vel dictum. Praesent
                      nisl viverra sit amet sem sed porta. Quisque ac purus
                      ipsum. Sed facilisis sed egestas dolor.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4 pt-3">
                    <img
                      src="/images/img-4.jpg"
                      alt=""
                      height="55"
                      width="55"
                      className="rounded-circle"
                    />
                    <div className="ms-2">
                      <h5 className="mb-0">Connor Storey</h5>
                      <p className="text-muted mb-0">Art & Creative Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
