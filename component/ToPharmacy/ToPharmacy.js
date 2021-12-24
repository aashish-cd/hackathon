import React from 'react';
import style from './topharmacy.module.css';
import Link from 'next/link';

function ToPharmacy() {
  return (
    <div className={style.wholeToAppointContainer}>
      <div className={style.imageHolder}>
        <img src='./pharmacy.png' alt='' />
      </div>
      <div className={style.details}>
        <h2>Online Pharmacy</h2>
        <p>
          Oops! medication finished? Now worries we brought you the online
          pharmacy.
        </p>
        <Link href='/Medicines/Medicine'>
          <button>Start Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default ToPharmacy;
