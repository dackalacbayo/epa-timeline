import React, { Component } from "react";
import { Grid, Button, GridColumn, Icon } from "semantic-ui-react";
import PeriodSlider from "./PeriodSlider";
const sampleData = require("./data/sampleData.json");

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
                <Grid.Column width={16} className="p-5">
                  <div className="col-12">
                    <p className="text-white text-uppercase small-2 font-sans-serif-Roboto font-weight-bold period-header">
                      Digital Timeline
                    </p>
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
                        <p className="text-white font-sans-serif-Fjalla period-title mt-3">
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
                <Grid.Column width={16} className="">
                  <PeriodSlider {...props} />
                </Grid.Column>
              </Grid>
            </div>

            <Grid className="m-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.80)" }}>
              <Grid.Column width={2} className="p-5"></Grid.Column>
              <Grid.Column width={14} className="p-5">
                <Events />
              </Grid.Column>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

const Events = props => {
  return (
    <div>
      <Grid className="m-0">
        <Grid.Column width={8} className="p-5">
          <div className="event-desc-container">
            <div class="event-marker" style={{ backgroundColor: "red" }}></div>
            <div className="padding-05 pb-5">
              <p className="event-title-header text-white">1521</p>
              <p className="event-description text-white">
                In Cebu, Magellan and Rajah Humabon make a blood compact.
              </p>
            </div>
          </div>
          <div className="event-desc-container">
            <div class="event-marker" style={{ backgroundColor: "blue" }}></div>
            <div className="padding-05 pb-5">
              <p className="event-title-header text-white">1521</p>
              <p className="event-description text-white">
                In Cebu, Magellan and Rajah Humabon make a blood compact.
              </p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={8} className="p-5">
          samp
        </Grid.Column>
      </Grid>
    </div>
  );
};
