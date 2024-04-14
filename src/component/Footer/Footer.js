import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import {Link} from "react-router-dom";
function Footer() {
    return (
        <div className="bg-bgFooter bg-cover pt-[50px] bg-center py-[20px]">
            <div className='page'>
                <div className='mb-[40px]'>
                    <div className='flex justify-center mb-[15px]'>
                        <ul className="list-none text-white flex gap-[23px] flex-wrap justify-center">
                            <li className=''>
                                <Link className='hover:text-black hover:transition duration-300 ease-in-out' to='/'>Главная</Link>
                            </li>
                            <li>
                                <Link  className='hover:text-black hover:transition duration-300 ease-in-out' to='/pricinglist'>Сервис</Link>
                            </li>
                            <li className=''>
                                <Link className='hover:text-black hover:transition duration-300 ease-in-out' to='/Masonry'>Галерея</Link>
                            </li>
                            <li>
                                <Link className='hover:text-black hover:transition duration-300 ease-in-out' to='/ContactUs'>Связаться с нами</Link>
                            </li>                           
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white text-center text-[20px] mb-[10px]'>Наши контакты</h3>
                        <div className='flex flex-col items-center gap-[15px]'>
                            <div className='text-white  hover:text-black'>
                                <div className='flex'>
                                    <p className='text-center relative'>Сильван Авеню, 523, 5-й этаж Маунтин-Вью, Калифорния 94041 США
                                        <LocationOnOutlinedIcon className='absolute top-0 block left-[-23px] right-0'/>
                                    </p>
                                </div>
                            </div >
                            <div className='text-white flex items-center  hover:text-black'>
                                <div className='flex gap-3'>
                                    <LocalPhoneOutlinedIcon/>
                                    <a href="tel:+184412345678" className='text-white block hover:text-black'>+1 844 123 456 78</a>
                                </div>
                            </div>
                            <div className='text-white flex '>
                                <div className='flex  gap-3  hover:text-black'>
                                    <LocalPostOfficeOutlinedIcon/>
                                    <a href="mailto:info@demolink.org" className='text-white block hover:text-black'>info@demolink.org</a>
                                </div>
                            </div>
                            <div className='text-white'>
                                <div className=''>
                                    <ul className='flex justify-between tablet:justify-end gap-[30px]'>
                                        <li>
                                            <a href="" className='hover:text-black hover:transition duration-300 ease-in-out'>
                                                <FacebookOutlinedIcon/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className='hover:text-black hover:transition duration-300 ease-in-out'>
                                                <SendOutlinedIcon/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className='hover:text-black hover:transition duration-300 ease-in-out'>
                                                <AddToDriveOutlinedIcon/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;