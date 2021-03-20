import React from "react";
import Rectangular from "../../img/Rectangle27.png";
import Facebook from "../../img/facebook-01.png";
import Google from "../../img/google-01.png";
import Instagram from "../../img/insta-01.png";
const WOW = require("wowjs");
class Footer extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <p className="text7 mt-3" style={{ color: "#9BD427" }}>
                اتصل بنا
              </p>
              <br />
              <div className="d-flex justify-content-center mb-3">
                <div>
                  <p className="text4 mr-3">العنوان : الناصرية – مجمع تينا</p>
                </div>

                <div>
                  <img
                    className="icon5 mr-3"
                    style={{ width: "30px" }}
                    src={Rectangular}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center mb-3">
                <div>
                  <p className="text4 mr-3">رقم الهاتف : 07808883797</p>
                </div>

                <div>
                  <img
                    className="icon5 mr-3"
                    style={{ width: "30px" }}
                    src={Rectangular}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center col-md-6 col-sm-12">
              <p className="text7 mt-3" style={{ color: "#9BD427" }}>
                وسائل التواصل الاجتماعي
              </p>
              <br />
              <img className="icon5 mr-3" src={Facebook} />
              <img className="icon5 mr-3" src={Google} />
              <img className="icon5 mr-3" src={Instagram} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
