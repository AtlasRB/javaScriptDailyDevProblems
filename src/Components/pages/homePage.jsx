import Carousel12 from "../carousel/carousel12";
import Carousel6 from "../carousel/carousel6";

function Home() {
  const pages1 = [
    { text: 'Page A', url: '/test', backGround: 'bg-blue-400'},
    { text: 'Page B', url: '/test2', backGround: 'bg-red-400'},
    { text: 'Page C', url: '/test', backGround: 'bg-green-400'},
    { text: 'Page X', url: '/test', backGround: 'bg-blue-400'},
    { text: 'Page Y', url: '/test', backGround: 'bg-red-400'},
    { text: 'Page Z', url: '/test', backGround: 'bg-green-400'},
    { text: 'Page 1', url: '/test', backGround: 'bg-blue-400'},
    { text: 'Page 2', url: '/test', backGround: 'bg-red-400'},
    { text: 'Page 3', url: '/test', backGround: 'bg-green-400'},
    { text: 'Page 4', url: '/test', backGround: 'bg-blue-400'},
    { text: 'Page 5', url: '/test', backGround: 'bg-red-400'},
    { text: 'Page 6', url: '/test', backGround: 'bg-green-400'}
  ];

  const pages2 = [
    { text: 'Page A', url: '/test', backGround: 'bg-blue-400'},
    { text: 'Page B', url: '/test', backGround: 'bg-red-400'},
    { text: 'Page C', url: '/test', backGround: 'bg-green-400'},
    { text: 'Page X', url: '/test', backGround: 'bg-blue-400'},
    { text: 'Page Y', url: '/test', backGround: 'bg-red-400'},
    { text: 'Page Z', url: '/test', backGround: 'bg-green-400'}
  ];

  return (
    <div className="flex flex-col font-mono">
      <h1 className="text-center lg:text-7xl text-4xl">JavaScript Daily.Dev Problems</h1>   
      
      <div>
        <div className="my-32">
          <h2 className="mt-16 flex justify-center lg:text-6xl lg:mb-8 text-4xl mb-16">Beginner</h2>
          <Carousel12 data={pages1}></Carousel12>
        </div>

        <div className="my-32">
          <h2 className="mt-16 flex justify-center lg:text-6xl lg:mb-8 text-4xl mb-16">Intermediate</h2>
          <Carousel6 data={pages2}></Carousel6>
        </div>

        <div className="my-32">
          <h2 className="mt-16 flex justify-center lg:text-6xl lg:mb-8 text-4xl mb-16">Advanced</h2>
          <Carousel6 data={pages2}></Carousel6>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
