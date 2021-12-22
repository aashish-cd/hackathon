import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./medstyle.module.css";
import Link from "next/link";
import { context } from "../../context/context";
import IndividualMed from "../IndividualMed/IndividualMed";

const Medicine = () => {
    const [objToSend, setobjToSend] = useState({});
    const [data, setData] = useState([]);
    const [isVisible, setisVisible] = useState(false);

    const fetching = async (url) => {
        const response = await axios.get(url);
        setData(response.data);
    };

    useEffect(() => {
        fetching("/api/stores/all");
    }, []);

    const transfer = (obj) => {
        setobjToSend({ ...obj });
        setisVisible(true);
        window.scrollTo(0,0);
    };

    let object = { ...objToSend };
    return (
        <>
          {isVisible &&  <Link href="./IndividualMed/IndividualMed">
                <context.Provider value={objToSend}>
                    <IndividualMed />
                </context.Provider>
            </Link>
            }
            <div className={style.medicineWrapper}>
                {data?.map((obj) => {
                    return (
                        <div
                            className={style.cardHolder}
                            key={Math.random()}
                            onClick={() => transfer(obj)}
                        >
                            <div className={style.imgHolder}>
                                <img src={obj.image} alt="" />
                            </div>
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
        </>
    );
};

export default Medicine;
