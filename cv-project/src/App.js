import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import General from "./Components/General/General";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="cv-wrapper">
          <div className="cv-container">
            <div className="card">
              {/* Image, Contact, Education, References */}
            </div>
            <div className="name">
              {/* Name, title */}
              <General />
            </div>
            <div className="profile">
              {/* Description, Work experience, skills */}
            </div>
          </div>
        </div>
        {/* Navbar
        General - name, email, github, twitter
        Education - school, title of study, date of study
        Experience - company name, position, title, main tasks, date from and until 
        Skills*/}
        <Footer />
      </div>
    );
  }
}

export default App;
