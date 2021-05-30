import React from 'react';
import Title from "../Heading/Title";
import Blog from '../Blog/Blog'
import Segment from '../Ways to Help/segment'
import Timeline from '../Timeline/Timeline'
import Overview from "../overview/Overview";
import ContactUs from "../contactUs/ContactUs.js";
import Footer from "../footer/Footer.js";
import OurWork from "../ourwork/OurWork";

function Home() {
    return (
        <div>
            <Title />
            <Segment />
            <Timeline />
            <Blog />
            <Overview />
            <OurWork />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home;
