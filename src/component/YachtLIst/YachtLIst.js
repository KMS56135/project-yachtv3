import React from 'react';
import SunsetSerenade1920 from '../../assets/images/YachtList/Sunset Serenade-1920.jpg';
import SunsetSerenade500 from '../../assets/images/YachtList/Sunset Serenade-500.jpg';
import SunsetSerenade1000 from '../../assets/images/YachtList/Sunset Serenade-1000.jpg';
import AzureOdyssey from '../../assets/images/YachtList/Azure Odyssey-855.jpg';
import HarborBliss from '../../assets/images/YachtList/Harbor Bliss-1920.jpg';
import BlueHorizon from '../../assets/images/YachtList/Blue Horizon-1920.jpg';
import AquaDream from '../../assets/images/YachtList/Aqua Dream-1920.jpg';
import OceanSerenity from '../../assets/images/YachtList/Ocean Serenity-1920.jpg';
import { Link } from "react-router-dom";


const YachtCard = ({ yacht }) => (
  <div className=" w-full max-w-sm mx-auto p-4 rounded-lg  hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
    <picture>
      <source media="(min-width: 1000px)" srcSet={yacht.image1920} />
      <source media="(min-width: 500px)" srcSet={yacht.image1000} />
      <img src={yacht.image500} className="object-cover w-full h-72 rounded-lg mb-4" alt="Описание изображения" />
    </picture>
    <h3 className='text-xl font-medium  dark:text-white'>{yacht.name}</h3>
    <ul className='text-sm font-normal text-gray-500 flex flex-col'>
        <li className='flex justify-between border-b-[1px] border-gray-400'>
            <p className='my-[10px]'>Длина</p>
            <span className='my-[10px] font-bold text-black'>{yacht.length}</span>
        </li>
        <li className='flex justify-between border-b-[1px] border-gray-400'>
            <p className='my-[10px]'>Год выпуска</p>
            <span className='my-[10px] font-bold text-black'>{yacht.year}</span>
        </li>
        <li className='flex justify-between border-b-[1px] border-gray-400'>
            <p className='my-[10px]'>Количество мест</p>
            <span className='my-[10px] font-bold text-black'>{yacht.capacity}</span>
        </li>
        <li className='flex justify-between border-b-[1px] border-gray-400'>
            <p className='my-[10px]'>Цена</p>
            <span className='my-[10px] font-bold text-black'>{yacht.price}</span>
        </li>
    </ul>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      <Link to='/ContactUs'>Забронировать</Link>
    </button>
  </div>
);

const YachtList = () => {
  const yachts = [
    {
        image1920: SunsetSerenade1920,
        image500: SunsetSerenade500,
        image1000: SunsetSerenade1000,
        name: 'Sunset Serenade',
        length: '38 m',
        year: '2015',
        capacity: '8',
        price: '$1000', 
        id: 1
    },
    {
        image1920: SunsetSerenade1920,
        image500: AzureOdyssey,
        image1000: AzureOdyssey,
        name: 'Azure Odyssey',
        length: '42 m',
        year: '2016',
        capacity: '6',
        price: '$2000', 
        id: 2
    },
    {
        image1920: SunsetSerenade1920,
        image500: HarborBliss,
        image1000: AzureOdyssey,
        name: 'Harbor Bliss',
        length: '43 m',
        year: '2018',
        capacity: '12',
        price: '$5000', 
        id: 3
    },
    {
        image1920: SunsetSerenade1920,
        image500: BlueHorizon,
        image1000: AzureOdyssey,
        name: 'Blue Horizon',
        length: '36 m',
        year: '2019',
        capacity: '4',
        price: '$3600', 
        id: 4
    },
    {
        image1920: SunsetSerenade1920,
        image500: AquaDream,
        image1000: AzureOdyssey,
        name: 'Aqua Dream',
        length: '29 m',
        year: '2014',
        capacity: '6',
        price: '$2500', 
        id: 5
    },
    {
        image1920: SunsetSerenade1920,
        image500: OceanSerenity,
        image1000: AzureOdyssey,
        name: 'Ocean Serenity',
        length: '36 m',
        year: '2019',
        capacity: '10',
        price: '4200$', 
        id: 6
    },
  ];

  return (
    <ul className="flex flex-wrap justify-center mb-4 max-w-[1200px] mx-auto">
      {yachts.map((yacht, index) => (
        <li key={index} className="w-full max-w-md tablet:max-w-sm p-4 tablet:p-6">
          <YachtCard yacht={yacht} />
        </li>
      ))}
    </ul>
  );
};

export default YachtList;

