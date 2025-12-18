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

  const handleSubmit = async (e) => {
    // Prevent default form behavior if necessary
    if (formData.name && formData.email && formData.phone && formData.date && formData.time) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://formspree.io/f/mzdpbdzy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            // Format the date for the email notification
            date: new Date(formData.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          console.log('Reservation sent to Formspree');
        } else {
          alert('Submission failed. Please try again.');
        }
      } catch (error) {
        alert('There was an error connecting to the server.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert('Please fill in all required fields (Name, Email, Phone, Date, and Time)');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="w-24 h-24 bg-[#c8a97e] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reservation Sent! ✅</h2>
            <p className="text-gray-600 text-lg mb-8">We have received your request and will contact you shortly to confirm.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="bg-[#c8a97e] text-white px-8 py-4 rounded-full font-semibold">Back to Home</a>
              <button onClick={() => setSubmitted(false)} className="border-2 border-[#c8a97e] text-[#c8a97e] px-8 py-4 rounded-full font-semibold">Make Another Reservation</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-hand text-[#c8a97e] mb-2">Book a Table</h1>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#c8a97e] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600">Secure your spot for an unforgettable dining experience</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-[#c8a97e] text-white p-6 text-center">
            <h3 className="text-xl font-bold">Quick & Easy Reservation</h3>
          </div>

          <div className="p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-xl" required />
              </div>
              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-xl" required />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-xl" required />
              </div>
              {/* Guests */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
                <select name="guests" value={formData.guests} onChange={handleChange} className="w-full p-3 border rounded-xl">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>)}
                  <option value="9+">9+ People</option>
                </select>
              </div>
              {/* Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Date *</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border rounded-xl" required />
              </div>
              {/* Time */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Time *</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-3 border rounded-xl" required />
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Occasion (Optional)</label>
              <input type="text" name="occasion" value={formData.occasion} onChange={handleChange} placeholder="Birthday, Anniversary, etc." className="w-full p-3 border rounded-xl" />
            </div>

            {/* Requests */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Special Requests</label>
              <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows="3" className="w-full p-3 border rounded-xl"></textarea>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-[#c8a97e] text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Sending Request...' : 'Confirm Reservation'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;