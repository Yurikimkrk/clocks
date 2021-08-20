import React from 'react'
import './AnalogClock.sass'

export const AnalogClock = ({hours, minutes, seconds}) => {

  const ss = seconds
  const ms = minutes
  const hs = hours

  const secondDegrees = (ss / 60) * 360
  const minuteDegrees = (ms / 60) * 360
  const hourDegrees = (hs / 12) * 360 + (ms / 2)

  const secondStyle = {
    transform: `rotate(${secondDegrees}deg)`
  }
  const minuteStyle = {
    transform: `rotate(${minuteDegrees}deg)`
  }
  const hourStyle = {
    transform: `rotate(${hourDegrees}deg)`
  }
  const hourArray = [0,1,2,3,4,5,6,7,8,9,10,11]

  return (
    <div className={'clock'}>
      <div className={'clock-face'}>
        <div className={'hand hour-hand'} style={hourStyle}> </div>
        <div className={'hand min-hand'} style={minuteStyle}> </div>
        <div className={'hand second-hand'} style={secondStyle}> </div>
        <div className={'dot'}> </div>
        {hourArray.map(i => <div className={`hour-${i}`} key={i}> </div>)}
      </div>
    </div>
  )
}

