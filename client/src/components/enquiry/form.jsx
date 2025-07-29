import React, { useState } from 'react';


// Main App component that renders the ContactForm

// ContactForm component for user inquiries
function ContactForm() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    enquiry: '',
  });

  // State to manage form submission status and messages
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Handles changes to input fields and updates the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic client-side validation for required fields
    if (!formData.name || !formData.number || !formData.email || !formData.enquiry) {
      setStatusMessage('Please fill in all required fields.');
      setIsSuccess(false);
      return;
    }

    // --- Placeholder for actual form submission logic ---
    // In a real application, you would send this data to a backend server,
    // a Google Apps Script, or a third-party service here.
    // For this example, we'll just simulate a successful submission.

    console.log('Form Data Submitted:', formData);

    // Simulate a successful submission after a short delay
    setStatusMessage('Your enquiry has been submitted successfully!');
    setIsSuccess(true);
    // Clear the form fields after successful submission
    setFormData({
      name: '',
      number: '',
      email: '',
      enquiry: '',
    });

    // You might want to clear the status message after some time
    setTimeout(() => {
      setStatusMessage('');
    }, 5000);
  };

  return (
    <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 sm:mb-8">
        Send Us Your Enquiry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                       focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base
                       transition duration-200 ease-in-out"
            placeholder="Your Full Name"
          />
        </div>

        {/* Number Input */}
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel" // Use type="tel" for phone numbers
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                       focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base
                       transition duration-200 ease-in-out"
            placeholder="e.g., +1 234 567 8900"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                       focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base
                       transition duration-200 ease-in-out"
            placeholder="you@example.com"
          />
        </div>

        {/* Enquiry Textarea */}
        <div>
          <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700 mb-1">
            Your Enquiry
          </label>
          <textarea
            id="enquiry"
            name="enquiry"
            rows="4" // Sets initial height
            value={formData.enquiry}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                       focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base
                       transition duration-200 ease-in-out resize-y"
            placeholder="Tell us about your query..."
          ></textarea>
        </div>

        {/* Submission Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-lg shadow-md text-base font-semibold
                       bg-black text-white border border-transparent
                       hover:bg-white hover:text-black hover:border-black
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                       transition duration-300 ease-in-out"
          >
            Submit Enquiry
          </button>
        </div>

        {/* Status Message Display */}
        {statusMessage && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              isSuccess ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm
