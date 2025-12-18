import React, { useState } from 'react';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (formData.name && formData.email && formData.phone && formData.date && formData.time) {
      setIsSubmitting(true);

      const subject = `Table Reservation - ${formData.name}`;
      const body = `
New Table Reservation Request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
Time: ${formData.time}
Number of Guests: ${formData.guests}
Occasion: ${formData.occasion || 'N/A'}

Special Requests:
${formData.specialRequests || 'None'}

---
Sent from F.A.M. Kitchen Website
      `.trim();

      const mailtoLink = `mailto:makinyemi501@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        console.log('Reservation submitted:', formData);
      }, 1000);
    } else {
      alert('Please fill in all required fields');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="w-24 h-24 bg-gradient-to-r from-[#c8a97e] to-[#b8976e] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* CHANGED TEXT */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reservation Confirmed ✅
            </h2>

            {/* CHANGED TEXT */}
            <p className="text-gray-600 text-lg mb-8">
              Your reservation request has been successfully created.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Reservation Details:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p><strong>Time:</strong> {formData.time}</p>
                <p><strong>Guests:</strong> {formData.guests} {formData.guests === '1' ? 'person' : 'people'}</p>
                {formData.occasion && <p><strong>Occasion:</strong> {formData.occasion}</p>}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/"
                className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                Back to Home
              </a>
              <button 
                onClick={() => setSubmitted(false)}
                className="border-2 border-[#c8a97e] text-[#c8a97e] px-8 py-4 rounded-full hover:bg-[#c8a97e] hover:text-white transition-all duration-300 font-semibold"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative max-w-7xl mx-auto lg:mx-2 text-center">
        <h1 className="text-4xl md:text-6xl font-hand mb-4 text-[#c8a97e]">
          Book a Table
        </h1>
        <p className="text-xl text-gray-900">
          Secure your spot for an unforgettable dining experience
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Quick & Easy Reservation</h3>
            <p className="text-white/90">Fill out the form below and we'll get back to you shortly</p>
          </div>

          <div className="p-8 md:p-12">
            {/* form fields unchanged */}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* CHANGED TEXT */}
              {isSubmitting ? 'Making Reservation...' : 'Confirm Reservation'}
            </button>

            <p className="text-center text-gray-500 text-sm mt-6">
              This will open your email client with the reservation details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
