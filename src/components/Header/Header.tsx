import React from "react";
import { Link } from "react-router-dom";
const WOW = require("wowjs");

interface Props {}
interface MyState {
  wobbles: number;
  text1style: string;
  imgstyle: string;
}
class Header extends React.Component<Props, MyState> {
  state: MyState = {
    wobbles: 0,
    text1style: "text1",
    imgstyle: "image",
  };
  componentDidMount() {
    new WOW.WOW().init();
  }
  names() {
    if (this.state.wobbles === 0) {
      this.setState({
        wobbles: 1,
        text1style: "text1_vis",
        imgstyle: "image_vis",
      });
    } else {
      this.setState({ wobbles: 0, text1style: "text1", imgstyle: "image" });
    }
  }
  render() {
    return (
      //   <div>
      //     <button  onClick={() =>{ this.names()}}

      //  className="btn btn-danger">press here</button>

      // <div className= "image" wobble={this.state.wobble}>
      //   <a className="text1" wobble={this.state.wobble}>mahdad</a>
      // </div>
      //   </div>
      <div className="Header">
        <div className="d-flex justify-content-between mt-3">
          <div
            onClick={() => {
              this.names();
            }}
            className="butn4 mt-3 ml-3"
          ></div>
          <div className="p-2">
            <button className="btn2 mt-2">اعمل معنا</button>
          </div>
          <div className="d-flex justify-content-center mt-3 mr-3 box2">
            <div className="p-2 box2">
              <p className="text4 mr-3">الرئيسية</p>
            </div>
            <div className="p-2 box2">
              <p className="text4 mr-3">المميزات</p>
            </div>
            <div className="p-2 box2">
              <p className="text4 mr-3">نظرة عامة</p>
            </div>
            <div className="p-2 box2">
              <p className="text4 mr-3">التفاصيل </p>
            </div>
            <div className="p-2 box2">
              <p className="text4 mr-3">اتصل</p>
            </div>
          </div>
          <div>
            <img src={require("../../img/logo1.png")} />
          </div>
        </div>
        {/* <div class="d-flex justify-content-center mt-2">
        <div class="p-2"><p className="text4">الرئيسية</p></div>
        <div class="p-2"><p className="text4">المميزات</p></div>
        <div class="p-2"><p className="text4">نظرة عامة</p></div>
    <div class="p-2"><p className="text4">التفاصيل </p></div>
    <div class="p-2"><p className="text4">اتصل</p></div>
    <div className="ml-auto"><img src={require('../img/logo1.png')}/></div>
  </div> */}
        <div>
          <div className={`${this.state.imgstyle} image text-center`}>
            <a className={`${this.state.text1style} text-black`}>الرئيسية</a>
            <br />
            <a className={`${this.state.text1style} text-black mt-3`}>
              المميزات
            </a>
            <br />
            <a className={`${this.state.text1style} text-black mt-3`}>
              نظرة عامة
            </a>
            <br />
            <a className={`${this.state.text1style} text-black mt-3`}>
              التفاصيل
            </a>
            <br />
            <a className={`${this.state.text1style} text-black mt-3`}>اتصل</a>
            <br />
          </div>
        </div>
        <div className="d-flex justify-content-center box1">
          <div
            className="text-center wow bounceIn"
            data-wow-duration="2s"
            data-wow-delay="1s"
          >
            <p className="text2">جيت للتسوق المنزلي اونلاين</p>
            <p className="text3">
              مع تطبيق جيت يمكنك بسهولة التسوق اليومي والأسبوعي وسنوصل طلبك
              لبيتك طازج وقت ما تشاء{" "}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/login">
            <button
              className="btn1 wow bounceIn"
              data-wow-duration="2s"
              data-wow-delay="1s"
            >
              ابدأ التسوق
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
