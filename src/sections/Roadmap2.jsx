import { rd1, rd2 } from '../assets/images'; // Import the images

const Roadmap2 = () => {
  return (
    <div id="roadmap" className="w-full h-screen flex flex-col justify-end items-center pb-10 relative">
      <div className="flex w-full justify-center items-end relative">
        <img
          src={rd1}
          alt="Roadmap Image 1"
          className="w-[70%]h-auto animate-slide-in-left absolute bottom-0 left-0"
        />
        <img
          src={rd2}
          alt="Roadmap Image 2"
          className="w-[70%]h-auto animate-slide-in-right absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default Roadmap2;

// import React, { useEffect, useRef, useState } from 'react';
// import { rd1, rd2 } from '../assets/images'; // Import the images

// const Roadmap2 = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const imageRef1 = useRef(null);
//   const imageRef2 = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (imageRef1.current && imageRef2.current) {
//         const rect1 = imageRef1.current.getBoundingClientRect();
//         const rect2 = imageRef2.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         if (rect1.top < windowHeight && rect1.bottom > 0) {
//           setIsVisible(true);
//         }
//         if (rect2.top < windowHeight && rect2.bottom > 0) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check visibility on initial load

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div id="roadmap" className="w-full h-screen flex flex-col justify-end items-center pb-10 relative">
//       <div className="flex w-full justify-center gap-4 items-end relative">
//         <img
//           ref={imageRef1}
//           src={rd1}
//           alt="Roadmap Image 1"
//           className={`w-[70%] h-auto bottom-0 left-0 ${isVisible ? 'animate-slide-in-left bottom-0 left-0 ' : 'opacity-0'}`}
//         />
//         <img
//           ref={imageRef2}
//           src={rd2}
//           alt="Roadmap Image 2"
//           className={`w-[70%] h-auto ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
//         />
//       </div>
//     </div>
//   );
// };

// export default Roadmap2;

