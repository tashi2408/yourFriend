import React from 'react'
import './segment.css'
import c from './Images/c.png'
import b from './Images/b.png'
import f from './Images/f.png'
import mm from './Images/mm.png'

function Segment() {
    return (
        <div class="main_body">
        <div class="upperpart">
            <h1 className='primary-heading'> WE MAY HELP-WITH YOUR PROBLEMS </h1>
        </div>
        <div class="lowerpart">
            
            <div class="innerbox">
                <div class="icon 1st">
                    <img className="imgsegcss" src={c}></img>
                </div>
                <div class="para">
                    <div class="heading">
                        <h1>INTERACT  WITH  OUR  REPRESENTATIVE</h1>
                    </div>
                    <div class="rest">
                        <p>Chat anonymously with a YourDost expert who's here to help you and not judge you</p>
                    </div>
                </div>
            </div>
            <div class="innerbox">
                <div class="icon 2nd">
                    <img className="imgsegcss" src={mm}></img>
                </div>
                <div class="para">
                    <div class="heading">
                        <h1>SHARE YOUR CONCERN</h1>
                    </div>
                    <div class="rest">
                        <p>Open up to your Expert in a sapce where you get the guidance you need,and your concerns get
                            the attention they derserve</p>
                    </div>
                </div>
            </div>
            <div class="innerbox">
                <div class="icon 3rd">
                    <img className="imgsegcss" src={b}></img>
                </div>
                <div class="para">
                    <div class="heading">
                        <h1>CONNECT TO OUR EXPERTS</h1>

                    </div>
                    <div class="rest">
                        <p>With 24X7 support from our expert,bid goodbye to you old self and be on your way to becoming
                            a better you</p>
                    </div>
                </div>
            </div>
            <div class="innerbox">
                <div class="icon 4th">
                    <img className="imgsegcss" src={f} alt=""></img>
                </div>
                <div class="para">
                    <div class="heading">
                        <h1>UNLEASH A BETTER YOU</h1>
                    </div>
                    <div class="rest">
                        <p>The aim and final end of all music should be none other than the glory of God and the
                            refreshment of the soul</p>
                    </div>
                </div>
            </div>
        
    </div>
    </div>
    )
}

export default Segment;
