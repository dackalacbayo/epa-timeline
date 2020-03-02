import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
//import "react-owl-carousel2/style.css";
import { Grid, Button, GridColumn, Icon } from "semantic-ui-react";
import EventsBackgroundColor from "./../Shared/EventsBackgroundColor";

function eventColor(category) {
  //console.log("rowrow", row)
  if (category.toLowerCase() == "history") {
    return "#a22a2a";
  } else if (category.toLowerCase() == "architecture") {
    return "#609f9f";
  } else if (category.toLowerCase() == "visual arts") {
    return "#D97126";
  } else if (category.toLowerCase() == "film") {
    return "#C5C5C5";
  } else if (category.toLowerCase() == "music") {
    return "#DEA821";
  } else if (category.toLowerCase() == "dance") {
    return "#D78692";
  } else if (category.toLowerCase() == "theater") {
    return "#8457a8";
  } else if (category.toLowerCase() == "broadcast arts") {
    return "#5267ad";
  } else if (category.toLowerCase() == "literature") {
    return "#7e4e35";
  } else {
    return "#696969";
  }
}
class EventSlider2 extends Component {
  render() {
    const options = {
      items: 1,
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
          <div>
            <img src="https://i.ibb.co/M9Lc7RK/period-1-bg.png" alt="The Last of us" />
          </div>
          <div>
            <img src="https://i.ibb.co/CHDHzFh/period-2-bg.png" alt="GTA V" />
          </div>
          <div>
            <img src="https://i.ibb.co/H2WKbsH/period-3-bg.png" alt="Mirror Edge" />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default EventSlider2;

const CatWithImage = props => {
  return (
    <div
      className="container-fluid col-xl-12 h-100 period-container bg-img p-0 h-100"
      style={{
        backgroundImage: "url(https://i.ibb.co/M9Lc7RK/period-1-bg.png)",
        backgroundColor: "#a22a2a",
        backgroundBlendMode: "soft-light"
      }}
    >
      <EventsBackgroundColor category={"history"}>
        <Grid className="m-0 p-3">
          <Grid.Column width={8}>
            <Button className="rounded-0 btn-event-back p-1" content="Scroll Down">
              <Icon name="long arrow alternate left" />
              Back
            </Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <p className="event-slider-period-category text-white text-uppercase text-right ">
              Prehistoric
            </p>
          </Grid.Column>
        </Grid>
        <Grid className="m-0">
          <Grid.Column width={16} className="p-0">
            <img
              className="event-slider-image"
              align="left"
              src="https://dev-epa.info-aid.net/multimedia/photo/6/45/HispanicTraditions_3.jpg"
            />
          </Grid.Column>
        </Grid>
        <Grid className="m-0">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12} className="p-0">
            <div className="mt-5">
              <Icon
                name="square full"
                className="event-slider-category-icon"
                style={{ color: `${eventColor("dance")}` }}
              />{" "}
              <label className="event-slider-category-title text-white">Dance</label>
            </div>
            <p className="event-slider-title-header text-white mt-3">2000 BC</p>
            <div className="col-md-6 mt-5 p-0">
              <hr className="hr-gold" />
            </div>

            <p className="event-slider-category-description text-white pt-5">
              Jade Ling-ling-o, an ornament made from Fengtian jade from Taiwan, comes to Batanes.
              Early Filipinos developed a style of jade carving, exemplified by the ling-ling-o
              found in Uyaw Cave, Palawan (ca 500-300 BCE).
            </p>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid>
      </EventsBackgroundColor>
    </div>
  );
};

const CatDescription = props => {
  return (
    <div
      className="container-fluid col-xl-12 h-100 period-container bg-img p-0 h-100"
      style={{
        backgroundImage: "url(https://i.ibb.co/M9Lc7RK/period-1-bg.png)",
        backgroundColor: "#a22a2a",
        backgroundBlendMode: "soft-light"
      }}
    >
      <EventsBackgroundColor category={"history"}>
        <Grid className="m-0 p-3">
          <Grid.Column width={8}>
            <Button className="rounded-0 btn-event-back p-1" content="Scroll Down">
              <Icon name="long arrow alternate left" />
              Back
            </Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <p className="event-slider-period-category text-white text-uppercase text-right ">
              Prehistoric
            </p>
          </Grid.Column>
        </Grid>
        <Grid className="m-0">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12} className="mt-5 p-0">
            <div className="mt-5">
              <Icon
                name="square full"
                className="event-slider-category-icon"
                style={{ color: `${eventColor("dance")}` }}
              />{" "}
              <label className="event-slider-category-title text-white">Dance</label>
            </div>
            <p className="event-title-header text-white mt-3">2000 BC</p>
            <div className="col-md-6 mt-5 p-0">
              <hr className="hr-gold" />
            </div>

            <p className="event-slider-category-description text-white pt-5">
              Jade Ling-ling-o, an ornament made from Fengtian jade from Taiwan, comes to Batanes.
              Early Filipinos developed a style of jade carving, exemplified by the ling-ling-o
              found in Uyaw Cave, Palawan (ca 500-300 BCE).
            </p>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid>
      </EventsBackgroundColor>
    </div>
  );
};
