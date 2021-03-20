import React from "react";
const WOW = require("wowjs");
class Content extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="bg5">
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <p className="text5 text-white mt-3">عن جيت</p>
          </div>
        </div>

        <div className="d-flex justify-content-center text-center mb-3">
          <div className="p-2">
            <p className="text6 text-white">
              تم تصميم وانشاء تطبيق جيت باستخدام التكنولوجيا الحديثة في انجاز
              المهام اليومية . كان تسريع عمليات الشراء اليومية ودعم الزبائن
              واصحاب المتاجر وازدهار ريادةالأعمال من أهم أسباب البدء في انشاء
              هذا التطبيق لتحقيق بعض الرفاهية وتسهيل المعيشة لابناء البلد.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
