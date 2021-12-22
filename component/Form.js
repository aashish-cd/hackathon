import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import style from "./formstyle.module.css";

const Form = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [doctorName, setDoctorName] = useState(props.docName);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        await axios
            .post("/api/users/add", {
                name: name,
                email: email,
                doctorName: doctorName,
                phone: phone,
                location: location,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        setLoading(false);
    };
    return (
        <div className={style.overlay}>
            {loading ? (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            ) : (
                <div>
                    <div className="container">
                        <div className="title">
                            get Appointment for doctor: {props.docName}
                        </div>
                        <div
                            className={style.cross}
                            onClick={() => {
                                props.overlay(false);
                                console.log("hehe ");
                            }}
                        >
                            X
                        </div>
                        <div className="content">
                            <form action="#">
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">
                                            Full Name
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">
                                            Phone no.
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Enter your phone no. "
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Email</span>
                                        <input
                                            type="text"
                                            placeholder="Enter your email id"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Address</span>
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={(e) =>
                                                setLocation(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="button" onClick={handleSubmit}>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;
