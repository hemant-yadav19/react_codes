import React from 'react'
import photo from "../assets/image.jpg";
export default function Card(props) {
  return (
    <div className="mainContainer">

    
    <div className='container'>
        <div className='imageContainer'>
        <img src={photo} alt='horse'/>
        </div>
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid consequuntur laudantium cum pariatur minus molestiae eum tempore. Consectetur fugiat asperiores quaerat soluta tempore eaque excepturi veritatis quas dolore cumque.</p>
    </div>
   </div>
  )
}
