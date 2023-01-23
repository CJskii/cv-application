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
    };
  }

  render() {
    return <div className="work-container"></div>;
  }
}

export default Work;
