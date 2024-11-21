// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//     </>
//   )
// }

// export default App

import React from 'react';
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Product Details</h1>
      <ProductPage />
    </div>
  );
};

export default App;
