import React from "react";
import Icon2 from "../../img/icon2.png";
import Icon1 from "../../img/icon1.png";
import Icon3 from "../../img/icon3.png";
import Icon4 from "../../img/icon4.png";
import Icon5 from "../../img/icon5.png";
import Icon6 from "../../img/icon6.png";
const WOW = require("wowjs");

class Section3 extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="bg3">
        <div className="d-flex justify-content-center ">
          <div>
            <p className="text5 mt-3">لماذا تطبيق جيت ؟</p>
          </div>
        </div>
        <div
          className="container wow slideInRight"
          data-wow-offset="15"
          data-wow-iteration="1"
          data-wow-delay=".2s"
          data-wow-duration="1s"
        >
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-end mb-3">
                <div className="p-2 mt-2">
                  <p className="text6">اختياراقرب سوبرماركت او متجر تسوق</p>
                </div>
                <div className="p-2">
                  <img className="icon2" src={Icon2} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="box3 mb-3">
                <div className="p-2 ml-3 mt-2">
                  <p className="text6">سرعة في التسوق اليومي</p>
                </div>
                <div className="p-2">
                  <img className="icon2" src={Icon1} />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-end mb-3">
                <div className="p-2 mt-2">
                  <a className="text6">
                    تعيين طريقة الدفع(الكتروني – عند الاستلام)
                  </a>
                </div>
                <div className="p-2">
                  <img className="icon2" src={Icon3} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="box3 mb-3">
                <div className="p-2 mt-2">
                  <p className="text6">تحديد المنتجات حسب الفئة </p>
                </div>
                <div className="p-2">
                  <img className="icon2" src={Icon4} />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-end mb-3">
                <div className="p-2 mt-2">
                  <a className="text6">الحصول على التخفيضات</a>
                </div>
                <div className="p-2">
                  <img className="icon2" src={Icon5} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12  text-right">
              <div className="box3 mb-3" style={{ marginLeft: "60px" }}>
                <div className="p-2 mt-2">
                  <p className="text6">تحديد وقت الاستلام</p>
                </div>
                <div className="p-2">
                  <img className="icon2" src={Icon6} />
                </div>
              </div>
            </div>
          </div>
          <div className="box3 mt-2">
            <div className="p-2 mt-2">
              <p className="text6">امكانية اضافة اكثر من عنوان</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section3;
