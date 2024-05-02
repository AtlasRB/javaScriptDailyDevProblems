import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Carousel({ data }) {
  const [center, setCenter] = useState(0);

  const handlePrevious = () => {
    const newCenter = center - 1 < 0 ? data.length - 1 : center - 1;
    setCenter(newCenter);
  };

  const handleNext = () => {
    const newCenter = (center + 1) % data.length;
    setCenter(newCenter);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-between gap-16">

        <button onClick={handlePrevious} className="bg-blue-200 px-16 z-10 rounded-r-lg">Previous</button>

        <div className="flex items-center gap-8">
          {data.map((item, index) => {
            const distance = index - center;
            let transformStyle = `translateX(${distance * 50}%)`;
            return (
              <p
                key={index}
                className={`${item['backGround']}400 p-48 transition-transform duration-700 ease-in-out rounded-lg`}
                style={{ transform: transformStyle }}
              >
                {item['text']}
              </p>
            );
          })}
        </div>

        <button onClick={handleNext} className="bg-blue-200 px-16 z-10 rounded-l-lg">Next</button>

      </div>
    </div>
  );
};

export default Carousel




import Carousel from "./Components/carousel/index"

function App() {
  const pages1 = [
    { text: 'Page A', url: '/#', backGround: 'bg-blue-'},
    { text: 'Page B', url: '/#', backGround: 'bg-red-'},
    { text: 'Page C', url: '/#', backGround: 'bg-green-'}
  ];

  const pages2 = [
    { text: 'Page X', url: '/#', backGround: 'bg-blue-'},
    { text: 'Page Y', url: '/#', backGround: 'bg-red-'},
    { text: 'Page Z', url: '/#', backGround: 'bg-green-'}
  ];

  return (
    <div className="flex flex-col items-center gap-16 bg-slate-900">
      <h1 className="bg-slate-100">Test</h1>
      <Carousel data={pages1}></Carousel>
      <Carousel data={pages2}></Carousel>
      <Carousel data={pages2}></Carousel>
      <footer className="h-16"></footer>
    </div>
  )
}

export default App
