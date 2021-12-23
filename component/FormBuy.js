import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import style from "./formstyle.module.css";

const Form = (props) => {
    const [name, setName] = useState("");
    const [totalPrice, setTotalPrice] = useState(parseInt(props.totalPrice))

    

    const [medicineName, setMedicineName] = useState(props.medicineName);
    const [ shippingAddress,setShippingAddress] = useState('');
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleSubmit = async () => {
        
        if(email.includes('@') === false){
            setErrorMessage(true)
           
        }else{
            setLoading(true);
    
        await axios
            .post("/api/orders/add", {
                userName: name,
                totalPrice: totalPrice,
                medicineName : medicineName,
                shippingAddress : shippingAddress,
                email: email,
                phone: phone,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

            setName('')
            setTotalPrice(0)
            setMedicineName('')
            setShippingAddress('')
            setEmail('')
            setPhone('')
            setErrorMessage(false)
            

            setMessage(true)
            setTimeout(() => {
                setMessage(false)
            }, 3000);
        setLoading(false);    }
    };
    return (
        <div className={style.overlay}>
            {loading ? (
               <div className="loaderContainer">

               <Loader type="Puff" color="#00BFFF" height={100} width={100} />
               </div>   
            ) : (
                <div>
                    

    
                    <div className="container">
                        <div className="title">
                            Please Submit Your Detail To Continue: 
                        </div>
                        {
                            message && <div className="message-notification" >
                                <p className="message-text" style={{color:'green'}}>Data added successfully</p>
                            </div>
                        }
                        {
                            errorMessage && <div className="message-notification">
                                <p className="message-text">data validation failed</p>
                            </div>
                        }
                        <div
                            className={style.cross}
                            onClick={() => {
                                props.overlay(false);
                            }}
                        >
                            X
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
                                            Medicine Name
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={props.medicineName}
                                            
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">
                                            Total Price
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={props.totalPrice}
                                           
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
                                            type="email"
                                            placeholder="Enter your email id"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Shipping Address</span>
                                        <input
                                            type="text"
                                            value={shippingAddress}
                                            onChange={(e) => setShippingAddress(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="input-box">

                                        <form action="https://uat.esewa.com.np/epay/transrec" method="GET">
                                            <input value="100" name="amt" type="hidden"/>
                                            <input value="EPAYTEST" name="scd" type="hidden"/>
                                            <input value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453" name="pid" type="hidden"/>
                                            <input value="000AE01" name="rid" type="hidden"/>
                                            <input value="Pay with Esewa" type="hidden"/>
                                        </form>
                                    </div>
                                    <div className="input-box">
                                        <form action="https://uat.esewa.com.np/epay/main" method="POST">
                                            <input value="100" name="tAmt" type="hidden" />
                                            <input value="90" name="amt" type="hidden" />
                                            <input value="5" name="txAmt" type="hidden" />
                                            <input value="2" name="psc" type="hidden" />
                                            <input value="3" name="pdc" type="hidden" />
                                            <input value="EPAYTEST" name="scd" type="hidden" />
                                            <input value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453" name="pid" type="hidden" />
                                            <input value="http://merchant.com.np/page/esewa_payment_success?q=su" type="hidden" name="su" />
                                            <input value="http://merchant.com.np/page/esewa_payment_failed?q=fu" type="hidden" name="fu"/>
                                            <input value="Pay With Esewa" type="submit"/>
                                        </form>
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
