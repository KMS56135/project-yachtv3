import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "../../assets/images/logoSVG.png";

function NavbarPanel() {
    return (
        <>
            <div className=" flex items-center p-1 h-[56px]">
                <BurgerMenu/>
                <div className="block ml-3.5">
                    <img className="" width={129} height={5} src={logo}/>
                </div>
            </div>
        </>
    );
}

export default NavbarPanel;