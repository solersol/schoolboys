import React from 'react';
import { findTitle, img1, img2, cardImage1, cardImage2, bottomLinks } from '../assets/images'; // Replace with your actual image paths

const Links = () => {
  const cards = [
    { title: "PUMPFUN", text: "BUY NOW", link: "https://example.com", image: {img2} },
    { title: "TELEGRAM", text: "Join Now", link: "https://example.com", image: {cardImage1} },
    { title: "X", text: "Join Now", link: "https://example.com", image: {img1} },
    { title: "DEXSCREENER", text: "BUY NOW", link: "https://example.com", image: {cardImage2} }
  ];

  return (
    <section className="w-full min-h-screen bg-[#fffdd6] flex flex-col items-center py-20 mb-16 border-b-4 border-black">
      <img
        src={findTitle}
        alt="Small Image"
        className="w-full max-w-screen-lg mb-8"
      />
      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {cards.map((card, index) => (
          <a 
            href={card.link} 
            key={index} 
            className="block bg-white border border-black rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
      <img
        src={bottomLinks}
        alt="Bottom Image"
        className="w-full max-w-screen-lg mt-8"
      />
    </section>
  );
};

export default Links;
