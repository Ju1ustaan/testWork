import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AllUsers.css'
import User from '../../components/User/User'


const AllUsers = ({ name }) => {
    const [allUsers, setAllUsers] = useState([])
    
    // здесь я запрашиваю всех юзеров
    useEffect(() => {
  
      const getData = async () => {
        const { data } = await axios("http://176.126.164.43:85/rassrochka/api/v1/user/getAllUsers")
        setAllUsers(data)
      }
      getData()
    }, [name])

  return (
    <section className='allUsers'>
        <div className='container'>
            <div className='allUsers__wrapper'>
              
                
                {
                    allUsers.map((el) => (
                        <User key={el.id} name={el.username} phoneNumber={el.phoneNumber} status={el.status} date={el.date} />
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default AllUsers