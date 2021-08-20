import React, {useEffect, useState} from 'react'
import {Container, Dropdown, Navbar} from 'react-bootstrap'
import './NavBar.sass'
import {useDispatch, useSelector} from 'react-redux'
import {updateTime, setNumberOfClocks, setLoading} from '../../redux/app-reducer'
import {LocalClock} from './LocalClock/LocalClock'
import {MAXIMUM_NUMBER_OF_CLOCKS} from '../../redux/constants'


export const NavBar = () => {
  const dispatch = useDispatch()
  const numberOfClocks = useSelector(state => state.app.numberOfClocks)
  const [currentNumbOfClocks, setCurrentNumbOfClocks] = useState(numberOfClocks)
  const maxNumberOfClocks = MAXIMUM_NUMBER_OF_CLOCKS
  const clocks = []
  for (let i = 0; i < maxNumberOfClocks; i++) {
    clocks[i] = i + 1
  }

  const setNumbOfClocks = async (i) => {
    dispatch(setLoading(false))
    dispatch(setNumberOfClocks(i))
    setCurrentNumbOfClocks(i)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Navbar bg="dark" variant="info">
      <Container>
        <div className={'navbar-logo'}>
          Clocks
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            {currentNumbOfClocks}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {clocks.map(i => <Dropdown.Item key={i} onClick={() => setNumbOfClocks(i)}>
              {i}
            </Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
        <div className={'navbar-text'}>
          <span>Локальное время:</span>
          <LocalClock/>
        </div>
      </Container>
    </Navbar>
  )
}

