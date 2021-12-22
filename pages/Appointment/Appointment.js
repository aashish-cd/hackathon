import React, { useState, useEffect} from 'react'
import axios from 'axios'
import style from './appointment.module.css'

const Appointment = () => {

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
        <div className={`${style.holder} ${style.head}`}>
            <div>Name</div>
            <div>Department</div>
            <div>Time</div>
            <div>Hospital</div>
            <div>Location</div>
            <div>Appointment</div>
        </div>
        {
            data?.map((obj) => {
                if(obj.name.toLowerCase().includes(searchData) || obj.name.includes(searchData) || obj.name.toUpperCase().includes(searchData)) {
                return (
                    <div key={Math.random()} className={style.holder}>
                         <div>{obj.name}</div>
                         <div>{obj.department}</div>
                         <div>{obj.workingHours}</div>
                         <div>{obj.hospital}</div>
                         <div>{obj.location}</div>
                         <button>Make an appointment</button>
                     </div> 
                )
                }
            })
        }
        </>
    )
}

export default Appointment
