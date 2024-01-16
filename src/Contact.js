import React, { useState } from "react";
import contact from "../src/images/contact.jpg"; // Replace with the actual path to your image

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10}$/; // Adjust as per your phone number format
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
      isValid = false;
    } else {
      newErrors.phone = "";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="container" id="contact" style={{ color: "#eeee" }}>
      <h2 style={{paddingTop:'20px',paddingBottom:'20px'}}>Contact</h2>
      <div className="row">
        <div className="col-md-6" style={{marginBottom:'20px'}}>
          <div className="card">
            <img src={contact} className="card-img-top" alt="Contact Card" height="300px"/>
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <p className="text-secondary"> <i className="bi bi-envelope-fill text-danger"></i> kavyakavyagowda80@gmail.com</p>
                <p className="text-secondary"><i className="bi bi-telephone-fill text-danger"></i> 8310241431</p>
                <p className="text-secondary"><i className="bi bi-geo-alt-fill text-danger"></i> Bengaluru</p>
               
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginBottom: '20px', width: '100%' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
