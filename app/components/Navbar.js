import React, { useEffect } from "react";

export default function Navbar() {
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", (ev) => {
      ev.preventDefault();
      windowScroll();
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky"
      id="navbar"
    >
      <div class="container">
        {/* <!-- LOGO --> */}
        <a class="navbar-brand text-uppercase" href="index-1.html">
          {/* <img
            class="logo-light"
            src="images/logo-light.png"
            alt=""
            height="30"
          />
          <img
            class="logo-dark"
            src="images/logo-dark.png"
            alt=""
            height="30"
          /> */}
          <h5 style={{ color: "#ff805d" }}>Studio 5</h5>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mdi mdi-menu"></span>
          {/* <!-- toggle button --> */}
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mx-auto" id="navbar-navlist">
            <li class="nav-item">
              <a class="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#features">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">
                Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mb-3 mb-lg-0" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          {/* <!-- Button trigger modal --> */}
          <a href="#" class="btn btn-primary nav-btn">
            Blog
          </a>
          {/* <!-- Nav btn --> */}
        </div>
      </div>
    </nav>
  );
}
