import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import Services from "./Services";
import Tour from "./Tour";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Services />
      <Tour />
      <Footer />
    </div>
  );
}

export default App;
