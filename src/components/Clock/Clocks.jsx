import React from 'react'
import {useSelector} from 'react-redux'
import './Clocks.sass'
import {AnalogClock} from './AnalogClock/AnalogClock'
import {LOCAL_GMT_DELTA} from '../../redux/variables'

export const Clocks = ({timezone}) => {
  const timeNow = useSelector(state => state.app.time)
  const isGmtTime = useSelector(state => state.app.gmtTime)

  const day = new Date(timeNow)
  const hourAdjust = isGmtTime? day.getHours() - LOCAL_GMT_DELTA + timezone : day.getHours() + timezone
  const hourCorrect = hourAdjust % 24
  const hours = hourCorrect > 9 ? hourCorrect : '0' + hourCorrect
  const minutes = day.getMinutes() > 9 ? day.getMinutes() : '0' + day.getMinutes()
  const seconds = day.getSeconds() > 9 ? day.getSeconds() : '0' + day.getSeconds()

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

