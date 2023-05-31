import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__logo'></div>
                <h1 className='header__title'>
                    Beeline users
                </h1>               
            </div>
        </div>
    </header>
  )
}

export default Header