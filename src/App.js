import React from 'react';
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
import {useStateValue} from "./StateContext";


function App() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div>
        {user ? (
          <div>
            <Navbar />
            <Carousel />
            <MovieSection />
            <Footer />
          </div>
        ) : <LoginPage />}
    </div>
  )
}

export default App


