import React, { useState, useEffect} from 'react'
import axios from 'axios'
import style from './appnmt.module.css'
import style2 from './appointment.module.css'

const Appointment = () => {

    const [searchData, setSearchData] = useState("");

    const [data, setData] = useState([]);

    const fetching = async (url) => {
        const response = await axios.get(url);
        setData(response.data);
    };

    useEffect(() => {
        fetching("http://localhost:3000/doc.json");
    }, []);

    console.log(data);

    return (
        <>
        <input type="text" value={searchData} onChange={e => setSearchData(e.target.value)}/>
        <div className={`${style.holder} ${style.head}`}>
            <div>Name</div>
            <div>Department</div>
            <div>Availability</div>
            <div>Hospital</div>
            <div>Location</div>
            <div>Appointment</div>
        </div>
        {
            data?.map((obj) => {
                if(obj.name.toLowerCase().includes(searchData) || obj.name.includes(searchData) || obj.name.toUpperCase().includes(searchData)) {
                return (
                    <div key={Math.random()} className={style.holder}>
                         <div className="doc-name">{obj.name}</div>
                         <div className="doc-department">{obj.department}</div>
                         <div className="available-days">{obj.days}</div>
                         <div className="doc-hospital">{obj.hospital}</div>
                         <div className="doc-location">{obj.location}</div>
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
