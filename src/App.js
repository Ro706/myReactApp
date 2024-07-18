import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="AboutTextUtils"/>
    <div className="container">
      <TextForm heading="Enter the text for analyze below"/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;