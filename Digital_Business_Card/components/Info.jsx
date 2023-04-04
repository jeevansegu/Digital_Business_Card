import React from "react"
import photo from "C:/Users/jeeva/Documents/GitHub/Digital_Business_Card/Digital_Business_Card/Digital_Business_Card/pictures/WhatsApp Image 2023-02-27 at 15.03.32.jpg"
import icon from "C:/Users/jeeva/Documents/GitHub/Digital_Business_Card/Digital_Business_Card/Digital_Business_Card/pictures/—Pngtree—email icon design_5571212.png"
export default function Info() {
    return (
        <div>
            <img className="info--picture" src={photo} />
            <h1 className="info--name">Adharsh Natarajan</h1>
            <h1 className="info--role">Frontend Developer</h1>
            <h1 className="info--link"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">adharsh.io</a></h1>
            <a href="mailto: jeevansegu03@gmail.com"><button type="button" className="info--email"><img src={icon} className="info--email--icon"></img>Email</button></a>
        </div>
    )
}