import React from 'react';

// Import Swiper React components
import 'swiper/swiper.scss';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// video lightbox
import VideoLightBox from './VideoLightBox';


// images
import sliderImage1 from '../../assets/images/index-2-hero-img.png';
import sliderImage2 from '../../assets/images/index-2-hero-img-2.png';
import pattern1 from '../../assets/images/patterns/pattern-1.png';
import pattern2 from '../../assets/images/patterns/pattern-3.png';

SwiperCore.use([Pagination]);

const HeroSlider2 = () => {
    return (
        <div className="hero-2">
            <div className="hero-2-wrapper">
                <Swiper 
                    className="hero-2-slider"
                    speed={1000}
                    autoplay={true}
                    pagination={{
                        el: '.hero-2-pagination',
                        type: 'bullets',
                        bulletActiveClass: 'hero-2-pagination-bullet-active bullet-active',
                        bulletClass: 'hero-2-pagination-bullet bullet',
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <div className="container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="hero-2-content">
                                            <h1>Welcome to Morris the Connector CIC.</h1>
                                            <div className="button-group">
                                                <VideoLightBox
                                                    icon="far fa-play-circle"
                                                    text="watch our Story"
                                                    URL={`https://www.youtube.com/watch?v=ynqmNaKwwio&origin${window.location.href}`}
                                                />
                                             
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="hero-2-image">
                                            <img className="main" src={sliderImage1} alt="slider" />
                                            <div className="circle">
                                                <img src={pattern1} alt="pattern" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="hero-2-absolute-img" src={pattern2} alt="pattern" />
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="hero-2-content">
                                            <h1>Empowerment is a big part of what our project stands to deliver for all its participants.</h1>
                                            <div className="button-group">
                                                <VideoLightBox
                                                    icon="far fa-play-circle"
                                                    text="watch our Story"
                                                    URL={`https://www.youtube.com/watch?v=ynqmNaKwwio&origin${window.location.href}`}
                                                />
                                                                                         </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="hero-2-image">
                                            <img className="main" src={sliderImage2} alt="slider" />
                                            <div className="circle">
                                                <img src={pattern1} alt="pattern" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="hero-2-absolute-img" src={pattern2} alt="pattern" />
                            </div>
                    </SwiperSlide>
                </Swiper>
                <div className="hero-2-pagination bullet-pagination"></div>
            </div>
        </div>
    );
};

export default HeroSlider2;
