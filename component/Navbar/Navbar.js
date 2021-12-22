import React from 'react';
import style from './style.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/Ambulance/Ambulance'>Ambulance</Link>
      </li>
    </div>
  );
};

export default Navbar;
