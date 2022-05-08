import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

// class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate"
function App() {
  return (
    <div class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate" >
      <Header />
      <Home />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
