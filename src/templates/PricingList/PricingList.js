import NavbarPanel from "../../component/Navbarpanel/Navbarpanel";
import BgPricingList from '../../assets/images/PricingList/breadcrumbs-bg.jpg';
import pricing1 from '../../assets/images/PricingList/pricing-1-346x229.jpg';
import pricing2 from '../../assets/images/PricingList/pricing-2-346x229.jpg';
import pricing3 from '../../assets/images/PricingList/pricing-3-346x229.jpg';
import Footer from '../../component/Footer/Footer';

import {Link} from "react-router-dom";
import YachtList from "../../component/YachtLIst/YachtLIst";
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
                    <YachtList/>     
            </section>
            <Footer/>
        </>
    )
    
}

export default PricingList;
