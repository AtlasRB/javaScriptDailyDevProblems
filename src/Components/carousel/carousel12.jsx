import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Test from '../pages/testPage';

function Carousel12({ data }) {
  const [center, setCenter] = useState(0);

  const handlePrevious = () => {
    if (center < -(data.length+1)) {
      setCenter(1);
    } else {
      setCenter(center - 1);
    }
  };

  const handleNext = () => {
    if (center === 1) {
      setCenter(-data.length - 2);
    } else {
      setCenter(center + 1);
    }
  };

  console.log(center)

  return (
    <BrowserRouter>

      <div className="flex items-center">
        <button onClick={handlePrevious} className="absolute z-10 bg-blue-200 py-44 px-16 rounded-r-full">Previous</button>

        <div className="flex w-full gap-64">
          {data.map((item, index) => {
            let transformStyle = `translateX(${center * 100}%)`;
            return (
              <Link key={index} to={item.url}>
                <p
                  className={`${item.backGround} transition-transform duration-500 ease-in-out rounded-lg p-44`}
                  style={{ transform: transformStyle }}
                >
                  {item.text}
                </p>
              </Link>
            );
          })}
        </div>

        <button onClick={handleNext} className="absolute  right-0 z-10 bg-blue-200 py-44 px-16 rounded-l-full">Next</button>
      </div>

      <Routes>
        <Route path={data.url} element={data.page} />
      </Routes>
    </BrowserRouter>
  );
};

export default Carousel12;
