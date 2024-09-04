import React from 'react'
import "./Body.css"
import img6 from "../mycomponent/image/img6.jpg"
function Body() {
  return (

    <div id='wrapper-div'>
       <div id="main-div" class="clearfix">
      <div id="sidebar-div"><img 
            src={img6} 
            alt="Sidebar" 
            className="sidebar-image" 
          /></div>
      <div id="body-area-div">
      <h1>Welcome to the Body Area</h1>
          <p>This is some text content inside the body area div. You can add any information or description here that you want to display to your users.</p>
          <p>Feel free to style this text using CSS to make it look more appealing. You can add more paragraphs, lists, images, or any other HTML content.</p>
          <p>MIS Innovate has a proven history of successfully accomplishing complex IT projects since its inception. Our customized IT solutions and services are of great assistance to growing and established business organizations to cope with the cut-throat competition of this digital era. Our professionals encompass:</p>
      </div>
    </div>
    </div>
  )
}

export default Body
