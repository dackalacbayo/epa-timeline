import React, { Component } from "react";

function markerColor(category) {
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

class EventsCategoryIndicator extends Component {
  render() {
    var { category } = this.props;
    //console.log("eventscat", this.props);
    var component = markerColor(category);

    return (
      <div class="event-marker" style={{ backgroundColor: `${component}` }}></div> // component
    );
  }
}
export default EventsCategoryIndicator;
