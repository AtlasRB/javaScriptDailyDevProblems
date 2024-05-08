import Carousel12 from "./Components/carousel/carousel12";
import Carousel6 from "./Components/carousel/carousel6";
import Test from "./Components/pages/testPage";

function App() {
  const pages1 = [
    { text: 'Page A', url: '/hello', backGround: 'bg-blue-400'},
    { text: 'Page B', url: '/12', backGround: 'bg-red-400'},
    { text: 'Page C', url: '/32', backGround: 'bg-green-400'},
    { text: 'Page X', url: '/23', backGround: 'bg-blue-400'},
    { text: 'Page Y', url: '/21', backGround: 'bg-red-400'},
    { text: 'Page Z', url: '/423', backGround: 'bg-green-400'},
    { text: 'Page 1', url: '/hello', backGround: 'bg-blue-400'},
    { text: 'Page 2', url: '/12', backGround: 'bg-red-400'},
    { text: 'Page 3', url: '/32', backGround: 'bg-green-400'},
    { text: 'Page 4', url: '/23', backGround: 'bg-blue-400'},
    { text: 'Page 5', url: '/21', backGround: 'bg-red-400'},
    { text: 'Page 6', url: '/423', backGround: 'bg-green-400'}
  ];

  const pages2 = [
    { text: 'Page A', url: '/hello', backGround: 'bg-blue-400'},
    { text: 'Page B', url: '/12', backGround: 'bg-red-400'},
    { text: 'Page C', url: '/32', backGround: 'bg-green-400'},
    { text: 'Page X', url: '/23', backGround: 'bg-blue-400'},
    { text: 'Page Y', url: '/21', backGround: 'bg-red-400'},
    { text: 'Page Z', url: '/423', backGround: 'bg-green-400'}
  ];

  return (
    <div className="flex flex-col">
      <h1 className="mb-16 flex justify-center">Test</h1>
      
      <h2 className="mt-16 flex justify-center">Beginner</h2>
      <Carousel12 data={pages1}></Carousel12>

      <h2 className="mt-16 flex justify-center">Intermediate</h2>
      <Carousel6 data={pages2}></Carousel6>

      <h2 className="mt-16 flex justify-center">Advanced</h2>
      <Carousel6 data={pages2}></Carousel6>

      <a href={<Test />}>Testing</a>

      <footer className=""></footer>
    </div>
  )
}

export default App;
