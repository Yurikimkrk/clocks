import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import './CityBlock.sass'
import {Dropdown} from 'react-bootstrap'
import {Clocks} from '../Clock/Clocks'

export const CityBlock = () => {
  const cities = useSelector(state => state.app.timezones)
  const defaultCity = useSelector(state => state.app.defaultCity)
  const [timezone, setTimezone] = useState(0)
  const [defaultCityName, setDefaultCityName] = useState(cities[defaultCity].name)

  const changeTimezone = (city) => {
    setTimezone(Number.parseInt(city.timezone))
    setDefaultCityName(city.name)
  }

  useEffect(() => {
    if (cities.length > 0) {
      setTimezone(Number.parseInt(cities[defaultCity].timezone))
    }
  }, [cities])

  return (
    <div>
      <Clocks timezone={timezone}/>
      <Dropdown className={'city'}>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          {defaultCityName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {cities.map(city => <Dropdown.Item key={city.name} onClick={() => changeTimezone(city)}>
            {city.name}
          </Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

