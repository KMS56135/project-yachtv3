import NavbarPanel from "../../component/Navbarpanel/Navbarpanel"
import Footer from "../../component/Footer/Footer"
import { useSpring, animated } from 'react-spring';

function ContactUs() {
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(-150px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 700 }
  });

  const paragraphAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(-150px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 700, delay: 200 }
  });

  const slideInAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 700, delay: 400 }
  });

  return (
    <>
      <NavbarPanel/>
      <div className='relative top-0 bottom-0 right-0 left-[-2px] h-max '>
        <div className="bg-[url('/src/assets/images/PricingList/bg-yacht.jpg')] h-[670px] animated-bg">
          <div className="absolute top-[30%] left-[30px] w-[90%] tablet:w-[75%]  desktop:w-[55%] desktop:top-[50%]">
            <animated.h2 style={titleAnimation} className="text-[30px] tablet:text-[46px] desktop:text-[50px] text-white font-bold mb-[10px] tracking-wider text-shadow-lg">
              Забронируйте свою яхту сегодня
            </animated.h2>
            <animated.p style={paragraphAnimation} className="text-[18px] tablet:text-[23px] desktop:text-[23px] text-white leading-relaxed text-shadow-md">
              Наша служба поддержки клиентов всегда готова помочь вам в планировании идеального водного приключения. Отправляйтесь в путешествие вашей мечты
            </animated.p>
          </div>
        </div>
      </div>
      <section className="py-[60px]">
        <div className="page">
            <div>
                <div className="flex flex-wrap justify-between gap-[30px]">
                    <div className="w-[90%] tablet:w-[75%]  desktop:w-[55%] desktop:top-[50%] border-b-[1px] pb-[15px] border-blue-gray-400"> 
                        <div className="mb-[20px] text-[13px] text-[#3a6c8c]">СВЯЖИТЕСЬ С НАМИ</div>
                        <h3 className="text-[24px] font-medium mb-[20px] tablet:text-[26px] desktop:text-[30px]">Забронируйте своё морское приключение сегодня</h3>
                        <p className="text-[15px] tablet:text-[19px] desktop:text-[23px] leading-relaxed text-shadow-md">Наша команда поддержки клиентов всегда готова помочь вам с планированием идеального морского приключения.</p>
                    </div>
                    <animated.div className="flex w-full lg:w-max" style={slideInAnimation}>
                        <div className="py-[20px] px-[10px] bg-[#f2f8fd] grow lg:grow-0 rounded-[5px]">
                            <h3 className="text-[24px] font-medium mb-[20px] tablet:text-[26px] desktop:text-[30px]">Отправьте нам сообщение</h3>
                            <form className="flex flex-col flex-wrap justify-center mb-4">
                                <div className="w-full px-3 mb-4 md:mb-0">
                                    <label for="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Ваше имя:</label>
                                    <input type="text" id="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                                </div>
                                <div className="w-full px-3 mb-4 md:mb-0">
                                    <label for="email" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Ваша почта:</label>
                                    <input type="email" id="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                                </div>
                                <div className="w-full px-3 mb-4 xl:mb-0">
                                    <label for="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Ваше сообщение:</label>
                                    <textarea id="message" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" rows="5"></textarea>
                                </div>
                                <button type="submit" className="desktop:mt-[15px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full xl:w-auto">Отправить</button>
                            </form>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ContactUs