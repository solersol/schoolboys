// import React from 'react';
// import {largeImage} from '../assets/images/'; // Replace with your actual image path
// import {aboutTitle} from '../assets/images/'; // Replace with your actual image path

// const About4 = () => {
//   return (
//     <section className="w-full min-h-screen bg-[#fffdd6] flex flex-col items-center py-20">
//       <img
//         src={largeImage}
//         alt="Large Image"
//         className="w-full max-w-screen-lg mb-8"
//       />
//       <img
//         src={aboutTitle}
//         alt="Small Image"
//         className="w-full max-w-md mb-8"
//       />
//       <div className="w-full max-w-screen-lg px-4">
//         <p className="text-xl mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
//         </p>
//         <p className="text-xl">
//           Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About4;


import React from 'react';
import { largeImage, aboutTitle } from '../assets/images/'; // Replace with your actual image path

const About4 = () => {
  return (
    <section className="w-full min-h-screen bg-[#fffdd6] flex flex-col items-center py-20 mb-16 border-b-4 border-black">
      <img
        src={largeImage}
        alt="Large Image"
        className="w-full max-w-screen-lg mb-8"
      />
      <img
        src={aboutTitle}
        alt="Small Image"
        className="w-full max-w-md mb-8"
      />
      <div className="w-full max-w-screen-lg px-4">
        <p className="text-xl mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
        </p>
        <p className="text-xl">
          Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.
        </p>
      </div>
    </section>
  );
};

export default About4;
