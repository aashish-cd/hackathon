import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post('http://localhost:5000/api/users/add', {
        name: name,
        email: email,
        phone: phone,
        location: location,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Loader type='Puff' color='#00BFFF' height={100} width={100} />
      ) : (
        <div>
          <div className='container'>
            <div className='title'>get Appointment for doctor</div>
            <div className='content'>
              <form action='#'>
                <div className='user-details'>
                  <div className='input-box'>
                    <span className='details'>Full Name</span>
                    <input
                      type='text'
                      placeholder='Enter your name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='input-box'>
                    <span className='details'>Phone no.</span>
                    <input
                      type='text'
                      placeholder='Enter your phone no. '
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className='input-box'>
                    <span className='details'>Email</span>
                    <input
                      type='text'
                      placeholder='Enter your email id'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='input-box'>
                    <span className='details'>Address</span>
                    <input
                      type='text'
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className='button' onClick={handleSubmit}>
                  <input type='submit' value='Submit' />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
