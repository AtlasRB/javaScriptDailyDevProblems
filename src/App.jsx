import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/homePage";
import Test from "./Components/pages/testPage";
import Test2 from "./Components/pages/testpage2";
import './App.css';

function App() {

  return (
    <div className="text-white bg-black min-h-screen">
      <header className="bg-gradient-to-b from-darkblue to-black py-16 mb-8"></header>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/test2' element={<Test2 />} />
        </Routes>

      </BrowserRouter> 

      <footer className="bg-gradient-to-t from-darkblue to-black py-16 mt-16 sticky top-[100vh]"></footer>
    </div>
  )
}

export default App
