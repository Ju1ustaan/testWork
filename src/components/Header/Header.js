import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import './Header.css'
import Modal from '../Modal.js/Modal'

const Header = ({name, setName, phoneNumber, setPhoneNumber, password, setPassword}) => {
  const [shownModal, setShownModal] = useState(false)
  
  return (
    <header className='header'>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__logo'></div>
                <h1 className='header__title'>
                    Beeline users
                </h1>    
                <Button setShownModal={setShownModal}/>
           
            </div>
        </div>
        {
          shownModal && <Modal setShownModal={setShownModal} setName={setName} name={name} setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} password={password} setPassword={setPassword}/>
        }
    </header>
  )
}

export default Header