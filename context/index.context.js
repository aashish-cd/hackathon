import React, { useState, createContext } from 'react';

export const IndexContext = createContext();

const IndexProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [ambulanceData, setAmbulanceData] = useState([]);
  const [appointmentData, setAppointmentData] = useState([]);
  const [medicineData, setMedicineData] = useState([]);

  return (
    <IndexContext.Provider
      value={{
        loading,
        setLoading,
        ambulanceData,
        setAmbulanceData,
        appointmentData,
        setAppointmentData,
        medicineData,
        setMedicineData,
      }}
    >
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexProvider;
