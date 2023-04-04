import React from "react"
import twitterlogo from "C:/Users/jeeva/Documents/GitHub/Digital_Business_Card/Digital_Business_Card/Digital_Business_Card/pictures/81609.png"
import facebooklogo from "C:/Users/jeeva/Documents/GitHub/Digital_Business_Card/Digital_Business_Card/Digital_Business_Card/pictures/20837.png"
import instagramlogo from "C:/Users/jeeva/Documents/GitHub/Digital_Business_Card/Digital_Business_Card/Digital_Business_Card/pictures/717392.png"
import linkedinlogo from "C:/Users/jeeva/Documents/GitHub/Digital_Business_Card/Digital_Business_Card/Digital_Business_Card/pictures/2111532.png"
import githublogo from "C:/Users/jeeva/Documents/GitHub/Digital_Business_Card/Digital_Business_Card/Digital_Business_Card/pictures/2111432.png"
export default function Footer() {
    return(
        <div>
            <div className="footer--box">
            <a href="https://twitter.com/jeevan_segu" ><img src={twitterlogo} className="footer--twitter"></img></a>
            <a href="https://www.facebook.com/jeevan.segu/" ><img src={facebooklogo} className="footer--facebook"></img></a>
            <a href="https://www.instagram.com/jeevan_segu/" ><img src={instagramlogo} className="footer--instagram"></img></a>
            <a href="https://www.linkedin.com/in/jeevan-r-segu-88a25a263/" ><img src={linkedinlogo} className="footer--linkedin"></img></a>
            <a href="https://github.com/jeevansegu" ><img src={githublogo} className="footer--github"></img></a>
            </div>
        </div>
    )
}