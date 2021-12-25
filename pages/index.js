import ToAppointment from '../component/ToAppointment/ToAppointment';
import ToAmbulance from '../component/ToAmbulance/ToAmbulance';
import ToPharmacy from '../component/ToPharmacy/ToPharmacy';

export default function Home() {
  return (
    <>
      <ToAppointment />
      <ToAmbulance />
      <ToPharmacy />
    </>
  );
}
