import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import pattern1 from '../../assets/images/patterns/pattern.png';
import pattern2 from '../../assets/images/patterns/pattern-2.png';

import icon_1 from '../../assets/images/icons/icon-15.png';
import icon_2 from '../../assets/images/icons/icon-16.png';
import icon_3 from '../../assets/images/icons/icon-17.png';
import icon_4 from '../../assets/images/icons/icon-18.png';

import location_image_1 from '../../assets/images/contact-location-img-1.jpg';
import location_image_2 from '../../assets/images/contact-location-img-2.jpg';
import location_image_3 from '../../assets/images/contact-location-img-3.jpg';
import location_image_4 from '../../assets/images/contact-location-img-4.jpg';

const Contact = () => {
    return (
        <>
      


            {/* contact form - start */}
            <div style={{marginTop: "80px"}} className="contact-form pattern-bg">
                <div className="contact-form-wrapper">
                    <div className="container pattern-bg-content">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact-form-header">
                                    <h2 className="ln-ht-44">Write Us A Message</h2>
                                    <p className="large c-grey">Message us below and we’ll get back to you in a jiffy. You can also chat with us below if that’s more your fancy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pattern-bg-image" style={{backgroundImage: `url(${pattern2})`}}></div>
            </div>
            {/* contact form - end */}

          
        </>
    );
};

export default Contact;
