import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Shop1 from "../img/shop1.jpg";
import data from "../../data/data.json";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      url: this.props.url,
      nearshop: "",
      aroundshop: "",
      shopdId: "",
      active: "",
      all: "btn6_active",
      mobile: "",
      cookies: "",
      supermarket: "",
      fruit: "",
      filter: data.filter((x) => x.type === "s" || "f" || "m" || "c"),
      markers: [
        {
          name: "Current position",
          position: {
            lat: "33.310324",
            lng: "44.381712",
          },
        },
      ],
    };
  }

  onMarkerDragEnd = (coord, index) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState((prevState) => {
      const markers = [...this.state.markers];
      markers[index] = { ...markers[index], position: { lat, lng } };
      return { markers };
    });
  };

  getLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;

        let newState = Object.assign({}, this.state);
        newState.markers[0].position.lat = coords.latitude;
        newState.markers[0].position.lng = coords.longitude;

        this.setState(newState);
        console.log(
          "map",
          this.state.markers[0].position.lat,
          this.state.markers[0].position.lng
        );
      });
    }
  };
  location = () => {
    const url2 = "https://admin.jiet.app";
    this.getLocation();
    const user = {
      lat: this.state.markers[0].position.lat,
      lng: this.state.markers[0].position.lng,
    };
    axios
      .post("https://admin.jiet.app/api/customer/find-store-by-location", user)
      .then(
        (res) =>
          // console.log(JSON.stringify(res.data.data.nearest_store.thumb_url))
          this.setState({
            nearshop: res.data.data.nearest_store,
            aroundshop: res.data.data.around.data.map((x) => (
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="d-flex justify-content-center text-right mt-3 mb-3">
                  <div
                    style={{
                      backgroundImage: `url(${url2 + x.banner_url})`,
                      // backgroundImage: `url(${Shop1})`,

                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "400px",
                      height: "300px",
                      borderRadius: "15px",
                    }}
                    onClick={() => this.setState({ shopdId: x.id })}
                  >
                    <div class="d-flex flex-row-reverse">
                      <div
                        class="p-2 mr-3 bg-white mt-2"
                        style={{ borderRadius: "15px" }}
                      >
                        <a className="text_bannerimg mt-3">{x.name}</a>
                      </div>
                    </div>

                    <img
                      className="mr-3 mt-3"
                      src={url2 + x.thumb_url}
                      style={{ width: "100px", borderRadius: "15px" }}
                    />
                    <br />

                    <div class="d-flex flex-row-reverse mt-3">
                      <div
                        class="p-2 mr-3 bg-white"
                        style={{ borderRadius: "15px" }}
                      >
                        <a className="text_bannerimg mr-1">عنوان:{x.address}</a>
                      </div>
                    </div>
                    <div class="d-flex flex-row-reverse mt-3">
                      <div
                        class="p-2 mr-3 bg-white"
                        style={{ borderRadius: "15px" }}
                      >
                        <a className="text_bannerimg mr-1">
                          الفراغ:{x.distance}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )),
          })
        // console.log(res.data.data.nearest_store)
      )

      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  componentDidMount() {
    const url2 = "https://admin.jiet.app";
    this.getLocation();
    const user = {
      lat: this.state.markers[0].position.lat,
      lng: this.state.markers[0].position.lng,
    };
    axios
      .post("https://admin.jiet.app/api/customer/find-store-by-location", user)
      .then(
        (res) =>
          // console.log(JSON.stringify(res.data.data.nearest_store.thumb_url))
          this.setState({
            nearshop: res.data.data.nearest_store,
            aroundshop: res.data.data.around.data.map((x) => (
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="d-flex justify-content-center text-right mt-3 mb-3">
                  <div
                    style={{
                      backgroundImage: `url(${url2 + x.banner_url})`,
                      // backgroundImage: `url(${Shop1})`,

                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "400px",
                      height: "300px",
                      borderRadius: "15px",
                    }}
                    onClick={() => this.setState({ shopdId: x.id })}
                  >
                    <div class="d-flex flex-row-reverse">
                      <div
                        class="p-2 mr-3 bg-white mt-2"
                        style={{ borderRadius: "15px" }}
                      >
                        <a className="text_bannerimg mt-3">{x.name}</a>
                      </div>
                    </div>

                    <img
                      className="mr-3 mt-3"
                      src={url2 + x.thumb_url}
                      style={{ width: "100px", borderRadius: "15px" }}
                    />
                    <br />

                    <div class="d-flex flex-row-reverse mt-3">
                      <div
                        class="p-2 mr-3 bg-white"
                        style={{ borderRadius: "15px" }}
                      >
                        <a className="text_bannerimg mr-1">عنوان:{x.address}</a>
                      </div>
                    </div>
                    <div class="d-flex flex-row-reverse mt-3">
                      <div
                        class="p-2 mr-3 bg-white"
                        style={{ borderRadius: "15px" }}
                      >
                        <a className="text_bannerimg mr-1">
                          الفراغ:{x.distance}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )),
          })
        // console.log(res.data.data.nearest_store)
      )

      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const location = {
      latitude: this.state.markers[0].position.lat,
      longitude: this.state.markers[0].position.lng,
    };
  };

  handleCustomerClick(id) {
    this.setState({ url: "jamshid" });
    this.props.history.push("/product");
    this.props.Press1(id);
  }
  render() {
    console.log(data);
    console.log(this.state.shopdId);
    const data2 = this.state.filter;
    console.log(data2);
    const url2 = "https://admin.jiet.app";
    return (
      <div>
        <div class="d-flex flex-row-reverse mb-3">
          <div class="p-2 mr-3">
            <a className="text6 text-success mr-3">الرجاء تحديد عنوانك</a>
            <i class="fas fa-map-marker-alt" style={{ color: "green" }}></i>
          </div>
        </div>
        <div style={{ marginBottom: "605px" }}>
          <Map
            google={this.props.google}
            style={{
              width: "100%",
              height: "560px",
            }}
            zoom={14}
            initialCenter={{
              lat: this.state.markers[0].position.lat,
              lng: this.state.markers[0].position.lng,
            }}
          >
            {this.state.markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                draggable={true}
                onDragend={(t, map, coord) =>
                  this.onMarkerDragEnd(coord, index)
                }
                name={marker.name}
              />
            ))}
          </Map>
        </div>
        <br />
        <br />
        <div>
          <div class="d-flex justify-content-center mb-3">
            <div>
              <button onClick={this.location} className="btn5 mt-2">
                <a style={{ cursor: "pointer" }}>تسجيل العنوان</a>
              </button>
            </div>
          </div>
          <div className="bg4">
            <div class="d-flex justify-content-center mt-3 mb-3">
              <div class="text-center">
                <a className="text6 mt-3" style={{ color: "black" }}>
                  المتجر الأقرب إليك
                </a>
              </div>
            </div>
            <div class="d-flex justify-content-center text-right mt-3 mb-3">
              <div
                style={{
                  backgroundImage: `url(${
                    url2 + this.state.nearshop.banner_url
                  })`,
                  // backgroundImage: `url(${Shop2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "400px",
                  height: "300px",
                  borderRadius: "15px",
                }}
                onClick={() =>
                  this.setState({ shopdId: this.state.nearshop.id })
                }
              >
                <div class="d-flex flex-row-reverse mt-3">
                  <div
                    class="p-2 mr-3 bg-white"
                    style={{ borderRadius: "15px" }}
                  >
                    <a className="text_bannerimg mt-3">
                      {this.state.nearshop.name}
                    </a>
                  </div>
                </div>

                <br />

                <div class="d-flex flex-row-reverse mt-3">
                  <div
                    class="p-2 mr-3 bg-white"
                    style={{ borderRadius: "15px" }}
                  >
                    <a className="text_bannerimg mr-1">
                      عنوان:{this.state.nearshop.address}
                    </a>
                  </div>
                </div>

                <div class="d-flex flex-row-reverse mt-3">
                  <div
                    class="p-2 mr-3 bg-white"
                    style={{ borderRadius: "15px" }}
                  >
                    <a className="text_bannerimg mr-1">
                      الفراغ:{this.state.nearshop.distance}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Around shops */}
        <div className="container">
          <div class="d-flex justify-content-center mt-3 mb-3">
            <div class="text-center">
              <a className="text6 mt-3" style={{ color: "black" }}>
                المتاجر من حولك
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button
              onClick={() =>
                this.setState({
                  fruit: "btn6_active",
                  all: "",
                  mobile: "",
                  cookies: "",
                  supermarket: "",
                  filter: data.filter((x) => x.type === "f"),
                })
              }
              className={`btn6 ${this.state.fruit} mt-2 mr-1`}
            >
              <a>خضروات و فواكه</a>
            </button>
            <button
              onClick={() =>
                this.setState({
                  fruit: "",
                  all: "",
                  mobile: "",
                  cookies: "",
                  supermarket: "btn6_active",
                  filter: data.filter((x) => x.type === "s"),
                })
              }
              className={`btn6 ${this.state.supermarket} mt-2 mr-1`}
            >
              <a>سوبر ماركت</a>
            </button>
            <button
              onClick={() =>
                this.setState({
                  fruit: "",
                  all: "",
                  mobile: "",
                  cookies: "btn6_active",
                  supermarket: "",
                  filter: data.filter((x) => x.type === "c"),
                })
              }
              className={`btn6 ${this.state.cookies} mt-2 mr-1`}
            >
              <a>متاجر متخصصه</a>
            </button>

            <button
              onClick={() =>
                this.setState({
                  fruit: "",
                  all: "",
                  mobile: "btn6_active",
                  cookies: "",
                  supermarket: "",
                  filter: data.filter((x) => x.type === "m"),
                })
              }
              className={`btn6 ${this.state.mobile} mt-2 mr-1`}
            >
              <a>خدمات جوال</a>
            </button>
            <button
              onClick={() =>
                this.setState({
                  fruit: "",
                  all: "btn6_active",
                  mobile: "",
                  cookies: "",
                  supermarket: "",
                  filter: data.filter(
                    (x) => x.type === "s" || "f" || "m" || "c"
                  ),
                })
              }
              className={`btn6 ${this.state.all} mt-2 mr-1`}
            >
              <a>الكل</a>
            </button>
          </div>
          <div className="row">
            {this.state.aroundshop}

            {data2.map((x) => (
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  class="d-flex justify-content-center text-right mt-3 mb-3"
                  onClick={() => {
                    this.handleCustomerClick(x.id);
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${x.img1})`,

                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "400px",
                      height: "300px",
                      borderRadius: "15px",
                    }}
                  >
                    <img
                      className="mr-3"
                      src={x.img2}
                      style={{ width: "100px", borderRadius: "15px" }}
                    />
                    <div class="d-flex flex-row-reverse">
                      <div
                        class="p-2 mr-3 bg-white"
                        style={{
                          borderRadius: "15px",
                          marginTop: "80px",
                        }}
                        onClick={() => this.props.history.push("/product")}
                      >
                        <a className="text_bannerimg mt-3">{x.name}</a>
                        <br />
                        <a className="text_bannerimg mr-1">
                          عنوان:{x.address}
                        </a>{" "}
                        <br />
                        <a className="text_bannerimg mr-1">
                          الفراغ:{x.distance}
                        </a>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    text: state.text,
    url: state.url,
  };
};

// const mapDispachToProps = (dispach) => {
//   return {
//     Press1: () => dispach({ type: 1 }),
//     Press2: () => dispach({ type: 2 }),
//   };
// };
function mapDispatchToProps(dispatch) {
  return {
    Press1: (id) => {
      dispatch({ type: id });
    },
  };
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBLNltXFbOpq0dj1QJhw7mJeiLF6gYit2M",
})(connect(mapStateToProps, mapDispatchToProps)(Maps));
