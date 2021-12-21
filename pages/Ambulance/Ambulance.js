import React, { useEffect, useState } from "react";
import axios from "axios";
import style from './appnmt.module.css'
import { FiPhoneCall } from "react-icons/fi"

const Ambulance = () => {
    const [searchData, setSearchData] = useState("");

    const [data, setData] = useState([]);

    const fetching = async (url) => {
        const response = await axios.get(url);
        setData(response.data);
        };

    useEffect(() => {
        fetching("http://192.168.18.118:5000/api/ambulances/all");
    }, []);


    return (
        <>
        <input type="text" value={searchData} onChange={e => setSearchData(e.target.value)}/>
        <div className="table" className={`${style.holder} ${style.head}`}>
            <div>Location</div>
            <div>Phone Num</div>
            <div>Availability</div>
            <div>Call</div>
        </div>
            {data?.map((obj) => {
                if(obj.location.toLowerCase().includes(searchData) || obj.location.includes(searchData) || obj.location.toUpperCase().includes(searchData)) {
                return (
                    <div key={Math.random()} className={style.holder}>
                        <div className="amb-location">{obj.location}</div>
                        <div className="amb-phnum">{obj.phone}</div>
                        {obj.isAvailable ? <div>Available</div> : <div>Not Available</div>}
                        <button>Call  <FiPhoneCall /></button>
                    </div>
                );
                }
            })}
        </>
    );
};

export default Ambulance;
