import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);

    const navBarHandler = () => {
        setShowNav(!showNav);
    };

    useEffect(() => {
        window.addEventListener("resize", function (event) {
            let newWidth = window.innerWidth;
            if (newWidth >= 690) {
                setShowNav(true);
            }
        });
    }, []);

    return (
        <div className={style.NavbarContainer}>
            <div className={style.iconContainer}>
                <Link href='/'>
                <img src="/heart.png" alt="" className={style.icon} style={{cursor:'pointer'}} />
                </Link>
            </div>
            {showNav && (
                <div className={style.Navbar}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Ambulance/Ambulance">Ambulance</Link>
                    </li>
                    <li>
                        <Link href="/Appointment/Appointment">Appointment</Link>
                    </li>
                    <li>
                        <Link href="/Medicines/Medicine">Pharmacy</Link>
                    </li>
                </div>
            )}
            <div className={style.barHolder}>
                <FaBars className={style.Bar} onClick={() => navBarHandler()} />
            </div>
        </div>
    );
};

export default Navbar;
