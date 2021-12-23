import React from "react";
import style from './footstyle.module.css'

function Footer() {
    return (
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