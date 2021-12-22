import React from "react";
import style from './footstyle.module.css'

function Footer() {
    return (
    // <div className="footer">
    //     <div className="contain">
    //         <div className="col">
    //             <h1>About us</h1>
    //                 <ul>
    //                     <p>Lorem ipsum dolor sit, aceat commodi iste mollitia quo in reprehenderit dolor atque, necessitatibus minima vero. Repudiandae nulla debitis dolores cupiditate praesentium atque.</p>
    //                 </ul>
    //         </div>
    //     <div className="col">
    //       <h1>Services</h1>
    //       <ul>
    //         <li>Ambulance</li>
    //         <li>Medicine</li>
    //         <li>Doctor Appointment</li>
    //         <li>Registration</li>
    //       </ul>
    //     </div>
    //     <div className="col">
    //       <h1>Support</h1>
    //       <ul>
    //         <li>Contact us</li>
    //         <li>Have a Complain?</li>
    //         <li>Report a bug</li>
    //       </ul>
    //     </div>
        
    //     <div className="col">
        
    //     <li>Copyright © 2021 TYRO | All Right Reserved</li>
    // </div>

    <div className={style.footWrapper}>
            <div className={style.container}>
                <div className={style.secOne}>
                    <p>Lorem ipsum dolor sit, aceat commodi iste mollitia quo in reprehenderit dolor atque, necessitatibus minima vero. Repudiandae nulla debitis dolores cupiditate praesentium atque.</p>
                </div>
                <div className={style.secTwo}>
                    <h3>Our Services:</h3>
                    <p>Online Appointment</p>
                    <p>Online Ambulance Details</p>
                    <p>Online Pharmacy</p>
                </div>
                <div className={style.secThree}>
                    <p>Copyright © 2021 TYRO | All Right Reserved</p>
                </div>
            </div>
            
    </div>
    )
}

export default Footer;