import React from "react";
import Overview from "./components/overview/Overview";
import ContactUs from "./components/contactUs/ContactUs.js";
import Footer from "./components/footer/Footer.js";
import OurWork from "./components/ourwork/OurWork";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Overview />
        <OurWork />

        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
