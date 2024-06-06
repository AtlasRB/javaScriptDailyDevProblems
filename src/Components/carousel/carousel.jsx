import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

function Carousel({ data }) {
  const scrollRef = useRef(null);

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

      // Touch event handlers
      const handleTouchStart = (event) => {
        startX = event.touches[0].pageX;
      };
      const handleTouchMove = (event) => {
        event.preventDefault();
        const deltaX = event.touches[0].pageX - startX;
        startX = event.touches[0].pageX;
        element.scrollBy({
          left: -deltaX,
        });
      };

      // Add event listeners
      element.addEventListener('wheel', handleWheel);
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);

      // Cleanup event listeners on component unmount
      return () => {
        element.removeEventListener('wheel', handleWheel);
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);


  return (
    <div className="flex items-center bg-gradient-to-b from-black via-darkblue to-black mb-32 overflow-hidden" ref={scrollRef}>
      <div className="flex lg:gap-64 gap-16 lg:mx-64 mx-16 ">
        {data.map((item, index) => {
          return (
            <Link key={index} to={item.url}
            className={`${item.backGround} hover:${item.backGroundHover} duration-500 ease-in-out rounded-lg flex justify-center items-center text-center font-mono lg:size-96 lg:text-5xl size-32 text-md`}>
                {item.text}
            </Link>
          );
        })}
      </div>
    </div>

  );
};

export default Carousel;
