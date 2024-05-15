import Footer from "../../component/Footer/Footer";
import NavbarPanel from "../../component/Navbarpanel/Navbarpanel";
import yacht1 from '../../assets/images/Masonry/yacht-1.jpg';
import yacht2 from '../../assets/images/Masonry/yacht-2.jpg';
import yacht3 from '../../assets/images/Masonry/yacht-3.jpg';
import yacht4 from '../../assets/images/Masonry/yacht-4.jpg';
import yacht5 from '../../assets/images/Masonry/yacht-5.jpg';
import yacht6 from '../../assets/images/Masonry/yacht-6.jpg';
import yacht7 from '../../assets/images/Masonry/yacht-7.jpg';
import yacht8 from '../../assets/images/Masonry/yacht-8.jpg';
// import { useSpring, animated } from 'react-spring';
import bgMasonry from '../../assets/images/Masonry/bg-masonry.jpg';
function Masonry() {


  // const slideInAnimation = useSpring({
  //   from: { opacity: 0, transform: 'translate3d(0, 1000px, 0)' },
  //   to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  //   config: { duration: 1000 }
  // });
  return (
    <>
      <NavbarPanel />
      <div className='absolute top-0 bottom-0 right-0 left-[-2px] h-max' style={{ zIndex: -1 }}>
        <img src={bgMasonry} alt="фон" className="object-cover h-[30rem] w-full"></img>
      </div>
      <section className="mt-[100px]">
        <div className="page flex">
          <div className="m-auto mt-[350px] z-10 text-white font-taviraj">
              <div className="flex flex-wrap justify-center mt-8">
                <div className=" h-64 overflow-hidden rounded-lg shadow-lg m-4 w-full tablet:w-96 desktop:w-80">
                  <img src={yacht1} alt="Yacht 1" className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105" />
                </div>
                <div className=" h-64 overflow-hidden rounded-lg shadow-lg m-4 marker w-full tablet:w-96 desktop:w-80">
                  <img src={yacht2} alt="Yacht 2" className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105" />
                </div>
                <div className=" h-64 overflow-hidden rounded-lg shadow-lg m-4 w-full tablet:w-96 desktop:w-80">
                  <img src={yacht3} alt="Yacht 3" className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105" />
                </div>
                <div className=" h-64 overflow-hidden rounded-lg shadow-lg m-4 w-full tablet:w-96 desktop:w-80">
                  <img src={yacht4} alt="Yacht 1" className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105" />
                </div>
                <div className=" h-64 overflow-hidden rounded-lg shadow-lg m-4 w-full tablet:w-96 desktop:w-80">
                  <img src={yacht5} alt="Yacht 2" className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105" />
                </div>
                <div className=" h-64 overflow-hidden rounded-lg shadow-lg m-4 w-full tablet:w-96 desktop:w-80">
                  <img src={yacht6} alt="Yacht 3" className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105" />
                </div>
    
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Masonry;