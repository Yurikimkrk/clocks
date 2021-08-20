import React from 'react'
import {useSelector} from 'react-redux'
import './LocalClock.sass'

export const LocalClock = () => {
  const timeNow = useSelector(state => state.app.time)


  let day = new Date(timeNow)
  let hourAdjust = day.getHours()
  let hours = hourAdjust % 24 > 9 ? hourAdjust % 24 : '0' + hourAdjust % 24
  let minutes = day.getMinutes() > 9 ? day.getMinutes() : '0' + day.getMinutes()
  let seconds = day.getSeconds() > 9 ? day.getSeconds() : '0' + day.getSeconds()

  return (
    <div>
      <div className={'clock-box'}>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  )
}

