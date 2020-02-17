import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
//import "react-owl-carousel2/style.css";

class PeriodSlider extends Component {
  render() {
    const options = {
      items: 5,
      //   nav: true,
      rewind: true
      //   autoplay: true
    };

    // const events = {
    //     onDragged: function(event) {...},
    //     onChanged: function(event) {...}
    // };
    console.log("propsPeriodSlider", this.props);
    return (
      <div>
        <OwlCarousel loop margin={10} nav options={options}>
          {this.props.data.map(item => {
            return (
              <div className="p-3">
                <div
                  className="position-relative"
                  style={{
                    backgroundColor: `${item.period_bg_color}`
                  }}
                >
                  <img className="period-slider-img" src={item.period_bg_image} />
                  <div className="center-div period-slider-title bg-black-light text-white">
                    {item.period_slider_display_name}
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="p-3">
            <div
              className="position-relative"
              style={{
                backgroundColor: "#666666"
              }}
            >
              <img className="period-slider-img" src="https://i.ibb.co/M9Lc7RK/period-1-bg.png" />
              <div className="center-div period-slider-title bg-black-light text-white">
                Prehistoric
              </div>
            </div>
          </div>
          <div className="p-3">
            <div
              className="position-relative"
              style={{
                backgroundColor: "#775835"
              }}
            >
              <img className="period-slider-img" src="https://i.ibb.co/CHDHzFh/period-2-bg.png" />
              <div className="center-div period-slider-title bg-black-light text-white">
                Archaic
              </div>
            </div>
          </div>
          <div className="p-3">
            <div
              className="position-relative"
              style={{
                backgroundColor: "#AB9835"
              }}
            >
              <img className="period-slider-img" src="https://i.ibb.co/H2WKbsH/period-3-bg.png" />
              <div className="center-div period-slider-title bg-black-light text-white">
                Spanish
              </div>
            </div>
          </div>
          <div className="p-3">
            <div
              className="position-relative"
              style={{
                backgroundColor: "#172B48"
              }}
            >
              <img className="period-slider-img" src="https://i.ibb.co/jWRw6yN/period-4-bg.png" />
              <div className="center-div period-slider-title bg-black-light text-white">
                American
              </div>
            </div>
          </div>
          <div className="p-3">
            <div
              className="position-relative"
              style={{
                backgroundColor: "#352B42"
              }}
            >
              <img className="period-slider-img" src="https://i.ibb.co/rHd8ZkV/period-5-bg.png" />
              <div className="center-div period-slider-title bg-black-light text-white">
                Third Republic
              </div>
            </div>
          </div>
          <div className="p-3">
            <div
              className="position-relative"
              style={{
                backgroundColor: "#95282F"
              }}
            >
              <img className="period-slider-img" src="https://i.ibb.co/cCzYbDm/period-6-bg.png" />
              <div className="center-div period-slider-title bg-black-light text-white">
                Fourth Republic
              </div>
            </div>
          </div>
          <div className="p-3">
            <div
              className="position-relative"
              style={{
                backgroundColor: "#C5C5C5"
              }}
            >
              <img className="period-slider-img" src="https://i.ibb.co/Ptvxtxs/period-7-bg.png" />
              <div className="center-div period-slider-title bg-black-light text-white">
                Fifth Republic
              </div>
            </div>
          </div> */}
        </OwlCarousel>
      </div>
    );
  }
}

export default PeriodSlider;
