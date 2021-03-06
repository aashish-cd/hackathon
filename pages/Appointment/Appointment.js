import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import style from './appointment.module.css';
import Link from 'next/link';
import Form from '../../component/Form';
import Loader from 'react-loader-spinner';
import { IndexContext } from '../../context/index.context';

const Appointment = () => {
  const [docName, setDocName] = useState('');
  const [overlay, setOverlay] = useState(false);

  const { appointmentData, loading } = useContext(IndexContext);

  const overlayController = (e, value) => {
    setOverlay(value);
    if (e) {
      let parent = e.target.parentElement;
      setDocName(parent.firstElementChild.textContent);
    }
  };

  const [searchData, setSearchData] = useState('');

  return (
    <div className={style.appointmentWrapper}>
      <>
        {loading && (
          <div className='loaderContainer'>
            <Loader type='Puff' color='#00BFFF' height={200} width={200} />
          </div>
        )}
        <div className={style.searchWrapper}>
          <label htmlFor='inp'> Search Name: </label>
          <input
            type='text'
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>
        <div className={style.tableHolder}>
          <div className={`${style.head}`}>
            <div>Name</div>
            <div>Department</div>
            <div>Time</div>
            <div>Hospital</div>
            <div>Location</div>
            <div>Appointment</div>
          </div>
          {appointmentData?.map((obj) => {
            if (
              obj.name.toLowerCase().includes(searchData) ||
              obj.name.includes(searchData) ||
              obj.name.toUpperCase().includes(searchData)
            ) {
              return (
                <div key={Math.random()} className={style.holder}>
                  <div>{obj.name}</div>
                  <div>{obj.department}</div>
                  <div>{obj.workingHours}</div>
                  <div>{obj.hospital}</div>
                  <div>{obj.location}</div>
                  <button
                    onClick={(e) => {
                      overlayController(e, true);
                    }}
                  >
                    Make an appointment
                  </button>
                </div>
              );
            }
          })}
        </div>
        {overlay && <Form overlay={overlayController} docName={docName} />}
      </>
    </div>
  );
};

export default Appointment;
