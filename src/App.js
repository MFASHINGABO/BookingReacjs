import React from 'react';
import BookingForm from './components/BookingForm';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
     <NavBar/>
      <BookingForm />
      <Footer/>
    </div>
  );
}

export default App;