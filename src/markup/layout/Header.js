import React, { useEffect, useRef } from 'react';

// react router dom
import { Link } from 'react-router-dom';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';


// importing logo
import logo from '../../assets/images/logo.png';

import bg from '../../assets/images/patterns/pattern-5.png';

const toggleSlide = (el, display = 'block') => {
    var el_max_height = 0;

    if(el.getAttribute('data-max-height')) {
        // we've already used this before, so everything is setup
        if(el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
            el.style.maxHeight = el.getAttribute('data-max-height');
        } else {
            el.style.maxHeight = '0';
        }
    } else {
        el_max_height                  = getHeight(el) + 'px';
        el.style['transition']         = 'max-height 0.5s ease-in-out';
        el.style.overflowY             = 'hidden';
        el.style.maxHeight             = '0';
        el.setAttribute('data-max-height', el_max_height);
        el.style.display               = display;

        // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
        setTimeout(function() {
            el.style.maxHeight = el_max_height;
        }, 10);
    }
};

const navigation_responsive = () => {
    const width = window.innerWidth;
    const navigation = document.querySelector('.navigation');

    if (typeof(navigation) === 'undefined' || navigation === null) return;

    if (width < 992) {
        navigation.classList.add('responsive');
    } else {
        navigation.classList.remove('responsive');
    }
};

const getHeight = (el) => {
    var el_style      = window.getComputedStyle(el),
        el_display    = el_style.display,
        el_position   = el_style.position,
        el_visibility = el_style.visibility,
        el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

        wanted_height = 0;


    // if its not hidden we just return normal height
    if(el_display !== 'none' && el_max_height !== '0') {
        return el.offsetHeight;
    }

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    el.style.position   = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display    = 'block';

    wanted_height     = el.offsetHeight;

    // reverting to the original values
    el.style.display    = el_display;
    el.style.position   = el_position;
    el.style.visibility = el_visibility;

    return wanted_height;
};

const Header = () => {

    const navigationRef = useRef(null);

    useEffect(() => {
        GLightbox({
            skin: 'clean video-lightbox'
        });
        
        const main_search = '<div class="main-search-content">' +
            '<form>' +
                '<input type="text" placeholder="Search">' +
                '<button type="submit">' +
                    '<i class="fas fa-search"></i>' +
                '</button>' +
            '</form>' +
        '</div>';
        
        const search_lightbox = GLightbox({
            elements: [
                {
                    content: main_search,
                    height: 'auto'
                }
            ],
            touchNavigation: false,
            touchFollowAxis: false,
            keyboardNavigation: false,
            draggable: false,
            skin: 'clean main-search-lightbox'
        });
        
        Array.from(navigationRef.current.querySelectorAll('.main-search')).forEach((element, index) => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                search_lightbox.open();
            });
        });

                
        window.addEventListener('resize', navigation_responsive);
        window.addEventListener('load', navigation_responsive);
        
        navigationRef.current.querySelector('.navigation-bar').addEventListener('click', (e) => {
            navigationRef.current.classList.add('shown');
        }); 
        
        
        Array.from(navigationRef.current.querySelectorAll('.has-child')).forEach((element, index) => {
            element.addEventListener('click', (e) => {
        
                if (window.innerWidth > 992) return;
        
                if (e.target.parentElement.parentElement.classList.contains('has-child') || e.target.parentElement.parentElement.classList.contains('parent')) {
                    e.preventDefault();
                }
        
                console.log(e.target.parentElement.parentElement)
        
                if (e.currentTarget.classList.contains('dropped')) {
                    toggleSlide(e.currentTarget.querySelector('.child'));
                    e.currentTarget.classList.remove('dropped');
                    return;
                }
        
                // hide dropdown for other list items
                Array.from(e.currentTarget.parentElement.querySelectorAll('.has-child.dropped')).forEach((e, i) => {
                    e.classList.remove('dropped');
                    toggleSlide(e.querySelector('.child'));
        
                });
        
                e.currentTarget.classList.add('dropped');
        
                toggleSlide(e.currentTarget.querySelector('.child'))
            
            });
        });
        
        // hide navigation on mobile
        const close_button = navigationRef.current.querySelector('.close-button');
        
        
        close_button.addEventListener('click', (e) => {
            const dropped = navigationRef.current.querySelector('.dropped');
            console.log('clicked');
        
            if (typeof(dropped) == 'undefined' && dropped == null) {
                toggleSlide(dropped.querySelector('.child'));
                dropped.classList.remove('dropped');
            }
            
            navigationRef.current.classList.remove('shown');
        });
        
    }, []);

    return (
        <>
        <div className="navigation" ref={navigationRef}>
            <div className="navigation-wrapper">
                <div className="navigation-inner">
                    <div className="navigation-logo">
                        <Link to="/">
                            <img src={logo} alt="Morris" />
                        </Link>
                    </div>
                    <div className="navigation-menu">
                        <div className="mobile-header">
                   
                            <ul>
                        
                                <li className="close-button">
                                    <i className="fas fa-times"></i>
                                </li>
                            </ul>
                        </div>
                        <ul className="parent">
                          <li>
                                <Link to="/">
                                    <span>Home</span>
                                </Link>
                                </li>
                      
                        </ul>
                        <p className="tagline">All rights reserved. Morris The Connector CIC 2022 &copy;</p>
                        <div className="navigation-menu-image" style={{backgroundImage: `url(${bg})`}}></div>
                    </div>
                    <div className="navigation-bar">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
