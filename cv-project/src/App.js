import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cv-wrapper">
        <div className="cv-container"></div>
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

export default App;
