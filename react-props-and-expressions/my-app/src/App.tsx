// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { CustomButton } from './CustomButton';

function App() {
  return (
    <div>
      <CustomButton color={'green'} text={'I'} />
      <CustomButton color={'blue'} text={'know'} />
      <CustomButton color={'purple'} text={'React!'} />
    </div>
  );
}

export default App;
