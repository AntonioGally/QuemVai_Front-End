import React from "react";

import { FaceBookIcon, InstagramIcon, GooglePlusIcon } from "./styles";

const Footer: React.FC = () => {
  return (
    <div>
      <footer
        className="page-footer font-small"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center" >
            
              <div className="row" style={{margin:'4% 0 4%'}}>
                <div className="col text-center">
                  <a href="https://www.facebook.com/ChumeCompany/" target="_blank" rel="noopener noreferrer" className="fb-ic">
                    <FaceBookIcon />
                  </a>
                </div>

                <div className="col text-center">
                  <a href="https://www.instagram.com/chume_co/" target="_blank" rel="noopener noreferrer" className="tw-ic">
                    <InstagramIcon />
                  </a>
                </div>

                <div className="col text-center">
                  <a href="/" className="gplus-ic">
                    <GooglePlusIcon />
                  </a>
                </div>
              </div>
            
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: <h5>Chume Company</h5>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
