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
    <div className="flex justify-between overflow-hidden">

      <button onClick={handlePrevious} className="z-10 bg-blue-200 py-44 px-16 rounded-r-full">Previous</button>

      <div className="flex w-fit">
        {data.map((item, index) => {
          const distance = index - center;
          console.log(index)
          let transformStyle = `translateX(${distance * 100}%)`;
          return (
            <p
              key={index}
              className={`${item['backGround']} transition-transform duration-700 ease-in-out rounded-lg p-44`}
              style={{ transform: transformStyle }}
            >
              {item['text']}
            </p>
          );
        })}
      </div>

      <button onClick={handleNext} className="z-10 bg-blue-200 px-16 rounded-l-full">Next</button>

    </div>
  );
};

export default Carousel
