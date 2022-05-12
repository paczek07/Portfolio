import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

// class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate"
// bg-gradient-to-l from-cyan-700 via-blue-400 to-indigo-900
// bg-gradient-to-tl from-black via-neutral-900 to-slate-800 nice

//bg-gradient-to-tl from-transparent via-slate-300 to-sky-900
function App() {
  return (
    <div class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate dark:bg-gradient-to-tl dark:sky-600" >
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
