import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import {Link} from "react-router-dom";
function Footer() {
    return (
        <div className="bg-bgFooter bg-center">
            <div className='page'>
                <div className='py-[15px] grid grid-cols-1 tablet:grid-cols-2'>
                    <nav className='grid grid-cols-4 justify-items-center gap-x-3 tablet:flex tablet:flex-col tablet:text-center tablet:gap-3 tablet:items-start'>
                        <h2 className='text-[20px] mb-[10px] text-white col-span-4 justify-self-center'>Навигация</h2>
                        {[
                            [ 'Главная', '/' ],
                            ['Сервис', '/pricinglist'],
                            ['Галерея', '/Masonry'],
                            ['Связаться с нами', '/ContactUs']
                        ].map(([title, url]) => (
                            <div className='text-center'>
                                <Link to={url} className='text-white hover:text-black hover:transition duration-300 ease-in-out'>{title}</Link>
                            </div>
                        ))}
                    </nav>
                    <div className='grid grid-cols-1'>
                        <h3 className='text-white text-[20px] mb-[20px] justify-self-center'>Наши контакты</h3>
                        <div className='grid grid-cols-4 grid-rows-3 justify-items-center'>
                            <div className='text-white text-center hover:text-black col-span-4'>
                                <div className=''>
                                    <LocationOnOutlinedIcon className=''/>
                                    Сильван Авеню, 523, 5-й этаж Маунтин-Вью, Калифорния 94041 США                                  
                                </div>
                            </div>
                            <div className='text-white text-center hover:text-black col-span-4 place-self-center'>
                                <div className=''>
                                    <a href="tel:+184412345678" className='text-white block hover:text-black'>
                                        <LocalPhoneOutlinedIcon/>
                                        +1 844 123 456 78
                                    </a>
                                </div>
                            </div>
                            <div className='text-white col-span-4 place-self-center'>
                                <div className='hover:text-black'>
                                    <a href="mailto:info@demolink.org" className='text-white block hover:text-black'>
                                        <LocalPostOfficeOutlinedIcon/>
                                        info@demolink.org
                                    </a>
                                </div>
                            </div>
                            {/* <div className='text-white'>
                                <div className=''>
                                    <ul className=''>
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
                            </div>   */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;