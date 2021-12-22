import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./appointment.module.css";
import Link from "next/link";
import Form from "../../component/Form";

const Appointment = () => {

    const [docName, setDocName] = useState("")
    const [overlay, setOverlay] = useState(false);

    const overlayController = (e,value) => {
        setOverlay(value);
        if(e) {
        let parent = e.target.parentElement;
        setDocName(parent.firstElementChild.textContent);
        }
    };

    const [searchData, setSearchData] = useState("");

    const [data, setData] = useState([]);

    const fetching = async (url) => {
        const response = await axios.get(url);
        setData(response.data);
    };

    useEffect(() => {
        fetching("http://192.168.18.118:5000/api/doctors/all");
    }, []);

    console.log(data);

    return (
        <>
            <div className={style.searchWrapper}>
                <label htmlFor="inp"> Search Name: </label>
                <input
                    type="text"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                />
            </div>
            <div className={`${style.head}`}>
                <div className="1">Name</div>
                <div className="2">Department</div>
                <div className="3">Time</div>
                <div className={style.four}>Hospital</div>
                <div className={style.five}>Location</div>
                <div className={style.six}>Appointment</div>
            </div>
            {data?.map((obj) => {
                if (
                    obj.name.toLowerCase().includes(searchData) ||
                    obj.name.includes(searchData) ||
                    obj.name.toUpperCase().includes(searchData)
                ) {
                    return (
                        <div key={Math.random()} className={style.holder}>
                            <div>{obj.name}</div>
                            <div>{obj.department}</div>
                            <div>{obj.workingHours}</div>
                            <div>{obj.hospital}</div>
                            <div>{obj.location}</div>
                            <button
                                onClick={(e) => {
                                    overlayController(e,true);
                                }}
                            >
                                Make an appointment
                            </button>
                        </div>
                    );
                }
            })}
            {overlay && <Form overlay={overlayController} docName = {docName} />}
        </>
    );
};

export default Appointment;
