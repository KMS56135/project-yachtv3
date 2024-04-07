import advantages1 from '../../assets/images/Advantages/Advantages1-372x469.png';
import advantages2 from '../../assets/images/Advantages/Advantages2-206x206.png';
import Accordion from './Accordion/Accordion';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import KayakingOutlinedIcon from '@mui/icons-material/KayakingOutlined';

function Advantages() {
    return (
        <>
            <div className='py-[50px]'>
                <div className="page">
                    <div className='flex flex-col desktop:flex-row'>
                        <div>
                            <div className='w-max flex flex-col mx-auto relative mb-[50px]'>
                                <div className='w-full'>
                                    <img  src={advantages1}></img>
                                </div>
                                <div className='absolute bottom-[-40px] left-[50%] translate-x-[-50%] tablet:top-[20px] tablet:left-[0]'>
                                    <img src={advantages2}></img>
                                </div>
                            </div>
                        </div>
                        <div className='desktop:pl-[50px]'>
                            <h2 className='text-mobileTitle tablet:text-tabletTitle desktop:text-desktopTitle mb-[20px] text-center font-taviraj tablet:text-left'>Преимущества</h2>
                            <Accordion/>
                        </div>
                    </div>
                    <div className='mt-[50px] flex flex-col flex-wrap gap-5 tablet:flex-row tablet:justify-center desktop:justify-between'>
                        <div className='flex flex-col items-center justify-center border border-gray-300 p-[20px] min-w-[330px]'>
                            <WbSunnyOutlinedIcon sx={{ fontSize: 33 }}/>
                            <h3 className='text-[18px] '>Захватывающие места</h3>
                            <p className='text-center text-[15px] text-textDescription'>Экзотические и запоминающиеся места</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border border-gray-300 p-[20px] min-w-[330px]'>
                            <KayakingOutlinedIcon sx={{ fontSize: 33 }}/>
                            <h3 className='text-[18px]'>Разные яхты</h3>
                            <p className='text-center text-[15px] text-textDescription'>Отличный выбор яхт</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border border-gray-300 p-[20px] min-w-[330px]'>
                            <AccessibilityNewOutlinedIcon sx={{ fontSize: 33 }}/>
                            <h3 className='text-[18px]'>Лучшие капитаны</h3>
                            <p className='text-center text-[15px] text-textDescription'>Абсолютные профессионалы</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advantages;