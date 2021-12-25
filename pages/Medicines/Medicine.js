import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import style from './medstyle.module.css';
import Link from 'next/link';
import { context } from '../../context/context';
import IndividualMed from '../IndividualMed/IndividualMed';
import Loader from 'react-loader-spinner';
import { IndexContext } from '../../context/index.context';

const Medicine = () => {
  const [objToSend, setobjToSend] = useState({});
  const [isVisible, setisVisible] = useState(false);
  const { medicineData, loading } = useContext(IndexContext);

  const transfer = (obj) => {
    setobjToSend({ ...obj });
    setisVisible(true);
    window.scrollTo(0, 0);
  };

  let object = { ...objToSend };
  return (
    <>
      {loading && (
        <div className='loaderContainer'>
          <Loader type='Puff' color='#00BFFF' height={200} width={200} />
        </div>
      )}
      {isVisible && (
        <Link href='./IndividualMed/IndividualMed'>
          <context.Provider value={objToSend}>
            <IndividualMed />
          </context.Provider>
        </Link>
      )}
      <div className={style.medicineWrapper}>
        {medicineData?.map((obj) => {
          return (
            <div
              className={style.cardHolder}
              key={Math.random()}
              onClick={() => transfer(obj)}
            >
              <div className={style.imgHolder}>
                <img src={obj.image} alt='' />
              </div>
              <h4>
                {obj.name}({obj.quantityInMg})
              </h4>
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
