import NavbarPanel from "../../component/Navbarpanel/Navbarpanel";
import BgPricingList from '../../assets/images/PricingList/breadcrumbs-bg.jpg';
import pricing1 from '../../assets/images/PricingList/pricing-1-346x229.jpg';
import pricing2 from '../../assets/images/PricingList/pricing-2-346x229.jpg';
import pricing3 from '../../assets/images/PricingList/pricing-3-346x229.jpg';
import Footer from '../../component/Footer/Footer';
// import BgHeader from "../../component/BgHeader/BgHeader";
function PricingList() {
    return (
        <>
            <NavbarPanel/>
            <div className='absolute top-0 bottom-0 right-0 left-[-2px] h-max'>
                <img src={BgPricingList} className="object-cover object-center h-[600px] w-full"></img>
                </div>
                <div className="page flex">
                <p className="m-auto mt-[350px] z-10 text-mobileTitle
                    tablet:text-tabletTitle desktop:text-desktopTitle text-nowrap text-white font-taviraj">Прайс-лист
                </p>
            </div>
            <section className="mt-[240px] tablet:mt-[220px] desktop:mt-[210px] py-[50px]">
                <div className="page">
                    <div>
                        <h2 className="text-[22px] tablet:text-[29px] desktop:text-[32px] text-center mb-[14px]">Наши тарифные планы</h2>
                        <p className="max-w-[600px] mr-auto ml-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor Tur adipiscing elit, sed do. semantic;users, seamless beta-test</p>
                    </div>
                    <div className="mt-[30px] tablet:mt-[40px] flex flex-wrap items-center gap-y-[30px]">
                        <div className="max-w-[346px] ml-auto mr-auto rounded-[6px] shadow-[3px_6px_6px_0_rgba(0,0,0,0.11)] bg-bgServices">
                            <div className="relative">
                                <img className="rounded-t-[6px]" src={pricing1}></img>
                                <div className="flex items-center justify-center absolute inset-0 p-[15px]">
                                    <div>
                                        <h3 className="font-medium text-white tablet:text-[26px] desktop:text-[30px]">Express</h3>
                                        <div className="flex items-center justify-center ">
                                            <p className="font-normal text-white text-[18px] tablet:text-[20px] desktop:text-[26px]">$190.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-[30px] px-[15px] relative
                                before:content-[''] before:absolute
                                before:bottom-[100%] before:left-[50%]
                                before:w-[0] before:h-[0]
                                before:border-solid
                                before:border-t-[0] before:border-r-[11.5px] before:border-b-[11px]
                                before:border-l-[11.5px]
                                before:border-t-transparent before:border-r-transparent
                                before:border-b-white before:border-l-transparent before:translate-x-[-50%] before:translate-y-[0%]
                                text-center">
                                <ul className="space-y-[13px]">
                                    <li>2 <span className="text-textDescription">каюты</span></li>
                                    <li>3 <span className="text-textDescription">спальных места</span></li>
                                    <li>4 <span className="text-textDescription">пассажира</span></li>
                                    <li>1 <span className="text-textDescription">двигатель</span></li>
                                </ul>
                                <a className="mt-[30px] py-[20px] px-[25px]
                                inline-block text-[14px] leading-[2px] text-white
                                font-normal border-solid border-2 tracking-[0.1em] uppercase
                                whitespace-nowrap text-center cursor-pointer truncate align-middle
                                transition-[all 250ms ease-in-out]
                                transition ease-in-out delay-150 bg-blue-300
                                 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 " href=''>Добавить в корзину</a>
                            </div>
                        </div>
                        <div className="max-w-[346px] ml-auto mr-auto rounded-[6px] shadow-[3px_6px_6px_0_rgba(0,0,0,0.11)] bg-bgServices">
                            <div className="relative">
                                <img className="rounded-t-[6px]" src={pricing2}></img>
                                <div className="flex items-center justify-center absolute inset-0 p-[15px]">
                                    <div>
                                        <h3 className="font-medium text-white tablet:text-[26px] desktop:text-[30px]">Motor Yacht</h3>
                                        <div className="flex items-center justify-center ">
                                            <p className="font-normal text-white text-[18px] tablet:text-[20px] desktop:text-[26px]">$220.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-[30px] px-[15px] relative
                                before:content-[''] before:absolute
                                before:bottom-[100%] before:left-[50%]
                                before:w-[0] before:h-[0]
                                before:border-solid
                                before:border-t-[0] before:border-r-[11.5px] before:border-b-[11px]
                                before:border-l-[11.5px]
                                before:border-t-transparent before:border-r-transparent
                                before:border-b-white before:border-l-transparent before:translate-x-[-50%] before:translate-y-[0%]
                                text-center">
                                <ul className="space-y-[13px]">
                                    <li>4 <span className="text-textDescription">каюты</span></li>
                                    <li>5 <span className="text-textDescription">спальных места</span></li>
                                    <li>8 <span className="text-textDescription">пассажиров</span></li>
                                    <li>2 <span className="text-textDescription">двигателя</span></li>
                                </ul>
                                <a className="mt-[30px] py-[20px] px-[25px]
                                inline-block text-[14px] leading-[2px] text-white
                                font-normal border-solid border-2 tracking-[0.1em] uppercase
                                whitespace-nowrap text-center cursor-pointer truncate align-middle
                                transition-[all 250ms ease-in-out]
                                transition ease-in-out delay-150 bg-blue-300
                                 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 " href=''>Добавить в корзину</a>
                            </div>
                        </div>
                        <div className="max-w-[346px] ml-auto mr-auto rounded-[6px] shadow-[3px_6px_6px_0_rgba(0,0,0,0.11)] bg-bgServices">
                            <div className="relative">
                                <img className="rounded-t-[6px]" src={pricing3}></img>
                                <div className="flex items-center justify-center absolute inset-0 p-[15px]">
                                    <div>
                                        <h3 className="font-medium text-white tablet:text-[26px] desktop:text-[30px]">Tri-Deck</h3>
                                        <div className="flex items-center justify-center ">
                                            <p className="font-normal text-white text-[18px] tablet:text-[20px] desktop:text-[26px]">$500.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-[30px] px-[15px] relative
                                before:content-[''] before:absolute
                                before:bottom-[100%] before:left-[50%]
                                before:w-[0] before:h-[0]
                                before:border-solid
                                before:border-t-[0] before:border-r-[11.5px] before:border-b-[11px]
                                before:border-l-[11.5px]
                                before:border-t-transparent before:border-r-transparent
                                before:border-b-white before:border-l-transparent before:translate-x-[-50%] before:translate-y-[0%]
                                text-center">
                                <ul className="space-y-[13px]">
                                    <li>6 <span className="text-textDescription">кают</span></li>
                                    <li>3 <span className="text-textDescription">спальных места</span></li>
                                    <li>4 <span className="text-textDescription">пассажира</span></li>
                                    <li>1 <span className="text-textDescription">двигатель</span></li>
                                </ul>
                                <a className="mt-[30px] py-[20px] px-[25px]
                                inline-block text-[14px] leading-[2px] text-white
                                font-normal border-solid border-2 tracking-[0.1em] uppercase
                                whitespace-nowrap text-center cursor-pointer truncate align-middle
                                transition-[all 250ms ease-in-out]
                                transition ease-in-out delay-150 bg-blue-300
                                 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 " href=''>Добавить в корзину</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
    
}

export default PricingList;