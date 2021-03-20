import React from "react";
const WOW = require("wowjs");
class Section5 extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="bg4">
        <div
          className="container wow slideInDown"
          data-wow-offset="20"
          data-wow-iteration="1"
          data-wow-delay=".2s"
          data-wow-duration="1s"
        >
          <br />
          <br />
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 text-right">
              <p className="text5 mt-3">
                أفضل وسيلة تسوق منزلي الكتروني في العراق
              </p>
              <br />
              <p className="text6">
                يقدم تطبيق جيت خدمات التسوق و التوصيل بواسطة كادر محترف مدرَّب
                على نقل وتوصيل الطلبيات بأمان وسرعة كبيرة . التطبيق هو نتاج جهد
                شباب عراقي يسعى لطوير التكنولوجيا ومنظومة التسوق المنزلي
                والتوصيل في العراق ويتميز بسرعة التوصيل وجودة الخدمة والتخفيضات
                المقدمة .{" "}
              </p>
              <br />
              <div className="d-flex flex-row-reverse">
                <div>
                  <button className="btn2 mt-2">حمل التطبيق</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="d-flex justify-content-center text-center">
                <img
                  className="icon4"
                  src={require("../../img/cellphone11.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section5;
