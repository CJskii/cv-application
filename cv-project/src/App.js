import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import General from "./Components/General/General";
import Card from "./Components/Card/Card";
import Main from "./Components/Main/Main";
import jsPDF from "jspdf";
import React, { Component } from "react";

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="cv-wrapper">
          <div className="cv-container">
            <div className="card">
              {/* Image, Contact, Education, References */}
              <Card className="card" />
            </div>
            <div className="name">
              {/* Name, title */}
              <General />
            </div>
            <div className="profile">
              {/* Description, Work experience, skills */}
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
