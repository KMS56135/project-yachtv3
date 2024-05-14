import NavbarPanel from "../../component/Navbarpanel/Navbarpanel";
import BgPricingList from '../../assets/images/PricingList/breadcrumbs-bg.jpg';
import Footer from '../../component/Footer/Footer';
import YachtList from "../../component/YachtLIst/YachtLIst";

function PricingList() {
    return (
        <>
            <NavbarPanel/>
            <div className='absolute top-0 bottom-0 right-0 left-[-2px] h-max'>
                <img src={BgPricingList} alt="фон" className="object-cover object-center h-[600px] w-full"></img>
                </div>
                <div className="page flex">
                <p className="m-auto mt-[350px] z-10 text-mobileTitle
                    tablet:text-tabletTitle desktop:text-desktopTitle text-nowrap text-white font-taviraj">Прайс-лист
                </p>
            </div>
            <section className="mt-[240px] tablet:mt-[220px] desktop:mt-[210px] py-[50px]">
                    <YachtList/>     
            </section>
            <Footer/>
        </>
    )
    
}

export default PricingList;
