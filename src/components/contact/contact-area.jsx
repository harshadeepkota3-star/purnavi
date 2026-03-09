import ContactForm from '@/src/forms/contact-form';
import EmailIconOne from '@/src/svg/email-icon-1';
import PhoneIcon from '@/src/svg/phone-icon';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="tp-contact-area pt-70 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-contact-wrapper">
                                <div className="tp-contact-title-wrapper">
                                    <h3 className="tp-contact-title">Get Started <span className="title-color">Today</span></h3>
                                    <p>Whether you need to hire IT talent or outsource a project—let's discuss how we can help.</p>
                                </div>
                                <div className="tp-contact-content">

                                    <div className="tp-contact-content-mail d-flex align-items-center mb-8">
                                        <div className="tp-contact-content-mail-icon">
                                            <span>
                                                <EmailIconOne />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="tp-contact-content-title" style={{ fontSize: '16px', marginBottom: '5px' }}>For Staffing Requirements:</h4>
                                            <h3 className="tp-contact-item-title"><a href="mailto:info@purnaviitsolutions.com">info@purnaviitsolutions.com</a></h3>
                                            <h3 className="tp-contact-item-title"><a href="tel:9032916136">+91 9032916136</a></h3>
                                        </div>
                                    </div>

                                    <div className="tp-contact-content-mail d-flex align-items-center mb-20">
                                        <div className="tp-contact-content-mail-icon">
                                            <span>
                                                <EmailIconOne />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="tp-contact-content-title" style={{ fontSize: '16px', marginBottom: '5px' }}>For Development Projects:</h4>
                                            <h3 className="tp-contact-item-title"><a href="mailto:info@purnaviitsolutions.com">info@purnaviitsolutions.com</a></h3>
                                            <h3 className="tp-contact-item-title"><a href="tel:9032916136">+91 9032916136</a></h3>
                                        </div>
                                    </div>

                                    <div className="tp-contact-location-wrapper d-flex">
                                        <div className="tp-contact-location">
                                            <h3 className="tp-contact-location-title">
                                                Office Location
                                                <i className="fa-regular fa-arrow-down"></i>
                                            </h3>
                                            <p>Hyderabad, Telangana, India</p>
                                        </div>
                                        <div className="tp-contact-location ml-40">
                                            <h3 className="tp-contact-location-title">
                                                Business Hours
                                                <i className="fa-regular fa-arrow-down"></i>
                                            </h3>
                                            <p>Monday - Saturday: <br /> 9:00 AM - 7:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-form">
                                <h3 className="tp-contact-form-title">Contact Us</h3>
                                <p>Your email address will not be published. Required fields <br /> are marked *</p>
                                <ContactForm />
                                <p className="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;