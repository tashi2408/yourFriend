import React from 'react';
import './ContactUs.css';
import ConatctUs from './contact.svg';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact-section ">
        <h1 className="primary-heading">Contact Us</h1>
        <div className="contact-divider">
          <div className="contact-left">
            <img src={ConatctUs} />
          </div>
          <div>
            <form>
              <div className="contact-form">
                <div className="row-cont">
                  <div className="row">
                    <span>
                      <input
                        className="clean-slide"
                        id="age"
                        type="text"
                        placeholder="Your Name"
                      />
                      <label for="age">Name</label>
                    </span>
                    <span>
                      <input
                        className="clean-slide"
                        id="height"
                        type="email"
                        placeholder="Your Email"
                      />
                      <label for="height">Email</label>
                    </span>
                    <span>
                      <input
                        className="clean-slide"
                        id="height"
                        type="number"
                        placeholder="Your Number"
                      />
                      <label for="height">Mobile No.</label>
                    </span>
                    <span>
                      <input
                        className="clean-slide"
                        id="height"
                        type="text"
                        placeholder="Type a Message!"
                      />
                      <label for="height">Message</label>
                    </span>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '5px',
                      }}
                    >
                      <a href="#" className="btn">
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
