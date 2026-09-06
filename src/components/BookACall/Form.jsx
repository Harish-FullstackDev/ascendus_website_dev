import React, { useState } from 'react';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import CalendlyModal from '../CommonComponents/CommonCalendy';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    country: '',
    message: '',
    mobile: '',
    termsAccepted: false
  });




  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calendly Modal State
  const [showCalendly, setShowCalendly] = useState(false);

  // MUI Snackbar states
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' // 'success', 'error', 'warning', 'info'
  });

  // Handle notification close
  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  // ✅ Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 3) {
      newErrors.firstName = 'First name must be at least 3 characters';
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = 'First name should only contain letters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = 'Last name should only contain letters';
    }


    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Please select a country';
    }

    if (formData.mobile.trim() && !/^[0-9]+$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Mobile number should contain only numbers';
    } else if (formData.mobile.trim() && formData.mobile.trim().length < 10) {
      newErrors.mobile = 'Mobile number must be at least 10 digits';
    }



    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Please accept the Terms & Conditions";
    }

    return newErrors;
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "mobile" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };



  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await fetch("/api/book-a-consultation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const errorData = await res.json();

          // Show error notification
          setNotification({
            open: true,
            message: errorData.error || "Something went wrong",
            severity: 'error'
          });

          throw new Error(errorData.error || "Something went wrong");
        }

        const data = await res.json();
        console.log("✅ Form submitted successfully:", data);

        // Show success notification
        setNotification({
          open: true,
          message: 'Form submitted successfully!',
          severity: 'success'
        });

        // Reset form after submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          companyName: '',
          country: '',
          message: '',
          mobile: '',
          termsAccepted: false
        });


      } catch (error) {
        console.error("Error:", error.message);

        // Show error notification if not already shown
        if (!notification.open) {
          setNotification({
            open: true,
            message: error.message === "This email is already registered"
              ? "This email is already registered"
              : "An error occurred. Please try again.",
            severity: 'error'
          });
        }
      }
      finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <div
        className="max-w-4xl mx-auto p-8 lg:p-10 shadow-lg rounded-none border overflow-x-hidden overflow-hidden"
        style={{
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background: "rgba(255, 255, 255, 0.55)",
          borderColor: "rgba(229, 231, 235, 0.5)"
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-md font-medium text-gray-700 mb-2">
                First name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className={`w-full px-4 py-3 border placeholder-gray-400 rounded-none bg-gray-50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:bg-white/80 transition-all duration-200 ${errors.firstName
                  ? 'border-red-300 focus:ring-red-300'
                  : 'border-gray-200/50 focus:ring-blue-300'
                  }`}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-md font-medium text-gray-700 mb-2">
                Last name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className={`w-full px-4 py-3 border placeholder-gray-400 rounded-none bg-gray-50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:bg-white/80 transition-all duration-200 ${errors.lastName
                  ? 'border-red-300 focus:ring-red-300'
                  : 'border-gray-200/50 focus:ring-blue-300'
                  }`}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Company and Country Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className="block text-md font-medium text-gray-700 mb-2">
                Company name*
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company name"
                className={`w-full px-4 py-3 border placeholder-gray-400 rounded-none bg-gray-50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:bg-white/80 transition-all duration-200 ${errors.companyName ? 'border-red-300 focus:ring-red-300' : 'border-gray-200/50 focus:ring-blue-300'
                  }`}
              />
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">
                Work email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className={`w-full px-4 py-3 border placeholder-gray-400 rounded-none bg-gray-50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:bg-white/80 transition-all duration-200 ${errors.email ? 'border-red-300 focus:ring-red-300' : 'border-gray-200/50 focus:ring-blue-300'
                  }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label htmlFor="country" className="block text-md font-medium text-gray-700 mb-2">
                Country*
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-none bg-gray-50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:bg-white/80 transition-all duration-200 ${errors.country ? 'border-red-300 focus:ring-red-300' : 'border-gray-200/50 focus:ring-blue-300'
                  }`}
              >
                <option value="">Select a country</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="IN">India</option>
                <option value="CN">China</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>

            <div>
              <label htmlFor="mobile" className="block text-md font-medium text-gray-700 mb-2">
                Mobile number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your Mobile number"
                maxLength={15}
                className={`w-full px-4 py-3 border placeholder-gray-400 rounded-none bg-gray-50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:bg-white/80 transition-all duration-200 ${errors.mobile
                  ? 'border-red-300 focus:ring-red-300'
                  : 'border-gray-200/50 focus:ring-blue-300'
                  }`}
              />

              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile}
                </p>
              )}

            </div>

          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-2">
              Your message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows={4}
              className={`w-full px-4 py-3 border placeholder-gray-400 rounded-none bg-gray-50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:bg-white/80 transition-all duration-200 resize-vertical ${errors.message ? 'border-red-300 focus:ring-red-300' : 'border-gray-200/50 focus:ring-blue-300'
                }`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Terms and Privacy Notice */}
          <div>
            <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded-none border-gray-300 text-[#0061af] focus:ring-[#0061af]"
              />

              <span>
                I agree to the{" "}
                <a
                  href="/legal/terms"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/legal/privacy"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {errors.termsAccepted && (
              <p className="mt-2 text-sm text-red-500">
                {errors.termsAccepted}
              </p>
            )}
          </div>


          {/* Submit Buttons */}
          <div>
            <div className="flex gap-4">
              {/* Contact Sales Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-2 bg-[#0061af] text-white font-medium py-2 px-6 rounded-none transition duration-200 ease-in-out ${isSubmitting
                  ? 'opacity-80 cursor-not-allowed'
                  : 'hover:bg-blue-400'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <span>Submitting</span>
                    <CircularProgress size={18} color="inherit" />
                  </>
                ) : (
                  ' Submit'
                )}
              </button>

              {/* Schedule a Call Button - Opens Calendly Modal */}
              {/* <button
                type="button"
                onClick={() => setShowCalendly(true)}
                className="flex items-center gap-2 bg-[#0061af] text-white font-medium py-2 px-6 rounded-none transition duration-200 ease-in-out hover:bg-blue-400"
              >
                Schedule a Call
              </button> */}
            </div>
          </div>
        </form>
      </div>

      {/* MUI Snackbar Notification */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>

      {/* Calendly Modal Component */}
      <CalendlyModal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        // To use this Calendly modal, first create an account at https://calendly.com,
        // set up your meeting event (e.g., 30-minute call), and then replace the calendlyUrl
        // with your own Calendly link (for example: https://calendly.com/your-username/30min).
        calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "#0061af",
          textColor: "#0061af",
        }}
      />
    </>
  );
};

export default Form;