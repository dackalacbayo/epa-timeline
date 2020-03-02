import React, { Component } from "react";
import { Grid, Button, GridColumn, Icon } from "semantic-ui-react";
import PeriodSlider from "./PeriodSlider";
import EventsCategoryIndicator from "./../Shared/EventsCategoryIndicator";
import { FixedSizeList as List } from "react-window";
import { Link } from "react-router-dom";
const sampleData = require("./data/sampleData.json");

// const itemsArray = [
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" }
// ]; // our data
// const Row = ({ index, style }) => <div style={style}>{itemsArray[index].name}</div>;
// // const Example = () => <div className="List">{itemsArray.map((item, index) => Row({ index }))}</div>;
// const Example = () => (
//   <List className="List" height={500} itemCount={itemsArray.length} itemSize={35} width={500}>
//     {Row}
//   </List>
// );

class Timeline extends Component {
  componentWillMount = () => {
    this.setState({
      data: sampleData
    });
  };
  render() {
    console.log("states", this.state);
    return (
      <div>
        <PeriodCover {...this.state} />
        {/* <Example /> */}
      </div>
    );
  }
}

export default Timeline;

const PeriodCover = props => {
  console.log("PeriodCover", props);
  const { data } = props;
  return (
    <div>
      {data.map(item => {
        return (
          <div
            className="container-fluid col-xl-12 h-100 period-container bg-img p-0"
            style={{
              backgroundImage: `url('${item.period_bg_image}')`,
              backgroundColor: `${item.period_bg_color}`,
              backgroundBlendMode: "soft-light"
            }}
          >
            <div className="bg-dark-gradient">
              <Grid className="m-0">
                <Grid.Column width={16} className="p-5 text-center">
                  <div className="col-12">
                    <p className="text-white text-uppercase small-2 font-sans-serif-Roboto font-weight-bold period-header">
                      Digital Timeline
                    </p>
                    {/* <div>
                      <Link to="/event2" params={{ testvalue: "hello" }}>
                        Click here to go back to home page
                      </Link>
                    </div> */}
                  </div>
                  <div className="padding-top-3">
                    <p className="text-white font-sans-serif-Fjalla large-5 period-title-header py-05">
                      {item.period}
                    </p>
                    <p className="text-white font-sans-serif-Fjalla large-5 period-title-header opacity-normal">
                      {item.start_year}-{item.end_year}
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column width={16}>
                  <div className="row">
                    <div className="col-md-7 p-0">
                      <img src={item.period_image} className="period-image"></img>
                    </div>
                    <div className="col-md-5 pr-0 text-left">
                      <Button
                        className="rounded-0 btn-period p-1"
                        content="See Events"
                        icon="right arrow"
                        labelPosition="right"
                      />
                      <div>
                        <p className="text-white font-sans-serif-Fjalla period-title mt-3 mr-5">
                          {item.period_title}
                        </p>
                        <div className="row mr-0">
                          <div className="col-md-12">
                            <p className="text-white period-description pr-5">
                              {item.period_description}
                            </p>
                            <div className="position-relative">
                              <Button
                                className="rounded-0 btn-period-scroll p-1"
                                content="Scroll Down"
                              >
                                <Icon name="long arrow alternate left" />
                                Scroll Down
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column width={16} className="period_slider">
                  <PeriodSlider {...props} />
                </Grid.Column>
              </Grid>
            </div>

            <Grid className="m-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.80)" }}>
              <Grid.Column width={2} className="p-5"></Grid.Column>
              <Grid.Column width={14} className="pt-5 pb-5">
                <Events eventList={item.list} />
              </Grid.Column>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

const Events = props => {
  console.log("eventsprops", props);
  return (
    <div>
      {props.eventList.map(item => {
        return (
          <div>
            <Link className="link-event" to={`event/${item.timeline_id}`}>
              <Grid className="m-0">
                <Grid.Column width={8} className="p-0">
                  <div className="pr-5">
                    <div className="padding-05 pb-5">
                      <p className="event-title-header text-right text-white">
                        {item.display_name == " " || item.display_name == null
                          ? item.start_year
                          : item.display_name}
                      </p>
                      <p className="event-description text-right text-white">
                        {item.text_description}
                      </p>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column width={8} className="p-0 event-desc-container">
                  <div>
                    <EventsCategoryIndicator category={item.category} />

                    <img className="event-image pr-5 pl-5 pb-5" align="left" src={item.media_url} />
                  </div>
                </Grid.Column>
              </Grid>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
