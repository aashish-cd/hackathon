import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Ambulance from './Ambulance/Ambulance'
// import Appointment from '../component/Appointment/Appointment'
// import Carasoul from '../component/Carasoul/Carasoul'
import ToAppointment from '../component/ToAppointment/ToAppointment'
import ToAmbulance from '../component/ToAmbulance/ToAmbulance'
export default function Home() {
  return (
      <>
      {/* <Ambulance /> */}
      {/* < Appointment /> */}
      {/* <Carasoul/>  */}
      <ToAppointment />
      <ToAmbulance />
      </>
  )
};
