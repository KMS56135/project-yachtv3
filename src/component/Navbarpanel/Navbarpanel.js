import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "../../assets/images/logoSVG.png";
import logoDefault from "../../assets/images/logo-default-258x116.png";
import {Link} from "react-router-dom";
import PricingList from "../../templates/PricingList/PricingList"


function NavbarPanel() {
    return (
        <>
            <div className="">
                <div className="flex items-center p-1 h-[56px]
                desktop:hidden absolute z-10 w-full px-[30px]">
                    <BurgerMenu/>
                    <div className="ml-auto">
                        <img className="" width={129} height={5} src={logo}/>
                    </div>
                </div>
                <div className="absolute top-[10%] z-10 w-full desktop:block tablet:hidden mobile:hidden">
                    <div className="flex flex-col items-center">
                        <img src={logoDefault} className="mb-[30px] w-[129px] h-[58px]"></img>
                        <div className="w-full max-w-[1170px] ml-auto mr-auto py-[23px] flex justify-center gap-[23px]
                        border-y-[1px] border-navbarBorder text-[20px] text-white font-taviraj">
                            <div>
                                <a href="" className="hover:text-black hover:transition duration-300 ease-in-out">Главная</a>
                            </div>
                            <div>
                                <Link to='/pricinglist' className="hover:text-black hover:transition duration-300 ease-in-out">Сервис</Link>
                            </div>
                            <div>
                                <a href="" className="hover:text-black ">Галерея</a>
                            </div>
                            <div>
                                <a href="" className="hover:text-black hover:transition duration-300 ease-in-out">Ивенты</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarPanel;