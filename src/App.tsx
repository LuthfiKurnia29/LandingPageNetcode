import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';

// const links = [
//   { name: 'Open roles', href: '#' },
//   { name: 'Internship program', href: '#' },
//   { name: 'Our values', href: '#' },
//   { name: 'Meet our leadership', href: '#' },
// ]
// const stats = [
//   { name: 'Offices worldwide', value: '12' },
//   { name: 'Full-time colleagues', value: '300+' },
//   { name: 'Hours per week', value: '40' },
//   { name: 'Paid time off', value: 'Unlimited' },
// ]

function App() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}

export default App;