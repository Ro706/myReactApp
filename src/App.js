import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="AboutTextUtils"/>
    <div className="container">
      <TextForm heading="Enter the text for analyze below"/>
    </div>
    </>
  );
}

export default App;