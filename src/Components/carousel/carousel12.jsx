import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Carousel12({ data }) {
  const [center, setCenter] = useState(1);

  const handleNext = () => {
    if (center < -(data.length+1)) {
      setCenter(1);
    } else {
      setCenter(center - 1);
    }
  };

  const handlePrevious = () => {
    if (center === 1) {
      setCenter(-data.length - 2);
    } else {
      setCenter(center + 1);
    }
  };

  return (
    <div className="flex items-center bg-gradient-to-b from-black via-darkblue to-black overflow-hidden">
      <button onClick={handlePrevious} className="absolute z-10 bg-darkblue rounded-r-full lg:py-40 lg:px-8 lg:text-9xl py-24 px-4 text-6xl">&lt;</button>

      <div className="flex lg:gap-64 gap-16">
        {data.map((item, index) => {
          let transformStyle = `translateX(${center * 100}%)`;
          return (
            <Link key={index} to={item.url} 
            className={`${item.backGround} duration-500 ease-in-out rounded-lg flex justify-center items-center font-mono lg:size-96 lg:text-6xl size-32 text-2xl`}
            style={{ transform: transformStyle}}>
                {item.text}
            </Link>
          );
        })}
      </div>

      <button onClick={handleNext} className="absolute right-0 z-10 bg-darkblue rounded-l-full lg:py-40 lg:px-8 lg:text-9xl py-24 px-4 text-6xl">&gt;</button>
    </div>
  );
};

export default Carousel12;
