import "./App.css";
import Hero from "./components/Hero";
import Results from "./components/Results";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="main">
      <ToastContainer limit={1}/>
      <Navbar />
      <Hero />
      <Results />
      <About />
    </div>
  );
}

export default App;
