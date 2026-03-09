import React, { useState } from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';

// Sample current job openings data
const job_openings = [
    {
        id: 1,
        role: "Senior Java Developer",
        experience: "5-8 Years",
        location: "Hyderabad / Remote",
        skills: ["Java", "Spring Boot", "Microservices", "AWS"],
        type: "Permanent"
    },
    {
        id: 2,
        role: "React.js Frontend Developer",
        experience: "3-5 Years",
        location: "Bangalore / Hybrid",
        skills: ["React.js", "TypeScript", "Redux", "REST APIs"],
        type: "Contract"
    },
    {
        id: 3,
        role: "DevOps Engineer",
        experience: "4-6 Years",
        location: "Hyderabad / Remote",
        skills: ["Docker", "Kubernetes", "Jenkins", "AWS/Azure"],
        type: "Permanent"
    },
    {
        id: 4,
        role: "Full Stack Developer",
        experience: "3-6 Years",
        location: "Chennai / Hybrid",
        skills: ["Node.js", "React", "MongoDB", "PostgreSQL"],
        type: "Contract-to-Hire"
    },
    {
        id: 5,
        role: "QA Automation Engineer",
        experience: "2-4 Years",
        location: "Pune / Remote",
        skills: ["Selenium", "Java", "TestNG", "API Testing"],
        type: "Contract"
    },
    {
        id: 6,
        role: "Python Developer",
        experience: "3-5 Years",
        location: "Hyderabad / Remote",
        skills: ["Python", "Django", "FastAPI", "PostgreSQL"],
        type: "Permanent"
    },
];

const why_register_benefits = [
    "Access to exclusive job opportunities across leading companies",
    "Permanent, contract, and contract-to-hire positions available",
    "Positions across all technology domains and experience levels",
    "Resume visibility to multiple hiring companies",
    "Career guidance and interview preparation support",
    "Transparent communication throughout the process"
];

