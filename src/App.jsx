import Carousel from "./Components/carousel/index"

function App() {
  const pages1 = [
    { text: 'Page A', url: '/#', backGround: 'bg-blue-400'},
    { text: 'Page B', url: '/#', backGround: 'bg-red-400'},
    { text: 'Page C', url: '/#', backGround: 'bg-green-400'},
    { text: 'Page A', url: '/#', backGround: 'bg-blue-400'},
  ];

  const pages2 = [
    { text: 'Page X', url: '/#', backGround: 'bg-blue-400'},
    { text: 'Page Y', url: '/#', backGround: 'bg-red-400'},
    { text: 'Page Z', url: '/#', backGround: 'bg-green-400'}
  ];

  return (
    <div className="flex flex-col">
      <h1 className="mb-16 flex justify-center">Test</h1>
      
      <h2 className="mt-16 flex justify-center">Beginner</h2>
      <Carousel data={pages1}></Carousel>

      <h2 className="mt-16 flex justify-center">Intermediate</h2>
      <Carousel data={pages2}></Carousel>

      <h2 className="mt-16 flex justify-center">Advanced</h2>
      <Carousel data={pages2}></Carousel>
      <footer className=""></footer>
    </div>
  )
}

export default App
