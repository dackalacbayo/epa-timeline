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
        </OwlCarousel>
      </div>
    );
  }
}

export default PeriodSlider;