const Careers = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        currentLocation: '',
        preferredLocation: '',
        noticePeriod: '',
        currentCTC: '',
        expectedCTC: '',
        skills: '',
        linkedIn: '',
        resume: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            resume: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        const submitData = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== undefined) {
                submitData.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                body: submitData
            });

            if (response.ok) {
                setSubmitMessage('Thank you for registering! Our team will review your profile and get back to you soon.');
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    experience: '',
                    currentLocation: '',
                    preferredLocation: '',
                    noticePeriod: '',
                    currentCTC: '',
                    expectedCTC: '',
                    skills: '',
                    linkedIn: '',
                    resume: null
                });
                e.target.reset();
            } else {
                const data = await response.json();
                setSubmitMessage(`Error: ${data.message || 'Something went wrong'}`);
            }
        } catch (error) {
            console.error(error);
            setSubmitMessage(`Error: ${error.message || 'Network error occurred'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="Careers" page_title="Join Our Talent Network" bg_image="/assets/img/breadcrumb/careers-bg.jpg" />

                {/* Hero Section */}
                {/* <section className="careers-hero-area pt-100 pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-11">
                                <div className="careers-hero-wrapper text-center">
                                    <span className="tp-section-title__pre">
                                        For Job <span className="title-pre-color">Seekers</span>
                                        <AngleArrow />
                                    </span>
                                    <h2 className="tp-section-title mb-25">
                                        Join Our <span className="title-color">Talent Network</span>
                                        <span className="title-center-shape">
                                            <LineArrowTwo />
                                        </span>
                                    </h2>
                                    <p className="careers-hero-desc">
                                        Looking for your next IT opportunity? Register with us and get access to top
                                        companies hiring through Purnavi IT Solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Why Register Section */}
                {/* <section className="why-register-area pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="why-register-wrapper">
                                    <h3 className="why-register-title text-center mb-40">
                                        Why Register <span className="title-color">With Us</span>
                                    </h3>
                                    <div className="why-register-benefits">
                                        {why_register_benefits.map((benefit, index) => (
                                            <div key={index} className="benefit-item d-flex align-items-start mb-20">
                                                <span className="benefit-icon"></span>
                                                <p className="benefit-text">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Current Openings Section */}
                <section className="current-openings-area pt-60 pb-40" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="section-header text-center mb-50">
                                    <span className="tp-section-title__pre">
                                        Current <span className="title-pre-color">Openings</span>
                                        <AngleArrow />
                                    </span>
                                    <h3 className="tp-section-title">
                                        Explore <span className="title-color">Opportunities</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {job_openings.map((job) => (
                                <div key={job.id} className="col-lg-6 col-md-6 mb-30">
                                    <div className="job-card">
                                        <div className="job-card-header">
                                            <h4 className="job-title">{job.role}</h4>
                                            <span className={`job-type-badge ${job.type.toLowerCase().replace(/-/g, '')}`}>
                                                {job.type}
                                            </span>
                                        </div>
                                        <div className="job-card-body">
                                            <div className="job-info-row">
                                                <span className="job-info-label">
                                                    <i className="fa-light fa-briefcase"></i> Experience:
                                                </span>
                                                <span className="job-info-value">{job.experience}</span>
                                            </div>
                                            <div className="job-info-row">
                                                <span className="job-info-label">
                                                    <i className="fa-light fa-location-dot"></i> Location:
                                                </span>
                                                <span className="job-info-value">{job.location}</span>
                                            </div>
                                            <div className="job-skills">
                                                {job.skills.map((skill, idx) => (
                                                    <span key={idx} className="skill-tag">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="job-card-footer">
                                            <a href="#register-form" className="job-apply-btn">Apply Now</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Registration Form Section */}
                <section id="register-form" className="register-form-area pt-40 pb-60">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-header text-center mb-50">
                                    {/* <span className="tp-section-title__pre">
                                        Register Your <span className="title-pre-color">Profile</span>
                                        <AngleArrow />
                                    </span> */}
                                    <h3 className="tp-section-title">
                                        Submit Your <span className="title-color">Details</span>
                                    </h3>
                                    <p className="mt-15">Fill out the form below to join our talent network</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            {/* Left Column - Why Register With Us */}
                            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
                                <div className="why-register-wrapper h-100">
                                    <h3 className="why-register-title text-center mb-40">
                                        Why Register <span className="title-color">With Us</span>
                                    </h3>
                                    <div className="why-register-benefits">
                                        {why_register_benefits.map((benefit, index) => (
                                            <div key={index} className="benefit-item d-flex align-items-start mb-20">
                                                <span className="benefit-icon"></span>
                                                <p className="benefit-text">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Registration Form */}
                            <div className="col-lg-7 col-md-12">
                                <div className="register-form-wrapper h-100">
                                    {submitMessage && (
                                        <div className="submit-success-message mb-30">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <p>{submitMessage}</p>
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="fullName">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter your full name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email Address *</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter your email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone Number *</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter your phone number"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="experience">Total Experience *</label>
                                                    <select
                                                        id="experience"
                                                        name="experience"
                                                        value={formData.experience}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select Experience</option>
                                                        <option value="fresher">Fresher</option>
                                                        <option value="1-2">1-2 Years</option>
                                                        <option value="2-4">2-4 Years</option>
                                                        <option value="4-6">4-6 Years</option>
                                                        <option value="6-10">6-10 Years</option>
                                                        <option value="10+">10+ Years</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="currentLocation">Current Location *</label>
                                                    <input
                                                        type="text"
                                                        id="currentLocation"
                                                        name="currentLocation"
                                                        value={formData.currentLocation}
                                                        onChange={handleInputChange}
                                                        placeholder="e.g., Hyderabad"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="preferredLocation">Preferred Location</label>
                                                    <input
                                                        type="text"
                                                        id="preferredLocation"
                                                        name="preferredLocation"
                                                        value={formData.preferredLocation}
                                                        onChange={handleInputChange}
                                                        placeholder="e.g., Bangalore, Remote"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="noticePeriod">Notice Period</label>
                                                    <select
                                                        id="noticePeriod"
                                                        name="noticePeriod"
                                                        value={formData.noticePeriod}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select Notice Period</option>
                                                        <option value="immediate">Immediate</option>
                                                        <option value="15days">15 Days</option>
                                                        <option value="30days">30 Days</option>
                                                        <option value="60days">60 Days</option>
                                                        <option value="90days">90 Days</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="currentCTC">Current CTC (LPA)</label>
                                                    <input
                                                        type="text"
                                                        id="currentCTC"
                                                        name="currentCTC"
                                                        value={formData.currentCTC}
                                                        onChange={handleInputChange}
                                                        placeholder="e.g., 8 LPA"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="expectedCTC">Expected CTC (LPA)</label>
                                                    <input
                                                        type="text"
                                                        id="expectedCTC"
                                                        name="expectedCTC"
                                                        value={formData.expectedCTC}
                                                        onChange={handleInputChange}
                                                        placeholder="e.g., 12 LPA"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="skills">Key Skills *</label>
                                                    <input
                                                        type="text"
                                                        id="skills"
                                                        name="skills"
                                                        value={formData.skills}
                                                        onChange={handleInputChange}
                                                        placeholder="e.g., Java, React, AWS, Docker"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="linkedIn">LinkedIn Profile</label>
                                                    <input
                                                        type="url"
                                                        id="linkedIn"
                                                        name="linkedIn"
                                                        value={formData.linkedIn}
                                                        onChange={handleInputChange}
                                                        placeholder="https://linkedin.com/in/yourprofile"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-25">
                                                <div className="form-group">
                                                    <label htmlFor="resume">Upload Resume * (PDF, DOC, DOCX)</label>
                                                    <input
                                                        type="file"
                                                        id="resume"
                                                        name="resume"
                                                        onChange={handleFileChange}
                                                        accept=".pdf,.doc,.docx"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 mt-20">
                                                <button
                                                    type="submit"
                                                    className="register-submit-btn"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <i className="fa-solid fa-spinner fa-spin"></i> Submitting...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Register Your Profile <i className="fa-solid fa-arrow-right"></i>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterContact />
            </main>
            <FooterThree />
        </>
    );
};

export default Careers;
