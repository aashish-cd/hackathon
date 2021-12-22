import React from "react";
import style from "./tamb.module.css";
import Link from "next/link";

const ToAmbulance = () => {
    return ( <div className={style.ambSection} >
            <div className={style.wholeToAppointContainer}>
                <div className={style.details}>
                    <h2>Find Ambulance</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam quidem, odit repellat iste repellendus aliqui
                        ullam nobis possimus quas quaerat, sint recusandae
                        debitis et consectetur facilis unde veritatis neque
                        deserunt!
                    </p>
                    <Link href="/Ambulance/Ambulance">
                        <button>Search For An Ambulance</button>
                    </Link>
                </div>
                <div className={style.imageHolder}>
                    <img src="./amb.png" alt="" />
                </div>
            </div>
            </div>
    );
};

export default ToAmbulance;
