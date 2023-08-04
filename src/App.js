import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Error from "./components/pages/Error"
import Game from "./components/pages/Game"
import { GamesProvider } from "./hooks/GamesContext";

function App() {
  return (
    <GamesProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={<Error/>}/>
            <Route path="/game/:id" element={<Game />}/>
          </Routes>
    
        <Footer/>     
        </div>
      </Router>
      </GamesProvider>
  );
}

export default App;
