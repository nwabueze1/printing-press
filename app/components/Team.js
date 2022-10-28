import React from "react";

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <h3 className="heading mb-3">
                Our <span className="text-primary">Team</span>
              </h3>
              <p className="text-muted mb-0">
                Nam pulvinar vitae neque et porttitor. Praesent sed nisi
                eleifend. Nam pulvinar vitae neque et porttitor. Praesent sed
                nisi eleifend.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-member">
              <div className="team-img">
                <img
                  src="/images/blog/blog-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <h4>Hi There !</h4>
                  <p>I love to introduce myself as a hardcore Web Designer.</p>
                </div>
                <div className="s-link">
                  <a href="#">
                    <i className="mdi mdi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="mdi mdi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="mdi mdi-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Umeh Joseph</h5>
              <span>founder &amp; ceo</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-member">
              <div className="team-img">
                <img
                  src="/images/blog/blog-2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <h4>Hi Dear</h4>
                  <p>
                    I am a passionate Software Engineer who loves challenges.
                  </p>
                </div>
                <div className="s-link">
                  <a href="https://facebook.com/okekefidelis" target={"_blank"}>
                    <i className="mdi mdi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="mdi mdi-twitter"></i>
                  </a>
                  <a href="mailto:padrefidelis111@gmail.com">
                    <i className="mdi mdi-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Okeke Fidelis</h5>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-member">
              <div className="team-img">
                <img
                  src="/images/blog/blog-3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <h4>I love to design</h4>
                  <p>I love to introduce myself as a hardcore Web Designer.</p>
                </div>
                <div className="s-link">
                  <a href="#">
                    <i className="mdi mdi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="mdi mdi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="mdi mdi-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Umeh Peter</h5>
              <span>Architect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
