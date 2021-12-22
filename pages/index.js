import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ToAppointment from '../component/ToAppointment/ToAppointment';
import ToAmbulance from '../component/ToAmbulance/ToAmbulance';
import ToPharmacy from '../component/ToPharmacy/ToPharmacy'

export default function Home() {
  return (
    <>
      {/* <Ambulance /> */}
      {/* < Appointment /> */}
      {/* <Carasoul/>  */}
      <ToAppointment />
      <ToAmbulance />
      <ToPharmacy />
    </>
  );
}
