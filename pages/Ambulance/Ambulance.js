import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./appnmt.module.css";
import { FiPhoneCall } from "react-icons/fi";
import Loader from 'react-loader-spinner'


const Ambulance = () => {
    const [searchData, setSearchData] = useState("");

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetching = async (url) => {
        setLoading(true)
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false)
    };

    useEffect(() => {
        fetching("/api/ambulances/all");
    }, []);

    return (
        <div className={style.ambulContainer}>
        {loading && <div className="loaderContainer">
                <Loader type="Puff" color="#00BFFF" height={200} width={200} />
            </div>}
            <div className={style.searchWrapper}>
                <label htmlFor="inp"> Search Location: </label>
                <input
                    type="text"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                />
            </div>
            <div className={style.tableHolder}>
            <div className="table" className={`${style.head}`}>
                <div>Location</div>
                <div>Phone Num</div>
                <div>Availability</div>
                <div>Call</div>
            </div>
            {data?.map((obj) => {
                if (
                    obj.location.toLowerCase().includes(searchData) ||
                    obj.location.includes(searchData) ||
                    obj.location.toUpperCase().includes(searchData)
                ) {
                    return (
                        <div key={Math.random()} className={style.holder}>
                            <div className="amb-location">{obj.location}</div>
                            <div className="amb-phnum">{obj.phone}</div>
                            {obj.isAvailable ? (
                                <div>Available</div>
                            ) : (
                                <div>Not Available</div>
                            )}
                            <button>
                                {" "}
                                <a href={`tel:${obj.phone}`}>
                                    {" "}
                                    Call <FiPhoneCall />
                                </a>
                            </button>
                        </div>
                    );
                }
               
            })}
             </div>
        </div>
    );
};

export default Ambulance;
