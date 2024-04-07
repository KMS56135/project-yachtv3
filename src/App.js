import NavbarPanel from './component/Navbarpanel/Navbarpanel';
import Swiper from './component/Swiper/Swiper';
import Offers from './component/Offers/Offers';
import Services from './component/Services/Services'
import Paralax from './component/Paralax/Paralax';
import slide1 from './assets/images/Swiper/slide-1.jpg'
import slide2 from './assets/images/Swiper/slide-2.jpg'
import './App.css';
import React from 'react'
import Advantages from './component/Advantages/Advantages';
import Footer from './component/Footer/Footer';

function App() {
  const items = [
    <div className="swiper__slide-content">
      <img className='swiper__slide-img' src={slide2} alt="First" />
      <div className="swiper__slide-desc">
        <h1 className='swiper__slide-title desktop:text-[90px]
         tablet:text-[70px] text-[50px] font-light'>The Best Yachts</h1>
        <p className="swiper__slide-text">Nautilus — место для тех, кто ищет первоклассный чартер яхт.</p>
      </div>
    </div>,
    <div className="swiper__slide-content">
      <img className='swiper__slide-img' src={slide1} alt="Second" />
      <div className="swiper__slide-desc desktop:text-[90px]
         tablet:text-[70px] text-[50px] font-light">
        <h1 className='swiper__slide-title'>Inspirational Routes</h1>
        <p className='swiper__slide-text'>Наши чартеры и направления могут удовлетворить даже самых требовательных клиентов.</p>
      </div>
    </div>
  ];

  return (
    <>
        <NavbarPanel/>
        <Swiper items={items}/>
        <Offers/>
        <Services/>
        <Paralax/>
        <Advantages/>
        <Footer/>
    </>
  );
}


export default App;
