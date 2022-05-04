import React from 'react'

export default function Card(props) {
    const {imgLink , locationIcon , placeName , Date , about , famousPlace} = props
  return (
    <div className='Card'>
        <div className='imgDiv'>
            <img src={imgLink} alt="" />
        </div>
        <div className='allThings'>
            <div className='firstLine'>
                <img src={locationIcon} alt="" />
                <p className='placeName'> {placeName} </p>
            </div>
            <h1> {famousPlace} </h1>
            <p className='date'> {Date} </p>
            <p className='about'> {about} </p>
        </div>
    </div>
  )
}
