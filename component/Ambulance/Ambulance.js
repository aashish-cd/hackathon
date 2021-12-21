import React, { useEffect, useState } from "react";
import axios from "axios";
import style from '../Appointment/appnmt.module.css'

const Ambulance = () => {
    const [data, setData] = useState([]);

    const fetching = async (url) => {
        const response = await axios.get(url);
        setData(response.data);
    };

    useEffect(() => {
        fetching("http://localhost:3000/amb.json");
    }, []);

    console.log(data);

    return (
        <>
        <div className="table" className={`${style.holder} ${style.head}`}>
            <div>Location</div>
            <div>Phone Num</div>
            <div>Availability</div>
            <div>Call</div>
        </div>
            {data?.map((obj) => {
                return (
                    <div key={Math.random()} className={style.holder}>
                        <div className="amb-location">{obj.location}</div>
                        <div className="amb-phnum">{obj.phnum}</div>
                        <div className="amb-isavailable">{obj.isAvailable}</div>
                        <button>Call</button>
                    </div>
                );
            })}
        </>
    );
};

export default Ambulance;
