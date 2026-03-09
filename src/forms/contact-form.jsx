import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
      } else {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: err.message });
    }
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="company"
                type="text"
                placeholder="Company Name*"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="phone"
                type="text"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <select
                name="interest"
                className="nice-select"
                value={formData.interest}
                onChange={handleChange}
                required
                style={{ width: '100%', height: '60px', border: '1px solid #e5e5e5', padding: '0 20px', borderRadius: '0', marginBottom: '20px', color: '#687077' }}
              >
                <option value="" disabled>I'm Interested In*</option>
                <option value="Permanent Staffing">Permanent Staffing</option>
                <option value="Contract Staffing">Contract Staffing</option>
                <option value="HR & Payroll Management">HR & Payroll Management</option>
                <option value="Project Development">Project Development</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Tell Us About Your Requirements*"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn" disabled={status.submitting}>
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          <div className="mt-20">
            {status.submitted && (
              <p style={{ color: "green" }}>Message sent successfully! We will get back to you soon.</p>
            )}
            {status.error && (
              <p style={{ color: "red" }}>Error: {status.error}</p>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
