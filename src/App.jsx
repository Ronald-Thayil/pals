import "bootstrap/dist/css/bootstrap.min.css";

import "./css/animate.css";

import "./css/drift-basic.min.css";
// import "./css/image-compare-viewer.min.css";
import "./css/photoswipe.css";
import "./css/styles.css";
import "./css/swiper-bundle.min.css";
import "./fonts/font-icons.css";
import "./fonts/fonts.css";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
