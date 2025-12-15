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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.date && formData.time) {
      setSubmitted(true);
      console.log('Reservation submitted:', formData);
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reservation Confirmed! 🎉</h2>
            <p className="text-gray-600 text-lg mb-8">
              Thank you for booking with F.A.M. Kitchen! We've sent a confirmation to your email.
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
          <div className="w-24 h-1 bg-gradient-to-r  mx-auto mb-6"></div>
          
          <h1 className="text-4xl md:text-6xl font-hand mb-4 text-[#c8a97e]">Book a Table</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-gray-900">
            Secure your spot for an unforgettable dining experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Booking Form */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Info Section */}
          <div className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Quick & Easy Reservation</h3>
            <p className="text-white/90">Fill out the form below and we'll get back to you shortly</p>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#c8a97e] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#c8a97e] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#c8a97e] focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#c8a97e] focus:outline-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="10+">10+ Guests</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#c8a97e] focus:outline-none transition-colors"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#c8a97e] focus:outline-none transition-colors"
                >
                  <option value="">Select a time</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="12:30 PM">12:30 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="1:30 PM">1:30 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="8:30 PM">8:30 PM</option>
                  <option value="9:00 PM">9:00 PM</option>
                </select>
              </div>

              {/* Occasion */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Special Occasion (Optional)
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#c8a97e] focus:outline-none transition-colors"
                >
                  <option value="">None</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Business Dinner">Business Dinner</option>
                  <option value="Date Night">Date Night</option>
                  <option value="Celebration">Celebration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Special Requests or Dietary Requirements (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#c8a97e] focus:outline-none transition-colors resize-none"
                  placeholder="Please let us know if you have any dietary restrictions, allergies, or special seating preferences..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Confirm Reservation
            </button>

            <p className="text-center text-gray-500 text-sm mt-6">
              By submitting this form, you agree to receive reservation confirmations via email and SMS
            </p>
          </div>
        </div>

      </div>
      </div>

      
    
  );
};

export default BookTable;