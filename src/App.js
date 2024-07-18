import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode,setMode]= useState('light');
  const [text,setText]= useState('Dark');
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      setText('light');
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    }else{
      setMode('light');
      setText('dark');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode} text={text}/>
    <div className="container">
      <TextForm heading="Enter the text for analyze below"/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;