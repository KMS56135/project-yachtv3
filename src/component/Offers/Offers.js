import './offers.css'
import Carousel from '../Carousel/Carousel'




function Offers ()  {

    
    return (
        <>
            <div className="offers offers--padding-y">
                <div className='offers__inner'>
                    <h2 className='offers__title font-taviraj'>Наши услуги</h2>
                    <Carousel/>
                </div>
            </div>
        </>
    )
};
export default Offers