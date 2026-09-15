import React from 'react'

export default function NewCard() {
  return (
    <div className='parent'>
        <div className="card">
            <div className="top">
                <img src='https://logolook.net/wp-content/uploads/2021/06/Symbol-Amazon.png'/>
                <button>save</button>
            </div>
            <div className="center">
                <div><h3>Amazon <span>5 Days ago</span></h3></div>
                <h2>Senior UI/UX designer</h2>
            </div>
            <div className="bottom">
            <p>Mumbai,India</p>
            <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}
