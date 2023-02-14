import React from 'react'

// react router dom
//import { Link } from 'react-router-dom';//

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">Contact Us</h6>
                                <ul className="txt-sm-1 c-grey number-list">
                                    <li>   
                                        <a href="tel:02087575646" className="link  link-md link-grey">
                                            <span>020 8757 5646</span> 
                                            </a>
                                    </li>
                                    <li>   
                                        <a href="tel:+447977772222" className="link  link-md link-grey">
                                            <span>07977772222</span> 
                                            </a>
                                    </li>
                                    <li>
                                        <a href="emailto:info@morristheconnector.com" className="link  link-md link-grey">
                                            <span>info@morristheconnector.com</span>                    
                                        </a>
                                    </li>
                               

                                </ul>
                            </div>
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">Location</h6>
                                <p className="c-grey ln-ht-3">450 Bath Road, Heathrow<br/>West Drayton, UB7 0EB</p>
                            </div>
                        </div>
         
                        <div className="col-lg-6">
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">Social</h6>
                                <ul className="txt-sm-1 c-grey social-list">
                                    <li><a href="https://www.linkedin.com/in/morristheconnector/" className="link  link-md link-grey">
                                        <i className="fab fa-linkedin c-light"></i>
                                        <span>
                                            <span>LinkedIn</span>
                                        </span>
                                        
                                    </a></li>
                                    <li><a href="https://www.facebook.com/morristheconnector/" className="link  link-md link-grey">
                                        <i className="fab fa-facebook-square c-light"></i>
                                        <span>
                                            <span>Facebook</span>
                                        </span>
                                        
                                    </a></li>
                                    <li><a href="https://www.youtube.com/channel/UCuaYmeHX_-BhMz9ijmOCOWg" className="link  link-md link-grey">
                                        <i className="fab fa-youtube c-light"></i>
                                        <span>
                                            <span>Youtube</span>
                                        </span>
                                        
                                    </a></li>
                                    <li><a href="https://www.instagram.com/iammorristheconnector/" className="link  link-md link-grey">
                                        <i className="fab fa-instagram c-light"></i>
                                        <span>
                                            <span>Instagram</span>
                                        </span>
                                        
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
          
                </div>
            </div>
            <p className="text-center">All rights reserved. Morris The Connector CIC 2023 &copy;</p>
        </footer>
    )
}

export default Footer
