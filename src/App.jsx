import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/homePage";
import Test from "./Components/pages/testPage";
import Test2 from "./Components/pages/testpage2";

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/test2' element={<Test2 />} />
        </Routes>

      </BrowserRouter>

      
    </>
  )
}

export default App
