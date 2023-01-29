import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import General from "./Components/General/General";
import Card from "./Components/Card/Card";
import Main from "./Components/Main/Main";
import Animation from "./Components/Particles";
import jsPDF from "jspdf";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showParticles: true,
    };

    this.start = this.startApp.bind(this);
  }
  generatePDF() {
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector(".cv-container"), {
      callback: function (pdf) {
        let pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("myCV.pdf");
      },
    });
  }

  startApp() {
    this.setState({
      showParticles: false,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.showParticles ? (
          <div className="start-container">
            <Animation />
            <div className="welcome-message">
              <h2>Welcome to my personalized CV builder!</h2>
              <span>
                To get started, click on the "Start" button below and then click
                on the "Edit" button on each component. Fill out the form with
                your details to populate your CV.
              </span>
              <span>
                Customize your profile by updating your profile picture, to
                reupload click on the current picture. You can also add custom
                skills by clicking on the "Edit" button in the "Skills" section.
              </span>
              <span>
                Once you have completed your information, you can generate a PDF
                version of your CV by clicking on the "Generate PDF" button.
              </span>

              <span>
                Thank you for using my app, I hope it helps you create a
                professional and impressive CV.
              </span>

              <h4 className="happy">Happy building!</h4>
              <button className="btn jump-button" onClick={this.start}>
                Start
              </button>
            </div>
          </div>
        ) : (
          <>
            <Navbar />
            <div className="cv-wrapper">
              <div className="cv-container">
                <div className="card">
                  <Card className="card" />
                </div>
                <div className="name">
                  <General />
                </div>
                <div className="profile">
                  <Main />
                </div>
              </div>
            </div>
            <button
              className="btn pdfbutton"
              onClick={this.generatePDF}
              type="primary"
            >
              Generate PDF
            </button>
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default App;
