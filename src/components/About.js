import React, { useState, useEffect } from 'react';

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid black',
  });

  useEffect(() => {
    if (props.mode === 'light') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
      });
      document.body.style.backgroundColor = 'white';
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      document.body.style.backgroundColor = 'black';
    }
  }, [props.mode]);

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              About
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>Welcome to TextUtils, your go-to tool for text manipulation and analysis. Designed to simplify text processing tasks, TextUtils allows users to effortlessly convert text to uppercase or lowercase, remove extra spaces, and quickly copy or clear text. With real-time feedback, users receive instant word count, character count, and reading time estimates. The user-friendly interface includes a dark mode for comfortable viewing in low-light environments. Whether you're a student, writer, or professional, TextUtils enhances productivity and ensures your text is always formatted correctly. Enjoy a seamless and efficient text management experience with TextUtils.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
            >
              Our Mission
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>At TextUtils, our mission is to provide a powerful yet user-friendly text manipulation tool that enhances productivity and simplifies text processing tasks. We aim to empower users—whether they are students, writers, or professionals—by offering intuitive features for text conversion, whitespace management, and real-time analysis. Our goal is to ensure that everyone can efficiently manage and format their text with ease, making TextUtils an essential tool in their daily workflow. With a commitment to continuous improvement and user satisfaction, we strive to deliver a seamless and efficient text management experience for all.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              Our Vision
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
             <p>Our vision at TextUtils is to become the leading platform for text manipulation and analysis, recognized for our innovation, simplicity, and user-centric design. We aspire to continuously evolve and expand our features to meet the diverse needs of our users, enabling them to handle their text-related tasks with utmost efficiency and accuracy. By fostering a community of users who value productivity and precision, we aim to set new standards in text management solutions. We envision a future where TextUtils is an indispensable tool for individuals and professionals worldwide, streamlining their workflow and enhancing their digital text experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
