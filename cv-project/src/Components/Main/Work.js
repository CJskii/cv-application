import React, { Component } from "react";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      work1: {
        title: "Senior manager",
        company: "LEO Company",
        location: "Paris - France",
        dates: "JAN 2016 - DEC 2019",
        description: "lorem ipsum",
      },
      work2: {
        title: "Senior manager",
        company: "LEO Company",
        location: "Paris - France",
        dates: "JAN 2016 - DEC 2019",
        description: "lorem ipsum",
      },
      work3: {
        title: "Senior manager",
        company: "LEO Company",
        location: "Paris - France",
        dates: "JAN 2016 - DEC 2019",
        description: "lorem ipsum",
      },
      showButton: false,
    };

    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
  }

  showButton() {
    this.setState({
      showButton: true,
    });
  }

  hideButton() {
    this.setState({
      showButton: false,
    });
  }

  button() {
    return <button className="editBtn btn">EDIT</button>;
  }

  render() {
    return (
      <div
        className="work-container"
        onMouseEnter={this.showButton}
        onMouseLeave={this.hideButton}
      >
        {this.state.showButton && this.button()}
        <div className="work-wrapper">
          <div className="work-header">
            WORK EXPERIENCE
            <div className="work-divider"></div>
          </div>
          <div className="work-content-wrapper">
            <div className="work-content">
              <div className="work-info">
                <div className="work-title">Senior Manager</div>
                <span className="work-span">LEO Company, Paris-France</span>
              </div>
              <span className="work-dates">JAN 2016 - DEC 2019</span>
            </div>
            <div className="work-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex
              official! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ex official!
            </div>
          </div>

          <div className="work-content-wrapper">
            <div className="work-content">
              <div className="work-info">
                <div className="work-title">Senior Manager</div>
                <span className="work-span">LEO Company, Paris-France</span>
              </div>
              <span className="work-dates">JAN 2016 - DEC 2019</span>
            </div>
            <div className="work-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex
              official! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ex official!
            </div>
          </div>

          <div className="work-content-wrapper">
            <div className="work-content">
              <div className="work-info">
                <div className="work-title">Senior Manager</div>
                <span className="work-span">LEO Company, Paris-France</span>
              </div>
              <span className="work-dates">JAN 2016 - DEC 2019</span>
            </div>
            <div className="work-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex
              official! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
