import React, { useContext, useEffect } from 'react';
import { IndexContext } from '../context/index.context';
import axios from 'axios';

const Wrapper = ({ children }) => {
  const { setLoading, setAmbulanceData, setAppointmentData, setMedicineData } =
    useContext(IndexContext);

  useEffect(() => {
    // ambulance data
    const fetchAmbulanceData = async (url) => {
      setLoading(true);
      const response = await axios.get(url);
      setAmbulanceData(response.data);
      setLoading(false);
    };
    // appointment data
    const fetchAppointmentData = async (url) => {
      setLoading(true);
      const response = await axios.get(url);
      setAppointmentData(response.data);
      setLoading(false);
    };
    // medicine/store data
    const fetchMedicineData = async (url) => {
      setLoading(true);
      const response = await axios.get(url);
      setMedicineData(response.data);
      setLoading(false);
    };

    const asyncFunction = async () => {
      await fetchAmbulanceData('/api/ambulances/all');
      await fetchAppointmentData('/api/doctors/all');
      await fetchMedicineData('/api/stores/all');
    };

    asyncFunction();
  }, []);

  return <div>{children}</div>;
};

export default Wrapper;
