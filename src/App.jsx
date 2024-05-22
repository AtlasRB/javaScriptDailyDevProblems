import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/homePage";
import Test from "./Components/pages/notAttempted";
import NotFound from "./Components/pages/notFound";
import './App.css';

function App() {

  return (
    <div className="text-white bg-black min-h-screen">
      <header className="bg-gradient-to-b from-darkblue to-black py-16 mb-8"></header>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notAttempted' element={<Test />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </BrowserRouter> 

      <footer className="bg-gradient-to-t from-darkblue to-black py-16 mt-16 sticky top-[100vh]"></footer>
    </div>
  )
}

export default App
