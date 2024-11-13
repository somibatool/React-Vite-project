import React from 'react';
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upon 50% off on all Men's Wear",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae in similiqu ",
  },
  {
    id: 2,
    img: Image2,
    title: "Upon 50% off on all Men's Wear",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae in similique vol",
  },
  {
    id: 3,
    img: Image3,
    title: "Upon 50% off on all Men's Wear",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae in similique volupt ",
  }
];

const Hero = ({handleOrderPopup} ) => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[500px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      <div className='h-[600px] w-[600px] right-50 bg-primary/40 absolute -top-1/2 rounded-3xl rotate-45 -z-9'></div>
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1  data-aos="zoom-in" data-aos-once="true" data-aos-duration="500" className='text-3xl sm:text-4xl lg:text-5xl font-bold'>{data.title}</h1>
                  <p  data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className='text-sm'>{data.description}</p>
                  <div  data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"
                  >
                    <button onClick={handleOrderPopup} 
                    className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                      Order Now
                    </button>
                  </div>
                </div>
                <div className='order-1 sm:order-'
                 data-aos="zoom-in" data-aos-once="true"
                  >
                  <div>
                    
                  </div>
                  <div className='relative z-10'>
                    <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
   
  );
};

export default Hero;
