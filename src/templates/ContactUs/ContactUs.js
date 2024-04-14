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
            <section className="mt-[240px] tablet:mt-[220px] desktop:mt-[210px] py-[50px]">
                <div className="page">
                    <div className="text-center">
                        <h3 className="text-[22px] leading-[1.333]">Связаться</h3>
                        <p className="text-textDescription">
                            Мы доступны 24/7 по факсу, электронной почте или по телефону. Вы также можете использовать наш
                            форма быстрой связи, чтобы задать вопрос о наших яхтах.
                        </p>
                    </div>
                    <form className="mt-[20px] text-left relative">
                        <div className="flex flex-wrap w-full">
                            <div className="mb-[20px] relative min-h-[1px] pl-[15px] pr-[15px] w-full">
                                <div className="flex flex-wrap mr-[-15px] ml-[-15px] text-left w-full">
                                    <div className="mb-[20px] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                                        <div className="relative">
                                            <input type="text" name="name" id='contact-fist-name-2' className="block  min-h-[50px]
                                             pt-[10px] bg-transparent border-solid border-b-[1px] border-slate-400 w-full outline-0" placeholder='First Name'>
                                            </input>
                                            <label for='contact-fist-name-2' className="absolute text-left top-[25px] right-0 left-0
                                            pl-[0px] pr-[0px] text-[14px] z-10"></label> 
                                        </div>
                                    </div>
                                    <div className="mb-[20px] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                                        <div className="relative">
                                            <input type="text" name="name" id='contact-fist-name-2' className="block  min-h-[50px]
                                             pt-[10px] bg-transparent border-solid border-b-[1px] border-slate-400 w-full outline-0" placeholder='Last Name'>
                                            </input>
                                            <label for='contact-fist-name-2' className="absolute text-left top-[25px] right-0 left-0
                                            pl-[0px] pr-[0px] text-[14px] z-10"></label> 
                                        </div>
                                    </div>
                                    <div className="mb-[20px] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                                        <div className="relative">
                                            <input type="email" name="email" id='contact-fist-name-2' className="block  min-h-[50px]
                                             pt-[10px] bg-transparent border-solid border-b-[1px] border-slate-400 w-full outline-0" placeholder='E-mail'>
                                            </input>
                                            <label for='contact-fist-name-2' className="absolute text-left top-[25px] right-0 left-0
                                            pl-[0px] pr-[0px] text-[14px] z-10"></label> 
                                        </div>
                                    </div>
                                    <div className="mb-[20px] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                                        <div className="relative">
                                            <input type="number" name="phone" id='contact-fist-name-2' className="block  min-h-[50px]
                                             pt-[10px] bg-transparent border-solid border-b-[1px] border-slate-400 w-full outline-0" placeholder='Phone'>
                                            </input>
                                            <label for='contact-fist-name-2' className="absolute text-left top-[25px] right-0 left-0
                                            pl-[0px] pr-[0px] text-[14px] z-10"></label> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default ContactUs