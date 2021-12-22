import React from "react";
import style from "./topharmacy.module.css";

function ToPharmacy() {
    return (
        <div className={style.wholeToAppointContainer}>
            <div className={style.imageHolder}>
                <img src="./pharmacy.png" alt="" />
            </div>
            <div className={style.details}>
                <h2>Online Pharmacy</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam quidem, odit repellat iste repellendus aliquid ullam
                    nobis possimus quas quaerat, sint recusandae debitis et
                    consectetur facilis unde veritatis neque deserunt!
                </p>
                <button>Start Shopping</button>
            </div>
        </div>
    );
}

export default ToPharmacy;
