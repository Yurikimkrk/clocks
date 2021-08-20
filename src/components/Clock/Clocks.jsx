import React from 'react'
import {useSelector} from 'react-redux'
import './Clocks.sass'
import {AnalogClock} from './AnalogClock/AnalogClock'

export const Clocks = ({timezone}) => {
  const timeNow = useSelector(state => state.app.time)

  let day = new Date(timeNow)
  let hourAdjust = day.getHours() + timezone
  let hours = hourAdjust % 24 > 9 ? hourAdjust % 24 : '0' + hourAdjust % 24
  let minutes = day.getMinutes() > 9 ? day.getMinutes() : '0' + day.getMinutes()
  let seconds = day.getSeconds() > 9 ? day.getSeconds() : '0' + day.getSeconds()

  return (
    <div className={'city-time'}>
      <div className={'clock-box'}>
        <AnalogClock hours={hours} minutes={minutes} seconds={seconds}/>
      </div>
      <div className={'digital-clock'}>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  )
}

