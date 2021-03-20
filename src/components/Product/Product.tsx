import React from "react";
import { connect } from "react-redux";
import img8 from "../img/8.jpg";
interface Props {
  text: string;
  img1: string;
  kala1: string;
  cost1: string;
  img2: string;
  kala2: string;
  cost2: string;
  img3: string;
  kala3: string;
  cost3: string;
  img4: string;
  kala4: string;
  cost4: string;
  img5: string;
  kala5: string;
  cost5: string;
  img6: string;
  kala6: string;
  cost6: string;
  img7: string;
  kala7: string;
  cost7: string;
  img8: string;
  kala8: string;
  cost8: string;
}
interface MyState {
  Name: string;
  Id: string;
}
class Product2 extends React.Component<Props, MyState> {
  state: MyState = {
    Name: "",
    Id: "",
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#9bd427",
            height: "300px",
          }}
        >
          <div className="d-flex justify-content-center">
            <div className="p-2">
              <br />
              <br />
              <a className="text_product text-white">{this.props.text}</a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end text2_product mb-3">
          <div className="p-2 mr-3">منتجات مقترحة</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <img src={this.props.img1} style={{ height: "250px" }} />
              </div>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.kala1}
              </a>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.cost1}
              </a>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn5 mt-2">أصف للسله</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <img src={this.props.img2} style={{ height: "250px" }} />
              </div>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.kala2}
              </a>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.cost2}
              </a>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn5 mt-2">أصف للسله</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <img src={this.props.img3} style={{ height: "250px" }} />
              </div>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.kala3}
              </a>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.cost3}
              </a>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn5 mt-2">أصف للسله</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <img src={this.props.img4} style={{ height: "250px" }} />
              </div>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.kala4}
              </a>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.cost4}
              </a>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn5 mt-2">أصف للسله</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <img src={this.props.img5} style={{ height: "250px" }} />
              </div>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.kala5}
              </a>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.cost5}
              </a>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn5 mt-2">أصف للسله</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <img src={this.props.img6} style={{ height: "250px" }} />
              </div>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.kala6}
              </a>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.cost6}
              </a>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn5 mt-2">أصف للسله</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <img src={this.props.img7} style={{ height: "250px" }} />
              </div>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.kala7}
              </a>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.cost7}
              </a>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn5 mt-2">أصف للسله</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <img src={this.props.img8} style={{ height: "250px" }} />
              </div>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.kala8}
              </a>
              <br />
              <a
                className="text3_product text-dark"
                style={{ textDecoration: "none" }}
              >
                {this.props.cost8}
              </a>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn5 mt-2">أصف للسله</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispachToProps = (dispach) => {
//   return {
//     id: this.state.shopdId,
//     Press1: () => dispach({ type: 1 }),
//     Press2: () => dispach({ type: 2 }),
//   };
// };
const mapStateToProps = (state: {
  text: any;
  url: any;
  kala1: any;
  img1: any;
  cost1: any;
  kala2: any;
  img2: any;
  cost2: any;
  kala3: any;
  img3: any;
  cost3: any;
  kala4: any;
  img4: any;
  cost4: any;
  kala5: any;
  img5: any;
  cost5: any;
  kala6: any;
  img6: any;
  cost6: any;
  kala7: any;
  img7: any;
  cost7: any;
  kala8: any;
  img8: any;
  cost8: any;
  kala9: any;
  img9: any;
  cost9: any;
}) => {
  return {
    text: state.text,
    url: state.url,
    kala1: state.kala1,
    img1: state.img1,
    cost1: state.cost1,
    kala2: state.kala2,
    img2: state.img2,
    cost2: state.cost2,
    kala3: state.kala3,
    img3: state.img3,
    cost3: state.cost3,

    kala4: state.kala4,
    img4: state.img4,
    cost4: state.cost4,

    kala5: state.kala5,
    img5: state.img5,
    cost5: state.cost5,

    kala6: state.kala6,
    img6: state.img6,
    cost6: state.cost6,

    kala7: state.kala7,
    img7: state.img7,
    cost7: state.cost7,

    kala8: state.kala8,
    img8: state.img8,
    cost8: state.cost8,

    kala9: state.kala9,
    img9: state.img9,
    cost9: state.cost9,
  };
};

export default connect(mapStateToProps, {})(Product2);
