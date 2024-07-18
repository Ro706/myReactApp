import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleOnclick=()=>{
        // console.log("handleOnClick"+text);
        let newText = text.toUpperCase();
        SetText(newText);
    }
    const handleOnclickLow=()=>{
        let newText = text.toLowerCase();
        SetText(newText);
    }
    const clear=()=>{
        SetText("");
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        SetText(event.target.value);
    }
    const[text,SetText]=useState("");
  return (
    <>
    <div className='container'>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnclick}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleOnclickLow}>Convert To Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={clear}>clear</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


TextForm.prototype ={
    heading: PropTypes.string
}
