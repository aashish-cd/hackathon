import React from 'react';
import style from './tapp.module.css';
import Link from 'next/link';

const ToAppointment = () => {
  return (
    <div className={style.wholeToAppointContainer}>
      <div className={style.imageHolder}>
        <img src='./dc.png' alt='' />
      </div>
      <div className={style.details}>
        <h2>Appointment</h2>
        <p>
          Make an appointment with the doctor of your choice from any location
          you want.
        </p>
        <Link href='/Appointment/Appointment'>
          <button>Make An Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default ToAppointment;
