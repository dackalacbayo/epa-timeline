import React, { Component } from "react";

function markerColor(category) {
  //console.log("rowrow", row)
  if (category.toLowerCase() == "history") {
    return "#280b0b";
  } else if (category.toLowerCase() == "architecture") {
    return "#132020";
  } else if (category.toLowerCase() == "visual arts") {
    return "#2b1708";
  } else if (category.toLowerCase() == "film") {
    return "#1a1a1a";
  } else if (category.toLowerCase() == "music") {
    return "#2c2207";
  } else if (category.toLowerCase() == "dance") {
    return "#260d11";
  } else if (category.toLowerCase() == "theater") {
    return "#1b1221";
  } else if (category.toLowerCase() == "broadcast arts") {
    return "#101523";
  } else if (category.toLowerCase() == "literature") {
    return "#26160d";
  } else {
    return "#696969";
  }
}

class EventsBackgroundColor extends Component {
  render() {
    var { category } = this.props;
    //console.log("eventscat", this.props);
    var component = markerColor(category);

    return (
      <div
        className="vh-100"
        //style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 0, 0, 0), ${component}` }}
        style={{ background: `linear-gradient(rgb(255,0,0,0), 50%, ${component}` }}
      >
        {this.props.children}
      </div> // component
    );
  }
}
export default EventsBackgroundColor;
//background: linear-gradient(rgb(255,0,0,0), 50%, rgb(107,0,0));
