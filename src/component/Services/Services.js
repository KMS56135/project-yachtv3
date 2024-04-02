import './Services.css';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import ModeFanOffOutlinedIcon from '@mui/icons-material/ModeFanOffOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import promo from '../../assets/images/Services/promo-382x382.png'


function Services() {
    return ( 
        <>  
            <div className="services bg-bgServices">
                <div className='page'>
                    <div className='services__wrapper flex flex-col gap-y-5 tablet:flex-row gap-x-5 '>
                        <div className='flex flex-col gap-y-5'>
                            <div className='services__content flex flex-col items-center'>
                                <div className='services__icon-wrapper'>
                                    <div className='services__icon'>
                                        <BedroomChildOutlinedIcon  sx={{ fontSize: 33 }}/>
                                    </div>
                                </div>
                                <h2 className='services__title font-taviraj'>Двуспальная кровать и телевизор</h2>
                                <p className='services__description font-taviraj'>Все наши яхты комфортабельно обставлены двумя односпальными и двуспальными кроватями и оснащены спутниковым телевидением.</p>
                            </div>
                            <div className='services__content flex flex-col items-center'>
                                <div className='services__icon-wrapper'>
                                    <div className='services__icon'>
                                        <ModeFanOffOutlinedIcon sx={{ fontSize: 33 }}/>
                                    </div>
                                </div>
                                <h2 className='services__title font-taviraj'>Кондиционер</h2>
                                <p className='services__description font-taviraj'>Наслаждайтесь чартером даже в очень жаркую погоду благодаря нашему первоклассному кондиционеру.</p>
                            </div>
                        </div>
                        <div className='services_image inline-block self-center'>
                            <img className='img hidden tablet:block w-full' src={promo}></img>
                        </div>
                        <div className='flex flex-col gap-y-5 justify-between'>
                            <div className='services__content flex flex-col items-center'>
                                <div className='services__icon-wrapper'>
                                    <div className='services__icon'>
                                        <BathtubOutlinedIcon  sx={{ fontSize: 33 }}/>
                                    </div>
                                </div>
                                <h2 className='services__title font-taviraj'>Большие Ванные Комнаты</h2>
                                <p className='services__description font-taviraj'>Все наши яхты имеют просторные, уютные и стильные ванные комнаты, которые позволят вам расслабиться и прекрасно провести время.</p>
                            </div>
                            <div className='services__content flex flex-col items-center '>
                                <div className='services__icon-wrapper'>
                                    <div className='services__icon'>
                                        <MenuBookIcon  sx={{ fontSize: 33 }}/>
                                    </div>
                                </div>
                                <h2 className='services__title font-taviraj'>Ресторан</h2>
                                <p className='services__description font-taviraj'>Мы регулярно подаем свежие органические блюда и освежающие напитки для лучшего кулинарного впечатления.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;