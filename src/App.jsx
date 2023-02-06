import "./App.css";
import Hero from "./components/Hero";
import Results from "./components/Results";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer limit={1}/>
      <Hero />
      <Results />
    </>
  );
}

export default App;
