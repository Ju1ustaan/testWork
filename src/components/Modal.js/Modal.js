import React, { useState } from 'react'
import axios from 'axios';
import './Modal.css'

const Modal = ({ setShownModal }) => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        

        const formData = {
                'name': name,
                'phoneNumber': phoneNumber,
                'password': password
            }

        
        await axios.post('http://176.126.164.43:85/rassrochka/api/v1/user/saveUser', formData)
        .then((response) => {
            console.log(response.data);
            setName('');
            setPhoneNumber('');
            setPassword('');
        })
        .catch((error) => {
            console.log(error);
        })
        
    }


    return (
        <div className='modal'>

            <div className='modal__background'>
            </div>

            <div className='modal__wrapper'>
                <button className="modal__close" onClick={() => { setShownModal(false) }}>
                    X
                </button>

                <label className='modal__lbl' for="name">Name</label>
                <input id='name' type='text' placeholder='Press name' onChange={handleNameChange} value={name} required />

                <label className='modal__lbl' for="phone">Phone Number</label>
                <input id='phone' type='number' placeholder='Press phone number' onChange={handleNumberChange} value={phoneNumber} required />

                <label className='modal__lbl' for="password">Password</label>
                <input id='password' type='password' placeholder='Press password' onChange={handlePasswordChange} value={password} required />

                <button className='modal__btn' onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}

export default Modal