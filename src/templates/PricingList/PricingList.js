import NavbarPanel from "../../component/Navbarpanel/Navbarpanel";
import BgPricingList from '../../assets/images/PricingList/breadcrumbs-bg.jpg';

function PricingList() {
    return (
        <>
            <div className="w-full relative">
                <div className='absolute
                  w-full'>
                    <img src={BgPricingList} className="object-fill object-center"></img>
                </div>
                <NavbarPanel/>

            </div>
        </>
    )
    
}

export default PricingList;