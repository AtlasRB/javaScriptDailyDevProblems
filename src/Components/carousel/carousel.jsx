import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

function Carousel({ data, title }) {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      // Mouse wheel event handler
      const handleWheel = (event) => {
        event.preventDefault();
        element.scrollBy({
          left: event.deltaY < 0 ? -140 : 140,
        });
      };

      // Add event listeners
      element.addEventListener('wheel', handleWheel);

      // Cleanup event listeners on component unmount
      return () => {
        element.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);


  return (
    <div>
      <div className="flex justify-center place-items-center mb-16 lg:gap-32 gap-4">
        <button onClick={() => scroll(-250)} className="z-10 bg-darkblue rounded-full text-6xl lg:p-8 p-2">&lt;</button>
        <h2 className="lg:text-6xl text-3xl">{title}</h2>
        <button onClick={() => scroll(250)} className="z-10 bg-darkblue rounded-full text-6xl lg:p-8 p-2">&gt;</button>
      </div>

      <div className="flex items-center bg-gradient-to-b from-black via-darkblue to-black mb-32 overflow-hidden" ref={scrollRef}>  
        <div className="flex lg:gap-64 gap-16 lg:mx-64 mx-16">
          {data.map((item, index) => {
            return (
              <Link key={index} to={item.url}
              className={`${item.backGround} hover:${item.backGroundHover} duration-500 ease-in-out rounded-lg flex justify-center items-center text-center font-mono lg:size-96 lg:text-5xl size-48 text-md`}>
                  {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
