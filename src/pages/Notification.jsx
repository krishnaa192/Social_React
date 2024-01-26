import React from 'react'
import '../css/notification.css'
import Navbar from '../component/Navbar'
import img2 from '../img/img2.jpg'

function Notification() {
    return (

        <div className="main-notification">
            <div className="notification-header">
                <Navbar />
            </div>
            <div className="notification-body">
                <h2>Notifications</h2>


                {/* -------------------------------------------- */}
                <div className="notiifcation-day">
                    <h3>Today</h3>

                    <div className="notification-box">
                        <div className="notification-image">
                            <img src={img2} alt="" />
                        </div>

                        <div className="notification-text">
                        <a href=""> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p></a>  
                        <button> <a href="">Remove</a></button>
                        </div>
                    </div>
                    <div className="notification-box">
                        <div className="notification-image">
                            <img src={img2} alt="" />
                        </div>
                        <div className="notification-text">
                        <a href=""> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p></a>  
                        <button> <a href="">Remove</a></button>
                        </div>
                    </div>
                </div>


{/* -------------------------------------------- */}
<div className="notiifcation-day">
                    <h3>Tomorrow</h3>

                    <div className="notification-box">
                        <div className="notification-image">
                            <img src={img2} alt="" />
                        </div>

                        <div className="notification-text">
                        <a href=""> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p></a>  
                            <button> <a href="">Remove</a></button>
                        </div>
                    </div>
                   
                </div>
{/* --------------------------------------------
 */}
 <div className="notiifcation-day">
                    <h3>Past</h3>

                    <div className="notification-box">
                        <div className="notification-image">
                            <img src={img2} alt="" />
                        </div>

                        <div className="notification-text">
                        <a href=""> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p></a>  
                        <button> <a href="">Remove</a></button>
                        </div>
                    </div>
                    <div className="notification-box">
                        <div className="notification-image">
                            <img src={img2} alt="" />
                        </div>
                        <div className="notification-text">
                         <a href=""> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p></a>  
                         <button> <a href="">Remove</a></button>
                        </div>
                    </div>
                    <div className="notification-box">
                        <div className="notification-image">
                            <img src={img2} alt="" />
                        </div>
                        <div className="notification-text">
                        <a href=""> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p></a>  
                        <button> <a href="">Remove</a></button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Notification
