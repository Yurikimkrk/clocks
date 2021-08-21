import React, {useEffect, useState} from 'react'
import {Button, Container, Dropdown, Navbar} from 'react-bootstrap'
import './NavBar.sass'
import {useDispatch, useSelector} from 'react-redux'
import {updateTime, setNumberOfClocks, setGmt, setInfoVisible} from '../../redux/app-reducer'
import {LocalClock} from './LocalClock/LocalClock'
import {MAXIMUM_NUMBER_OF_CLOCKS} from '../../redux/variables'


export const NavBar = () => {
  const dispatch = useDispatch()
  const numberOfClocks = useSelector(state => state.app.numberOfClocks)
  const [currentNumbOfClocks, setCurrentNumbOfClocks] = useState(numberOfClocks)
  const isGmtTime = useSelector(state => state.app.gmtTime)
  const maxNumberOfClocks = MAXIMUM_NUMBER_OF_CLOCKS
  const clocks = []
  for (let i = 0; i < maxNumberOfClocks; i++) {
    clocks[i] = i + 1
  }

  const setNumbOfClocks = i => {
    dispatch(setNumberOfClocks(i))
    setCurrentNumbOfClocks(i)
  }

  const setGMT = () => {
    dispatch(setGmt(!isGmtTime))
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
        <Button variant="outline-warning" size="md"
                onClick={() => dispatch(setInfoVisible(true))}>
          Описание проекта
        </Button>
        <div className={'navbar-text-center'}>
          <span>Количество часов:</span>
          <Dropdown className={'clocks-dropdown'}>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              {currentNumbOfClocks}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {clocks.map(i => <Dropdown.Item key={i} onClick={() => setNumbOfClocks(i)}>
                {i}
              </Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={'navbar-text'}>
          <Button variant="outline-warning" size="md" className={'me-3 gmt-button'}
                  onClick={() => setGMT()}>
            {isGmtTime? 'GMT Time': 'Local Time'}
          </Button>
          <LocalClock isGmtTime={isGmtTime}/>
        </div>
      </Container>
    </Navbar>
  )
}

