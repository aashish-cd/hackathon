import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../component/Navbar/Navbar';
import Ambulance from '../component/Ambulance/Ambulance';
import Appointment from '../component/Appointment/Appointment';
import Carasoul from '../component/Carasoul/Carasoul';
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Ambulance /> */}

      <Appointment />
      <Carasoul />
    </>
  );
}
