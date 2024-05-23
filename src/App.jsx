import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/homePage";
import NotAttempted from "./Components/pages/notAttempted";
import NotFound from "./Components/pages/notFound";
import './App.css';
import Beginner1 from "./Components/solutions/beginner/helloWorldVariations";

function App() {

  return (
    <div className="text-white bg-black min-h-screen">
      <header className="bg-gradient-to-b from-darkblue to-black py-16 mb-8"></header>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notAttempted' element={<NotAttempted />} />
          <Route path='*' element={<NotFound />} />

          <Route path='beginner1' element={<Beginner1 />} />
        </Routes>

      </BrowserRouter> 

      <footer className="bg-gradient-to-t from-darkblue to-black py-16 mt-16 sticky top-[100vh]"></footer>
    </div>
  )
}

export default App
