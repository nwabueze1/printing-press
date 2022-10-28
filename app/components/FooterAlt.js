import React from "react";

export default function FooterAlt() {
  return (
    <div className="footer-alt pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <p className="mb-0 fs-15 text-white">
                ©{new Date().getFullYear()} Designed by
                <i className="mdi mdi-heart text-danger"></i> Okeke Fidelis
                Nwabueze
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
