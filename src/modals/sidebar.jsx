import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

import Logo from "@assets/img/logo/sidebar.png";
import menu_data from '../layout/headers/menu-data';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const router = useRouter();

    // Handle menu item click - close sidebar and navigate
    const handleMenuClick = (link) => {
        setSidebarOpen(false);
        router.push(link);
    };

    return (
        <>
            <div className={`offcanvas__area ${sidebarOpen ? "offcanvas-opened" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__close">
                        <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setSidebarOpen(false)}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-30 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo logo" onClick={() => handleMenuClick('/')}>
                                <Image src={Logo} alt="logo" style={{ cursor: 'pointer' }} />
                            </div>
                        </div>

                        {/* Mobile Menu - Direct Implementation for better click handling */}
                        <div className="mobile-menu-wrapper">
                            <nav className="mobile-nav">
                                <ul className="mobile-menu-list">
                                    {menu_data.map((menu, i) => (
                                        <li key={i} className="mobile-menu-item">
                                            <button
                                                onClick={() => handleMenuClick(menu.link)}
                                                className={`mobile-menu-link ${router.pathname === menu.link ? 'active' : ''}`}
                                            >
                                                {menu.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="offcanvas__contact">
                            <h4 className="offcanvas__title">Contacts</h4>
                            <div className="offcanvas__contact-content d-flex">
                                <div className="offcanvas__contact-content-icon">
                                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                                </div>
                                <div className="offcanvas__contact-content-content">
                                    <a href="https://share.google/QO69FW6TSpXLmLgoM">Hyderabad, Telangana, India</a>
                                </div>
                            </div>
                            <div className="offcanvas__contact-content d-flex">
                                <div className="offcanvas__contact-content-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="offcanvas__contact-content-content">
                                    <a href="mailto:asish@social.auctus.com">asish@social.auctus.com</a>
                                </div>
                            </div>
                            <div className="offcanvas__contact-content d-flex">
                                <div className="offcanvas__contact-content-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="offcanvas__contact-content-content">
                                    <a href="tel:9381736309"> +91 9032916136</a>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas__social">
                            <a className="icon linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a className="icon instagram" href="https://www.instagram.com/purnaviitsolutions/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${sidebarOpen && "opened"}`} onClick={() => setSidebarOpen(false)}></div>
        </>
    );
};

export default Sidebar;