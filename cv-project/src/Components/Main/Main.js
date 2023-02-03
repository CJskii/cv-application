import React, { useState } from "react";
import Profile from "./Profile";
import Work from "./Work";
import Skills from "./Skills";
import "./Main.css";

const Main = () => {
  const [workCount, setWorkCount] = useState(3);

  const workCountUp = () => {
    setWorkCount(workCount + 1);
  };

  const workCountDown = () => {
    setWorkCount(workCount - 1);
  };

  return (
    <div className="main-wrapper">
      <Profile />
      <Work
        workCountUp={workCountUp}
        workCountDown={workCountDown}
        workCount={workCount}
      />
      <Skills
        skillCountUp={workCountUp}
        skillCountDown={workCountDown}
        workCount={workCount}
      />
    </div>
  );
};

// class Main extends Component {
//   constructor() {
//     super();

//     this.state = {
//       workCount: 3,
//     };

//     this.workCountUp = this.workCountUp.bind(this);
//     this.workCountDown = this.workCountDown.bind(this);
//     this.workCount = this.state.workCount;
//     this.skillCount = this.state.skillCount;
//   }

//   workCountUp() {
//     this.setState({
//       workCount: this.state.workCount + 1,
//     });
//   }

//   workCountDown() {
//     this.setState({
//       workCount: this.state.workCount - 1,
//     });
//   }

//   render() {
//     return (
//       <div className="main-wrapper">
//         <Profile />
//         <Work
//           workCountUp={this.workCountUp}
//           workCountDown={this.workCountDown}
//           workCount={this.state.workCount}
//         />
//         <Skills
//           skillCountUp={this.skillCountUp}
//           skillCountDown={this.skillCountDown}
//           workCount={this.state.workCount}
//           skillCount={this.skillCount}
//         />
//       </div>
//     );
//   }
// }

export default Main;
