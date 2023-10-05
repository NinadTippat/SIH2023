import React, { useRef } from 'react';
import './Home.css';
import heroSectionImg from '../Assets/hero-section-img.png';
import middlesection2 from '../Assets/middle-section2.png';
import authenticate from '../Assets/authentication.png';
import interactionWithChatbot from '../Assets/interaction-with-chatbot.png';
import lodging from '../Assets/lodging-grivance.png';
import statusTracking from '../Assets/status-tracking.png';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../Assets/logo.png'


const Home = () => {
  const middleSectionRef = useRef(null);

  const scrollToMiddleSection = () => {
    middleSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-left">
          <div className="hero-section-heading">
            <h1>निवाran - </h1>
            <span>Your Voice Matters</span>
          </div>
          <div className="hero-section-para">
            <p>
              Welcome to <b>निवाran</b>, your platform for addressing concerns and finding solutions. We're here to
              listen and make a difference together."
            </p>
          </div>
          <button className="hero-button" onClick={scrollToMiddleSection}>
            Explore
          </button>
        </div>
        <div className="home-right">
          <img src={heroSectionImg} alt="" />
        </div>
      </div>

      {/* Exploration Section */}

      <div ref={middleSectionRef} className="middle-section">
        <div className="middle-section-para">
          <p>
            Aims to revolutionize the grievance redressal process by combining innovative technology with a
            citizen-centric approach where citizens can interact with a user-friendly website through multilingual
            AI-Chatbot that allows them to lodge grievances seamlessly, obtain data on resolved grievances, and track the
            status of their complaints. Key features of this solution include:
          </p>
          <div className="sec-middle-section">
            <div className="sec-left">
              <ul>
                <li>Multilingual Chatbot Interaction</li>

                <li>Gathering Grievance Information</li>

                <li>History and Reports Access</li>

                <li>AI-Driven Departmental Routing</li>

                <li>Generative AI for Formal Complaint Generation</li>

                <li>Unique Grievance ID</li>

                <li>Real-time Tracking</li>

                <li>Citizen Feedback</li>
              </ul>
            </div>
            <div className="sec-right">
              <img src={middlesection2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section  */}

      <div className="process-flow">
        <h1>Process Flow</h1>
        <div className="flow">
          <div className="flow-card">
            <img src={authenticate} alt="" />
            <p>Authenticate</p>
          </div>
          <div className="flow-card">
            <img src={interactionWithChatbot} alt="" />
            <p>Interaction with chatbot</p>
          </div>
          <div className="flow-card">
            <img src={lodging} alt="" />
            <p>Lodging Grievance and Tracking ID Generation</p>
          </div>
          <div className="flow-card">
            <img src={statusTracking} alt="" />
            <p>Status Tracking</p>
          </div>
        </div>
      </div>

      <div className="register">
        <button className='hero-button register-btn'> Register Complaint or Lodge Grievance</button>
      </div>

      <div className="realtime-analysis">
        <h1>Real Time Analytics</h1>
        <div className="analytics_boxs">
          <div className="analytics-box">
              <h1>1702</h1>
              <p>Resolved</p>
          </div>
          <div className="analytics-box">
              <h1>2082</h1>
              <p>Visitors</p>
          </div>
          <div className="analytics-box">
              <h1>217</h1>
              <p>Pending</p>
          </div>
        </div>
      </div>

      <hr />      
      <div className="footer">
        <section>
          <img src={logo} alt="" />
        </section>
        <section>
          Copyright © All Rights Reserved
        </section>
      </div>
    </>
  );
};

export default Home;
