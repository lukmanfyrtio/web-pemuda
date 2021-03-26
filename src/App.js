import "./App.css";
import Header from "./component/pages/Header";
import Footer from "./component/pages/Footer";
import Content from "./component/pages/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
