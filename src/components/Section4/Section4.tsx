import React from "react";
const WOW = require("wowjs");
class Section4 extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-3">
          <div className="p-2">
            <p
              className="text5 mt-3  wow bounceIn"
              data-wow-offset="40"
              data-wow-iteration="1"
              data-wow-delay=".2s"
              data-wow-duration="1s"
            >
              مميزات التطبيق
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center text-center">
          <div className="p-2">
            <p
              className="text6 wow bounceIn"
              data-wow-offset="40"
              data-wow-iteration="1"
              data-wow-delay=".2s"
              data-wow-duration="1s"
            >
              للحصول على متعة تسوق خاصة و شيقة وفرنا لكم أسهل طريقة لشراء
              المقاضي اونلاين
            </p>
          </div>
        </div>
        <div
          className="container wow slideInLeft"
          data-wow-offset="70"
          data-wow-iteration="1"
          data-wow-delay=".2s"
          data-wow-duration="1s"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="icon2"
                    src={require("../../img/icon8-01.png")}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">التوصيل لاي مكان</a>
                  <br />
                  <a className="text6 mt-3">داخل نطاق العمل</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="icon2"
                    src={require("../../img/icon11-01.png")}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">دعم المتاجر والمولات</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="icon2"
                    src={require("../../img/icon7-01.png")}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">دعم فني 27\7</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="icon2"
                    src={require("../../img/icon9-01.png")}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">جدولة وقت الطلبيات </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="icon2"
                    src={require("../../img/icon12-01.png")}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">تقليل استهلاك الوقود</a>
                  <br />
                  <a className="text6 mt-3">وتلوث الهواء</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="icon2"
                    src={require("../../img/icon10-01.png")}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">الحفاظ على سلامتكم من</a>
                  <br />
                  <a className="text6 mt-3">كوفيد 19 والامراض الاخرى</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="icon2"
                    src={require("../../img/icon13-01.png")}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">الاستمتاع بالتخفيضات </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="icon2"
                    src={require("../../img/icon14-01.png")}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">طرق دفع متعددة</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img className="icon2" src={require("../../img/icon1.png")} />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div>
                  <a className="text6 mt-3">تسريع عملية التسوق</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
