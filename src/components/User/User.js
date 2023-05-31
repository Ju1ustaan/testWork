import React from 'react'
import userImg from '../../assets/images/user__image.jpg'
import './User.css'

const User = ({ status, phoneNumber, name, date }) => {
    let newDate = date.split("T").join(" ").slice(0, 19)
    return (
        <div className='user'>
            <div className='user__img'>
                <img src={userImg} />
            </div>

            <div className='user__desc'>
            <p className='user__info'>Name:</p>
            <p className='user__info'>{name}</p>
            </div>

            <div className='user__desc'>
            <p className='user__info'>Phone Number:</p>
            <p className='user__info'>{phoneNumber}</p>
            </div>

            <div className='user__desc'>
            <p className='user__info'>Status:</p>
            <p className='user__info'>{status}</p>
            </div>

            <div className='user__desc'>
            <p className='user__info'>date:</p>
            <p className='user__info'>{newDate}</p>
            </div>
                
        </div>
    )
}

export default User