import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import logo from "../../assets/images/logoSVG.png";
// import logoDefault from "../../assets/images/logo-default-258x116.png";
import {Link} from "react-router-dom";
import PricingList from "../../templates/PricingList/PricingList"
import  Logo from "../../assets/images/logo-default-258x116.png";

function NavbarPanel() {
    return (
        <>
            <div className="flex items-center p-1 h-[56px]
            desktop:hidden absolute z-10 w-full px-[30px]">
                <BurgerMenu/>
                <div className="ml-auto">
                    <img src={Logo} className="w-[88px] h-[40px] desktop:w-[129px] desktop:h-[58px]"/>
                </div>
            </div>
            <div className="absolute top-[10%] z-10 w-full tablet:hidden hidden desktop:block">
                <div className="flex flex-col items-center">
                    <img src={Logo} className="mb-[30px] w-[129px] h-[58px]"></img>
                    <div className="w-full max-w-[1170px] ml-auto mr-auto py-[23px] flex justify-center gap-[23px]
                    border-y-[1px] border-navbarBorder text-[20px] text-white font-taviraj">
                        <div>
                            <Link to='/' className="hover:text-cyan-600 hover:transition duration-300 ease-in-out">Главная</Link>
                        </div>
                        <div>
                            <Link to='/pricinglist' className="hover:text-cyan-600 hover:transition duration-300 ease-in-out">Сервис</Link>
                        </div>
                        <div>
                            <Link to='/Masonry' className="hover:text-cyan-600 hover:transition duration-300 ease-in-out">Галерея</Link>
                        </div>
                        <div>
                            <Link to='/ContactUs' className="hover:text-cyan-600 hover:transition duration-300 ease-in-out">Связать с нами</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarPanel;