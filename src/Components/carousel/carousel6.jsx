import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Carousel6({ data }) {
  const [center, setCenter] = useState(1);

  const handleNext = () => {
    if (center < -(data.length-3)) {
      setCenter(1);
    } else {
      setCenter(center - 1);
    }
  };

  const handlePrevious = () => {
    if (center === 1) {
      setCenter(-data.length + 2);
    } else {
      setCenter(center + 1);
    }
  };

  return (
    <div className="flex items-center bg-gradient-to-b from-black via-darkblue to-black overflow-hidden">
      <button onClick={handlePrevious} className="absolute z-10 bg-darkblue py-40 px-8 rounded-r-full text-9xl">&lt;</button>

      <div className="flex gap-64">
        {data.map((item, index) => {
          let transformStyle = `translateX(${center * 100}%)`;
          return (
            <Link key={index} to={item.url} 
            className={`${item.backGround} duration-500 ease-in-out rounded-lg size-96 font-mono text-5xl flex justify-center items-center`}
            style={{ transform: transformStyle}}>
                {item.text}
            </Link>
          );
        })}
      </div>

      <button onClick={handleNext} className="absolute right-0 z-10 bg-darkblue py-40 px-8 rounded-l-full text-9xl">&gt;</button>
    </div>
  );
};

export default Carousel6;
