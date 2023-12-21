// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { CustomButton } from './CustomButton';

function App() {
  return (
    <div>
      <CustomButton className={'green'} text={'I'} />
      <CustomButton className={'blue'} text={'know'} />
      <CustomButton className={'purple'} text={'React!'} />
    </div>
  );
}

export default App;
