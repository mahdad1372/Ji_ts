import React from "react";
import Icon8 from "../../img/icon8-01.png";
import Icon11 from "../../img/icon11-01.png";
import Icon7 from "../../img/icon7-01.png";
import Icon9 from "../../img/icon9-01.png";
import Icon12 from "../../img/icon12-01.png";
import Icon10 from "../../img/icon10-01.png";
import Icon13 from "../../img/icon13-01.png";
import Icon14 from "../../img/icon14-01.png";
import Icon1 from "../../img/icon1.png";
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
                  <img className="icon2" src={Icon8} />
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
                  <img className="icon2" src={Icon11} />
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
                  <img className="icon2" src={Icon7} />
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
                  <img className="icon2" src={Icon9} />
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
                  <img className="icon2" src={Icon12} />
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
                  <img className="icon2" src={Icon10} />
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
                  <img className="icon2" src={Icon13} />
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
                  <img className="icon2" src={Icon14} />
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
                  <img className="icon2" src={Icon1} />
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
