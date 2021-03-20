import React from "react";
import { Link } from "react-router-dom";
import Jiet from "../../img/jiet1.png";
import axios from "axios";
interface Props {}
interface MyState {
  check1: string;
  check2: string;
  mobile: string;
  checked: boolean;
}
class LOGIN extends React.Component<Props, MyState> {
  state: MyState = {
    check1: " ../img/empty-checkbox.png",
    check2: " ../img/checkbox.png",
    mobile: "",
    checked: false,
  };
  check() {
    if (this.state.checked === false) {
      this.setState({ check1: " ../img/checkbox.png", checked: true });
    } else {
      this.setState({
        check1: " ../img/empty-checkbox.png",
        checked: false,
      });
    }
  }

  handleChange = (event: { target: { value: any } }) => {
    this.setState({ mobile: event.target.value });
  };

  handleSubmit = () => {
    const user = {
      country_code: 98,
      mobile: 9305931509,
      role: "customer",
    };
    axios.post("http://admin.jiet.app/api/login/send-token", user);
  };
  render() {
    return (
      <div>
        <div className="bg3">
          <div className="d-flex justify-content-center mb-3">
            <img src={Jiet} />
          </div>
          <div className="d-flex justify-content-center mb-1">
            <p className="text2">مرحبا بكم في جيت</p>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <p className="text3">ادخول رقم الهاتف لتسجیل الدخول</p>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <input
              className="input_type"
              type="text"
              placeholder="07808336231"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-flex justify-content-center mb-3">
            <p className="text3">القوانين و الشروط الموافقه علي</p>
            <img
              src={this.state.check1}
              style={{ height: "30px", marginTop: "5px", marginLeft: "5px" }}
              onClick={() => {
                this.check();
              }}
            />
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button onClick={this.handleSubmit} className="btn5 mt-2">
              تسجيل دخول
            </button>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <Link to="/findlocation" style={{ textDecoration: "none" }}>
              <button className="btn4 mt-2">
                <a>الدخول کذیف</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LOGIN;
