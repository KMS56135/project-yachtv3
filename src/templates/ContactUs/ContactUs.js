import NavbarPanel from "../../component/Navbarpanel/Navbarpanel"
import Footer from "../../component/Footer/Footer"
import BgPricingList from '../../assets/images/PricingList/breadcrumbs-bg.jpg';

function ContactUs() {
    return (
        <>
            <NavbarPanel/>
            <div className='absolute top-0 bottom-0 right-0 left-[-2px] h-max'>
                <img src={BgPricingList} className="object-cover object-center h-[600px] w-full"></img>
            </div>
            <div className="page flex">
                <p className="m-auto mt-[350px] z-10 text-mobileTitle
                    tablet:text-tabletTitle desktop:text-desktopTitle text-nowrap text-white font-taviraj">Связаться с нами
                </p>
            </div>
            <section className="mt-[210px] tablet:mt-[190px] desktop:mt-[180px] py-[50px] tablet:py-[80px] tablet:text-left bg-bgServices">
                <div className="page">
                    <div className="bg-white py-[20px] px-[20px]">
                        <div className="text-center">
                            <p className="text-textDescription">
                                Мы доступны 24/7 по факсу, электронной почте или по телефону. Вы также можете использовать наш
                                форма быстрой связи, чтобы задать вопрос о наших яхтах.
                            </p>
                        </div>
                        <form className="mt-[20px] text-left relative tablet:mt-[30px]">
                            <div className="flex flex-wrap w-full">
                                <div className="mb-[20px] relative min-h-[1px] pl-[15px] pr-[15px] w-full tablet:mb-[30px]">
                                    <div className="flex flex-wrap mr-[-15px] ml-[-15px] text-left w-full">
                                        <div className="mb-[20px] relative min-h-[1px] pr-[15px] pl-[15px] flex-grow">
                                            <div className="relative">
                                                <input type="text" name="name" id='contact-fist-name-2' className="block  min-h-[50px]
                                                    pt-[10px] bg-transparent border-solid border-b-[1px] border-slate-400 w-full outline-0" placeholder='First Name'>
                                                </input>
                                                <label for='contact-fist-name-2' className="absolute text-left top-[25px] right-0 left-0
                                                pl-[0px] pr-[0px] text-[14px] z-10"></label> 
                                            </div>
                                        </div>
                                        <div className="mb-[20px] relative min-h-[1px] pr-[15px] pl-[15px] flex-grow">
                                            <div className="relative">
                                                <input type="text" name="name" id='contact-fist-name-2' className="block  min-h-[50px]
                                                    pt-[10px] bg-transparent border-solid border-b-[1px] border-slate-400 w-full outline-0" placeholder='Last Name'>
                                                </input>
                                                <label for='contact-fist-name-2' className="absolute text-left top-[25px] right-0 left-0
                                                pl-[0px] pr-[0px] text-[14px] z-10"></label> 
                                            </div>
                                        </div>
                                        <div className="mb-[20px] relative  min-h-[1px] pr-[15px] pl-[15px] flex-grow">
                                            <div className="relative">
                                                <input type="email" name="email" id='contact-fist-name-2' className="block  min-h-[50px]
                                                    pt-[10px] bg-transparent border-solid border-b-[1px] border-slate-400 w-full outline-0" placeholder='E-mail'>
                                                </input>
                                                <label for='contact-fist-name-2' className="absolute text-left top-[25px] right-0 left-0
                                                pl-[0px] pr-[0px] text-[14px] z-10"></label> 
                                            </div>
                                        </div>
                                        <div className="mb-[20px] relative  min-h-[1px] pr-[15px] pl-[15px] flex-grow">
                                            <div className="relative">
                                                <input type="number" name="phone" id='contact-fist-name-2' className="block  min-h-[50px]
                                                    pt-[10px] bg-transparent border-solid border-b-[1px] border-slate-400 w-full outline-0" placeholder='Phone'>
                                                </input>
                                                <label for='contact-fist-name-2' className="absolute text-left top-[25px] right-0 left-0
                                                pl-[0px] pr-[0px] text-[14px] z-10"></label> 
                                            </div>
                                        </div>
                                    </div>
                                        <div className="w-full min-h-[1px] pr-[15px] pl-[15px] relative">
                                            <div className="relative">
                                                <label for='contact-message-2' className="absolute text-left top-[25px] right-0 left-0 pl-0 pr-0
                                                text-[14px] font-normal leading-[24px]"></label>
                                                <textarea id='contact-message-2' name="phone" required placeholder='Сообщение'
                                                className="h-[150px] max-h-[238px] min-h-[60px] block w-full py-[10px] text-[14px] bg-transparent
                                                border-solid border-b-[1px] border-slate-400 outline-0"></textarea>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <button className="mt-[30px] py-[20px] px-[25px]
                                    inline-block text-[14px] leading-[2px] text-white
                                    font-normal border-solid border-2 tracking-[0.1em] uppercase
                                    whitespace-nowrap text-center cursor-pointer truncate align-middle
                                    transition-[all 250ms ease-in-out]
                                    transition ease-in-out delay-150 bg-blue-300
                                        hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 block" type="submit">Отправить сообщение
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="bg-bgServices bg-cover bg-center py-[50px] tablet:py-[80px]">
                <div className="page">
                    <div className="flex flex-wrap">
                        <div className="w-full min-h-[1px] pr-[15px] pl-[15px] mb-[30px] tablet:text-center tablet:flex-shrink-0 tablet:flex-grow-0 tablet:basis-[33%] tablet:max-w-[33%]">
                            <h4 className="text-[18px] font-taviraj tablet:text-[20px] desktop:text-[22px]">Телефон</h4>
                            <ul className="mt-[12px] text-[15px]">
                                <li>
                                    <a href="tel:+14099875874" className="text-textDescription">+1 (409) 987–5874</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full min-h-[1px] pr-[15px] pl-[15px] mb-[30px] tablet:text-center tablet:flex-shrink-0 tablet:flex-grow-0 tablet:basis-[33%] tablet:max-w-[33%]">
                            <h4 className="text-[18px] font-taviraj tablet:text-[20px] desktop:text-[22px]">Aдресс</h4>
                            <div className="mt-[12px] text-[15px]">
                                <a href="" className="text-textDescription">523 Sylvan Ave, 5th Floor <br/>Mountain View, CA 94041 USA</a>
                            </div>
                        </div>
                        <div className="w-full min-h-[1px] pr-[15px] pl-[15px] mb-[30px] tablet:text-center tablet:flex-shrink-0 tablet:flex-grow-0 tablet:basis-[33%] tablet:max-w-[33%]">
                            <h4 className="text-[18px] font-taviraj tablet:text-[20px] desktop:text-[22px]">Почта</h4>
                            <ul className="mt-[12px] text-[15px]">
                                <li>
                                    <a href="mailto:info@demolink.org" className="text-textDescription">info@demolink.org</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default ContactUs