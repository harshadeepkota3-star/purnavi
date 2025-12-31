import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@assets/img/logo/footer-logo.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';

const footer_content = {
    contact_us: <>Contact us at <span>asish@social.auctus.com </span></>,
    mail: "asish@social.auctus.com",
    contact_text: "Full-Stack IT Solutions & Workforce Hiring",
    phone: "+91 9032916136",
    info: <>Purnavi IT Solutions Pvt. Ltd. - Delivering high-quality IT solutions, project-based development, and specialized workforce hiring for businesses worldwide.</>,
    map: "https://www.google.com/maps/place/Hyderabad,+Telangana/@17.406498,78.47987,11z",
    address: <>Hyderabad, Telangana <br /> India</>,
    mail_2: "asish@social.auctus.com",
    mail_phone: <>asish@social.auctus.com <br /> +91 9032916136</>,


    service_links: [
        { title: "Permanent IT Staffing", link: "/service-details" },
        { title: "Contract Staffing Solutions", link: "/service-details" },
        { title: "HR & Payroll Management", link: "/service-details" },
        { title: "Project-Based Development", link: "/end-to-end-it-project-delivery" },
    ],
    quick_links: [
        { title: "About Us", link: "/about" },
        { title: "All Services", link: "/service-details" },
        { title: "Careers", link: "/career" },
        { title: "Contact Us", link: "/contact" },
    ]



}
const { contact_us, mail, contact_text, phone, info, map, address, mail_2, mail_phone, service_links, quick_links } = footer_content


const Footer = () => {
    return (
        <>
            <footer className="tp-footer-area p-relative">
                <div className="tp-footer-bg" style={{ backgroundImage: `url(/assets/img/footer/footer-bg.jpg)` }}></div>
                {/* <div className="tp-footer-top-shape" style={{ backgroundImage: `url(/assets/img/footer/footer-top-bg.png)` }}></div> */}

                <div className="container container-large">

                    <div className="row">
                        <div className="col-lg-12">
                            {/* <div className="tp-footer-top-area">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tp-footer-top-contact">
                                            <a href={`mailto:${mail}`}>{contact_us}</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                                            <div className="tp-footer-top-right-headphone">
                                                <Image src={headphone} alt="theme-pure" />
                                            </div>
                                            <div className="tp-footer-top-right-content">
                                                <p>{contact_text}</p>
                                                <a href={`tel:${phone}`}>{phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                    <div className="tp-footer-logo">
                                        <a href="index.html"> <Image src={footer_logo} alt="theme-pure" /></a>
                                    </div>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-info">
                                            <p>{info}</p>
                                            <div className="tp-footer-main-location">
                                                <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i>
                                                    {address}</a>
                                            </div>
                                            <div className="tp-footer-main-mail">
                                                <a href={`mailto:${mail_2}`}>
                                                    <i className="fa-light fa-message-dots"></i>{mail_phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                    <h3 className="tp-footer-widget-title">Our Services</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {service_links.map((item, i) => <li key={i}><Link href={item.link}>{item.title}</Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-3">
                                    <h3 className="tp-footer-widget-title">Quick Links</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {quick_links.map((item, i) => <li key={i}><Link href={item.link}>{item.title}</Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-4">
                                    <h3 className="tp-footer-widget-title">Newsletter</h3>
                                    <div className="tp-footer-from">
                                        <div className="tp-footer-text-email p-relative">
                                            <input type="text" placeholder="Enter Email Address" />
                                            <span>
                                                <EmailAeroplan />
                                            </span>
                                        </div>
                                        <div className="tp-footer-form-check">
                                            <input className="form-check-input" id="flexCheckChecked" type="checkbox" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                I agree to all your terms and policies
                                            </label>
                                        </div>
                                        <div className="tp-footer-widget-social">
                                            <SocialLinks />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tp-footer-copyright-inner text-center">
                                    <p><CopyRight /> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;