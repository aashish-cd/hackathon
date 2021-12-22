import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./medstyle.module.css";

const Medicine = () => {
    const [data, setData] = useState([]);

    const fetching = async (url) => {
        const response = await axios.get(url);
        setData(response.data);
    };

    useEffect(() => {
        fetching("/api/stores/all");
    }, []);

    console.log(data);

    const transfer = () => {

    }
    return (
        <div className={style.medicineWrapper}>
            {data?.map((obj) => {
                return (
                    <div className={style.cardHolder} key={Math.random()} onClick={(e) => {console.log(e.target.parentElement)}}>
                        <div className={style.imgHolder}>
                            <img src={obj.image} alt="" />
                        </div>
                        <div key={Math.random()}></div>
                        <div>
                            {obj.name}({obj.quantityInMg})
                        </div>
                        <div>Rs. {obj.price}</div>
                        <div>In Stock: {obj.stock}</div>
                        <div></div>
                    </div>
                );
            })}
        </div>
    );
};

export default Medicine;
