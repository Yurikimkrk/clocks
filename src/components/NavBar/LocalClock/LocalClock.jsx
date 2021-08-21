import React from 'react'
import {useSelector} from 'react-redux'
import './LocalClock.sass'
import {LOCAL_GMT_DELTA} from '../../../redux/variables'

export const LocalClock = ({isGmtTime}) => {
  const timeNow = useSelector(state => state.app.time)

  const day = new Date(timeNow)
  const hourAdjust = isGmtTime? day.getHours() - LOCAL_GMT_DELTA : day.getHours()
  const hourCorrect = hourAdjust % 24
  const hours = hourCorrect > 9 ? hourCorrect : '0' + hourCorrect
  const minutes = day.getMinutes() > 9 ? day.getMinutes() : '0' + day.getMinutes()
  const seconds = day.getSeconds() > 9 ? day.getSeconds() : '0' + day.getSeconds()

  return (
    <div>
      <div className={'local-clock-box'}>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  )
}

