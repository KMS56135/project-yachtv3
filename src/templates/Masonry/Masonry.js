// import BgHeader from "../../component/BgHeader/BgHeader";
import Footer from "../../component/Footer/Footer";
import NavbarPanel from "../../component/Navbarpanel/Navbarpanel";
import BgPricingList from '../../assets/images/PricingList/breadcrumbs-bg.jpg';
import masonry1 from '../../assets/images/Masonry/wepik-export-20240413134308t5Uu.jpeg';
import masonry2 from '../../assets/images/Masonry/masonry-gallery-2-270x530.jpg';
import masonry3 from '../../assets/images/Masonry/masonry-gallery-3-270x250.jpg';
import masonry4 from '../../assets/images/Masonry/masonry-gallery-4-270x250.jpg';
import masonry5 from '../../assets/images/Masonry/masonry-gallery-5-270x250.jpg';
import masonry6 from '../../assets/images/Masonry/masonry-gallery-6-570x530.jpg';
import masonry7 from '../../assets/images/Masonry/masonry-gallery-7-570x250.jpg';
import more1 from '../../assets/images/Masonry/more-1-119036-2560x1440.jpg';
import more2 from '../../assets/images/Masonry/more-2-1920x1080.jpg';
import more3 from '../../assets/images/Masonry/more3-1920x1080.jpg';
import more4 from '../../assets/images/Masonry/more-4-1920x1080.jpg';
import more5 from '../../assets/images/Masonry/more-5-1920x1080.jpg';
import more6 from '../../assets/images/Masonry/more6-1920x1080.jpg';
import yacht1 from '../../assets/images/Masonry/yacht1-1920x1080.jpg';
import yacht2 from '../../assets/images/Masonry/yacht-2-1920x1080.jpg';
import yacht3 from '../../assets/images/Masonry/yacht-3-1920x1080.jpg';
import yacht4 from '../../assets/images/Masonry/yacht-4-1920x1080.jpg';
import yacht5 from '../../assets/images/Masonry/yacht-5-1920x1080.jpg';
import yacht6 from '../../assets/images/Masonry/yacht-6-1920x1080.jpg';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


export function GalleryWithTab() {
    const data = [
      {
        label: "Море",
        value: "more",
        images: [
          {
            imageLink:
                more1,
          },
          {
            imageLink:
              more6,
          },
          {
            imageLink:
              more2,
          },
          {
            imageLink:
              more3,
          },
          {
            imageLink:
              more4,
          },
          {
            imageLink:
              more5,
          },
        ],
      },
      {
        label: "Яхты",
        value: "yacht",
        images: [
          {
            imageLink:
              yacht1,
          },
          {
            imageLink:
              yacht2,
          },
          {
            imageLink:
              yacht3,
          },
          {
            imageLink:
              yacht4,
          },
          {
            imageLink:
              yacht5,
          },
          {
            imageLink:
              yacht6,
          },
        ],
      },
    ];
    return (
      <div>
        <Tabs value="more">
          <TabsHeader className=''>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <div className="">
            <TabsBody className="grid grid-cols-1 gap-4">
              {data.map(({ value, images }) => (
                <TabPanel
                  className="tablet:grid tablet:grid-cols-2 tablet:gap-4 flex flex-col gap-[20px] "
                  key={value}
                  value={value}
                >
                  {images?.map(({ imageLink }, index) => (
                    <div key={index} className="flex">
                      <img
                        className="h-[310px] w-full max-w-full rounded-lg object-cover object-center flex-shrink-0"
                        src={imageLink}
                        alt="image-photo"
                      />
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabsBody>
          </div>
        </Tabs>
      </div>
    );
  }



function Masonry() {
    return (
        <>  
            <NavbarPanel/>
            <div className='absolute top-0 bottom-0 right-0 left-[-2px] h-max'>
                <img src={BgPricingList} className="object-cover object-center h-[600px] w-full"></img>
                </div>
                <div className="page flex">
                <p className="m-auto mt-[350px] z-10 text-mobileTitle
                    tablet:text-tabletTitle desktop:text-desktopTitle text-nowrap text-white font-taviraj">Галерея
                </p>
            </div>
            <section className="mt-[240px] tablet:mt-[220px] desktop:mt-[210px] py-[50px]">
                <div className="page">
                <GalleryWithTab/>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Masonry;
