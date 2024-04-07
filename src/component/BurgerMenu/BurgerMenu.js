import React, { useState } from 'react';
import {Link} from "react-router-dom";
import PricingList from "../../templates/PricingList/PricingList"

// Компонент для отображения отдельной ссылки
function LinkBurger({ url, text, onClick }) {
  return (
    <Link to={url} className="font-poppins block px-4 py-3 text-gray-800 hover:bg-gray-200 w-full text-center" onClick={onClick}>
      {text}
    </Link>
  );
}

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { text: "Главная", url: "#" },
    { text: "Сервис", url: "/pricinglist" },
    { text: "Галерея", url: "#" },
    { text: "Ивенты", url: "#" },
  ];

  return (
    <div className="relative desktop:hidden ">
      <button
        onClick={toggleMenu}
        className="text-gray-800 focus:outline-none focus:text-gray-500"
        aria-expanded={isOpen}
      >
        <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
          <div className="relative bg-white w-1/2 h-full opacity-55">
            {/* Закрытие меню при клике на полупрозрачный фон */}
            {links.map((link, index) => (
              <LinkBurger key={index} url={link.url} text={link.text} onClick={toggleMenu} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default BurgerMenu;
