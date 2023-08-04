// src/components/BookingForm.js
import React, { useState } from 'react';


const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, such as sending data to the server
    console.log({ name, email, checkInDate, checkOutDate });
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-4 border rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Booking Form</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Check-in Date</label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Check-out Date</label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
    </form>
  );
};

export default BookingForm;