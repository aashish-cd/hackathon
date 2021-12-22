import React from "react";
import style from "./tapp.module.css";
import Link from 'next/link'

const ToAppointment = () => {
    return (
        <div className={style.wholeToAppointContainer}>
            <div className={style.imageHolder}>
                <img src="./dc.png" alt="" />
            </div>
            <div className={style.details}>
                <h2>Appointment</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam quidem, odit repellat iste repellendus aliquid ullam
                    nobis possimus quas quaerat, sint recusandae debitis et
                    consectetur facilis unde veritatis neque deserunt!
                </p>
                <Link href="/Appointment/Appointment">
                    <button>Make An Appointment</button>
                </Link>
            </div>
            
        </div>
    );
};

export default ToAppointment;
