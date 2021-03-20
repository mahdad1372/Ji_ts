import React from "react";
const WOW = require("wowjs");
class Section6 extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section>
        <div
          className="container wow slideInUp"
          data-wow-offset="30"
          data-wow-iteration="1"
          data-wow-delay=".2s"
          data-wow-duration="1s"
        >
          <br />
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="d-flex justify-content-center text-center">
                <img className="icon4" src={require("../../img/Iraq33.png")} />
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 text-right">
              <p className="text5 mt-3">قريبا في جميع محافظات العراق </p>
              <br />
              <p className="text6">
                جيت كأول خدمة تسوق و توصيل للمنازل في العراق يتطلع لتقديم
                الخدمات و تغطية كافة محافظات ومناطق العراق , لأنكم تستحقون
                الأفضل دائما. توسيع نطاق العمل وتقديم الخدمات يحتاج منا المزيد
                من الوقت والجهد لضمان اعلى مستويات الجودة في العمل .{" "}
              </p>
              <br />
              <div className="d-flex flex-row-reverse mb-3">
                <div>
                  <button className="btn3 mt-2">المناطق المدعومه</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section6;
