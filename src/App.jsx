import React, {useEffect} from 'react'
import './App.sass'
import {Container, Spinner} from 'react-bootstrap'
import {timezonesRequest} from './requests/requests'
import {setTimezones, setLoading, setInfoVisible} from './redux/app-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {CityBlock} from './components/CityBlock/CityBlock'
import {NavBar} from './components/NavBar/NavBar'
import {ModalInfo} from './components/ModalInfo/ModalInfo'


const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.app.isLoading)
  const infoVisible = useSelector(state => state.app.isInfoVisible)
  const numberOfClocks = useSelector(state => state.app.numberOfClocks)
  const clocks = []
  for (let i = 0; i < numberOfClocks; i++) {
    clocks[i] = i + 1
  }

  useEffect(() => {
    timezonesRequest().then((data) => {
      dispatch(setTimezones(data))
    }).finally(() => dispatch(setLoading(false)))
  },[])

  if(isLoading) {
    return <div className={'spin-container'}><Spinner animation="grow" className={'spin'}/></div>
  }

    return (
      <div>
        <NavBar/>
        <Container>
          <div className={'clocks-box'}>
            {clocks.map(i => <CityBlock key={i}/>)}
          </div>
          <ModalInfo show={infoVisible} onHide={() => dispatch(setInfoVisible(false))}/>
        </Container>
      </div>
    )
}

export default App
