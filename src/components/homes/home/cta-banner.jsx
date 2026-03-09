import React from 'react';
import Link from 'next/link';

const CtaBanner = () => {
    return (
        <>
            <section className="tp-cta-banner-area">
                <div className="container">
                    <div className="tp-cta-banner-wrapper">
                        <div className="tp-cta-banner-bg-shape">
                            <svg className="cta-shape-1" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="200" cy="200" r="200" fill="url(#gradient1)" fillOpacity="0.08" />
                                <defs>
                                    <radialGradient id="gradient1" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)">
                                        <stop stopColor="#ffffff" />
                                        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <svg className="cta-shape-2" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="150" cy="150" r="150" fill="url(#gradient2)" fillOpacity="0.06" />
                                <defs>
                                    <radialGradient id="gradient2" cx="0" cy="0" r="1" gradientTransform="translate(150 150) scale(150)">
                                        <stop stopColor="#ffffff" />
                                        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-7">
                                <div className="tp-cta-banner-content">
                                    <span className="tp-cta-banner-subtitle">
                                        <i className="fas fa-rocket"></i> Let's Work Together
                                    </span>
                                    <h2 className="tp-cta-banner-title">
                                        Full-Stack IT Solutions & <span>Workforce Hiring</span>
                                    </h2>
                                    <p className="tp-cta-banner-desc">
                                        Need IT & Non-IT talent or project execution support? We've got you covered.
                                    </p>
                                    <div className="tp-cta-banner-contact">
                                        <div className="tp-cta-banner-contact-item">
                                            <div className="tp-cta-banner-contact-icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="tp-cta-banner-contact-info">
                                                <span>Phone</span>
                                                <a href="tel:+919032916136">+91 9032916136</a>
                                            </div>
                                        </div>
                                        <div className="tp-cta-banner-contact-item">
                                            <div className="tp-cta-banner-contact-icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="tp-cta-banner-contact-info">
                                                <span>Email</span>
                                                <a href="mailto:info@purnaviitsolutions.com">info@purnaviitsolutions.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="tp-cta-banner-btn-wrapper">
                                    <Link className="tp-btn tp-cta-banner-btn-primary" href="/contact">
                                        <span>
                                            <i className="fas fa-calendar-alt"></i>
                                            Schedule a Consultation
                                        </span>
                                    </Link>
                                    <Link className="tp-btn tp-cta-banner-btn-secondary" href="/contact">
                                        <span>
                                            <i className="fas fa-paper-plane"></i>
                                            Contact Us Today
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaBanner;
