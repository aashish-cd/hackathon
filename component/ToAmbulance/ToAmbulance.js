import React from 'react';
import style from './tamb.module.css';
import Link from 'next/link';

const ToAmbulance = () => {
  return (
    <div className={style.ambSection}>
      <div className={style.wholeToAppointContainer}>
        <div className={style.details}>
          <h2>Find Ambulance</h2>
          <p>
            Emergency! No fear just search for ambulance near you and make a
            phone call.
          </p>
          <Link href='/Ambulance/Ambulance'>
            <button>Search For An Ambulance</button>
          </Link>
        </div>
        <div className={style.imageHolder}>
          <img src='./amb.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default ToAmbulance;
