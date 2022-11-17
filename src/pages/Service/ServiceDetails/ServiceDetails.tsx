import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Mousewheel } from 'swiper';
import './ServiceDetails.css';
import 'swiper/css';
import { useState, useEffect } from 'react';
import useIsMobile from '../../../hooks/useisMobile';
import { useSelector } from 'react-redux';

const ServiceDetails = () => {
  const isMobile = useIsMobile();
  const services = useSelector((state: any) => state?.services?.service?.data);

  const [imagesNavSlider, setImagesNavSlider] = useState<any>(null);
  return (
    <section className="slider">
      <div className="slider__flex">
        {isMobile >= 768 && (
          <div className="slider__col">
            <div className="slider__thumbs_services">
              <Swiper
                onSwiper={setImagesNavSlider}
                direction="horizontal"
                spaceBetween={24}
                slidesPerView={3} /*  */
                navigation={{
                  nextEl: '.slider__next',
                  prevEl: '.slider__prev',
                }}
                className="swiper-container1"
                modules={[Navigation, Thumbs]}
              >
                {services && (
                  <SwiperSlide>
                    <div className="sliderImage">
                      <img src={`${services[0]?.images[0]}`} alt="" />
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        )}

        <div className="slider__images">
          <Swiper
            thumbs={{ swiper: imagesNavSlider }}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={32}
            breakpoints={{
              0: {
                direction: 'horizontal',
              },
              768: {
                direction: 'horizontal',
              },
            }}
            className="swiper-container2"
            modules={[Navigation, Thumbs, Mousewheel]}
          >
            {services && (
              <SwiperSlide>
                <div className="slider__image">
                  <img src={`${services[0]?.images[1]}`} alt="" />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
