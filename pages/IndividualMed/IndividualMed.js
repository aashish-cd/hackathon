import React, { useContext, useState } from 'react';
import { context } from '../../context/context';
import style from './individ.module.css';
import Form from '../../component/FormBuy';
import Medicine from '../Medicines/Medicine';

const IndividualMed = () => {
  const [totalPrice, settotalPrice] = useState(0);
  const [medName, setmedName] = useState(0);

  const [quantity, setquantity] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const overlayController = (e, value) => {
    setOverlay(value);
    if (e) {
      let parent = e.target.parentElement;
      setmedName(parent.firstElementChild.textContent);
      settotalPrice(
        parent.lastElementChild.previousSibling.textContent.split('.')[1]
      );
      // setDocName(parent.firstElementChild.textContent);
    }
  };

  const object = useContext(context);
  return (
    <>
      <div className={style.wholeContainer}>
        <div className={style.imgHolder}>
          <img src={object?.image} alt='' />
        </div>
        <div className={style.detail}>
          <h2>{object?.name.toUpperCase()}</h2>
          <h3>Aount: Rs.{object?.price}</h3>
          <p>{object?.description}</p>
          <p>Stock: {object?.stock}</p>
          <input
            type='number'
            name='quantity'
            value={quantity}
            onChange={(e) =>
              setquantity(
                e.target.value > 0 && e.target.value <= object?.stock
                  ? e.target.value
                  : 0
              )
            }
          />{' '}
          <br />
          <h3>Total: Rs.{object?.price * quantity}</h3>
          <button onClick={(e) => overlayController(e, true)}>Buy</button>
        </div>
      </div>
      {overlay && (
        <Form
          overlay={overlayController}
          medicineName={medName}
          totalPrice={totalPrice}
        />
      )}

      <Medicine />
    </>
  );
};

export default IndividualMed;
